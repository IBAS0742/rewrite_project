<template>
    <yd-layout>
        <yd-navbar fixed>
            <div slot="left" @click="checkOver">
                <yd-icon name="fanhui2" size="0.3rem" custom></yd-icon>
            </div>
            <div slot="center" style="font-size: 0.4rem;">{{title}}</div>
        </yd-navbar>

        <div style="margin-top: 1rem;">
            <div style="background: white;">
                <div class="window-check-step-block">
                    <div>基础信息</div>
                    <v-form-common :input-info="projectInfoFields"></v-form-common>
                    <yd-button size="large" @click.native="updateProjectInfo">提交</yd-button>
                </div>
                <div class="window-check-step-block" v-show="!img">
                    <yd-button style="margin: 0.2em;" @click.native="uploadImage">上传图片</yd-button>
                </div>
                <div class="window-check-step-block" v-show="img">
                    <div style="padding: 0.2em 0;">
                        <yd-button v-for="(flag,ind) in flags" :key="ind" style="margin: 0.1rem;"
                                :type="flag.check?'primary':'warning'" @click.native="checkPoint(flag)">检验位置{{flag.word}}</yd-button>
                    </div>
                    <div style="display: block;width: 100%;">
                        <img style="width: 100%;" :src="retImg || img" alt="">
                        <div>
                            <yd-button v-show="!pictureOK" type="primary" @click.native="saveImage()">使用图片</yd-button>
                            <yd-button v-show="!pictureOK" type="primary" @click.native="img='';zip=false">重新上传图片</yd-button>
                            <yd-button v-show="pictureOK" type="primary" @click.native="toMakeFlag()">添加标记</yd-button>
                        </div>
                    </div>
                </div>
                <yd-popup v-model="show" position="bottom" width="100%" height="100%">
                    <project-info-base
                            style="height: 100%;"
                            ref="pib"
                            :flag-type="'number'"
                            @outputImage="outputImage"
                            @imageLoaded="imageLoaded"
                            :img-url="img">
                        <div slot="navbar-left">
                            <yd-button type="primary" @click.native="$refs.pib.option.canMove=false;$refs.pib.option.change=false;">标记</yd-button>
                        </div>
                        <div slot="navbar-center">
                            <yd-button type="primary" @click.native="$refs.pib.option.canMove=false;$refs.pib.option.change=true;">修改</yd-button>
                        </div>
                        <div slot="navbar-right">
                            <yd-button type="primary" @click.native="show = false;$refs.pib.output();">保存</yd-button>
                        </div>
                    </project-info-base>
                </yd-popup>
            </div>
        </div>

        <!-- 上传文件组件 -->
        <div style="display: none;">
            <input-file @add="fileChange" ref="file"></input-file>
        </div>
    </yd-layout>
</template>

<script>
    // api
    import * as projectApi from './../../../api/projectApi'

    // component
    import projectInfoBase from './../component/picture-mark-base'
    import vFormCommon from './../../../components/v-form/v-form-common'
    import inputFile from './../../../components/uploadFile/input-file'

    // extend method
    import { zipImage } from './../../../common/js/asynImageFlag'
    import { formVFormCommonFields } from './../../../common/js/component-utils/v-form-common'
    import * as storages from './../../../common/js/storageManage'

    // fields
    import { checkStepOne } from './../common/projectFields';

    export default {
        name: "window-check-step-one",
        data() {
            return {
                title : '编辑工程信息',
                show : false,
                img : '',//require('./a.jpg'),
                retImg : '',
                projectInfo: {},
                flags : [],
                projectInfoFields : [],
                projectId : '',
                pictureOK : false,
                // todo 旧的session缓存保存名称
                imgId : '',
                // 对应数据的图片id
                imageId : '',
                fetchCoordState : {
                    fetch : false,
                    init : false
                },
                // 如果是上次图片，那么图片确认前不能进行其他操作
                ok : false,
                zip : false
            }
        },
        components : {
            projectInfoBase,
            vFormCommon,
            inputFile
        },
        mounted() {
            // todo
            window.$this = this;
            const projectId = this.$route.query.projectId;
            this.$dialog.loading.open('正在获取工程信息');
            if (projectId) {
                let $this = this;
                this.projectId = projectId;
                this.imgId = 'project_' + projectId + '_step1_image_1';
                projectApi.getProjectById(projectId)
                    .then(_ => projectApi.projectInfoPerDear(_.projectInfo))
                    .then(_ => {
                        this.projectInfo = _;
                        this.projectInfoFields.forEach(pi => {
                            pi.value = _[pi.name];
                        });
                        _.image = JSON.parse(_.image);
                        if (_.image && _.image[$this.imgId]) {
                            $this.fetchImage($this.projectId,_.image[$this.imgId]);
                        } else {
                            $this.$dialog.loading.close();
                        }
                    });
                this.projectInfoFields = this.projectInfoFields.concat(formVFormCommonFields(checkStepOne(this)));
            } else {
                // todo
            }
        },
        methods : {
            toMakeFlag() {
                this.show = true;
            },
            //完成标记
            outputImage(ret,retImg,deleteIds,noSave) {
                console.log(arguments);
                this.retImg = retImg;
                if (noSave) {
                    // 不做保存工作
                    projectApi.getProjectProcess(this.projectId)
                        .then(_ => {
                            for (let i = 0;i < _.list.length;i++) {
                                for (let j = 0;j < ret.length;j++) {
                                    if (ret[j].fid == _.list[i].step) {
                                        ret[j].check = true;
                                        break;
                                    }
                                }
                            }
                            this.flags = ret;
                        });
                } else {
                    this.flags = ret;
                    this.$dialog.loading.open('正在提交更改');
                    let taskNum = ret.length + (deleteIds.length ? 1 : 0);
                    let taskOverCheck = () => {
                        taskNum--;
                        if (taskNum) {} else {
                            this.$refs.pib.reFlag();
                            this.$dialog.loading.close();
                            this.fetchCoords();
                        }
                    };
                    ret.forEach(flag => {
                        if (flag.id) {
                            projectApi.updateCoord(flag.id,flag)
                                .then(taskOverCheck);
                        } else {
                            projectApi.saveCoord(this.imageId,flag)
                                .then(taskOverCheck);
                        }
                    });
                    (deleteIds.length) ?
                        (projectApi.deleteCoord(deleteIds)
                            .then(taskOverCheck)) : false;
                }
            },
            checkPoint(flag) {
                storages.cookieStorageManage.add('flag',flag);
                this.$router.push({
                    path : '/window/check/stepTwo'
                });
                sessionStorage.setItem('query',JSON.stringify({
                    flagId : flag.fid,
                    projectId : parseInt(this.projectId),
                    perStr : 'project_' + this.projectId + '_step2_' + flag.fid,
                    image : this.projectInfo.image,
                    word : flag.word + ''
                }));
            },
            fileChange(target) {
                this.$dialog.loading.open('加载图片');
                this.$dialog.loading.open('正在压缩图片');
                zipImage(window.URL.createObjectURL(target.files[0]),0,(imgSrc,width,height) => {
                    $this.zip = true;
                    $this.img = imgSrc;
                    $this.$dialog.loading.close();
                });
            },
            uploadImage() {
                this.$refs.file.$el.click();
                // let inp = document.createElement('input');
                // this.$dialog.notify({
                //     mes: '点击前',
                //     timeout: 5000
                // });
                // inp.onchange = (e) => {
                //     this.$dialog.notify({
                //         mes: JSON.stringify(e),
                //         timeout: 5000
                //     });
                //     this.$dialog.loading.open('加载图片');
                //     this.img = window.URL.createObjectURL(e.target.files[0]);
                //     this.$dialog.notify({
                //         mes: '图片读取到了，链接为 : ' + window.URL.createObjectURL(e.target.files[0]),
                //         timeout: 5000
                //     });
                // };
                // inp.type = 'file';
                // inp.accept = 'image/*';
                // setTimeout(() => {
                //     inp.click();
                // },100);
                // this.$dialog.notify({
                //     mes: '点击后',
                //     timeout: 5000
                // });
            },
            updateProjectInfo() {
                var data = {
                    state : 1,
                    id : this.projectId
                };
                this.projectInfoFields.forEach(pi => {
                    data[pi.name] = pi.value;
                });
                this.$dialog.loading.open('updating');
                projectApi.updateProject(data)
                    .then(_ => {
                        this.$dialog.loading.close();
                    });
            },
            // 获取图片，这里是为了将 垂直结构 代码化解为 水平结构
            fetchImage(projectId,imgId) {
                let $this = this;
                projectApi.getImage(projectId,imgId)
                    .then(imgInfo => {
                        if (imgInfo.projectImage && imgInfo.projectImage.image) {
                            $this.pictureOK = true;
                            // todo
                            projectApi.fetchImage(imgInfo.projectImage.image)
                                .then(_ => {
                                    $this.retImg = $this.img = _;
                                    $this.fetchCoords(imgId);
                                    $this.ok = true;
                                });
                        } else {
                            $this.$dialog.loading.close();
                        }
                    });
            },
            // 获取点标记，这里也是为了将 垂直结构 代码化解为 水平结构
            fetchCoords(imageId) {
                this.imageId = this.imageId || imageId;
                if (this.fetchCoordState.init) {
                    this.$dialog.loading.open('正在获取标记信息');
                    this.fetchCoordState.fetch = true;
                    let $this = this;
                    projectApi.getCoordList(this.imageId)
                        .then(_ => {
                            _.page.list.forEach(coord => {
                                coord.coord = JSON.parse(coord.coord);
                                coord.coord.id = coord.id;
                                coord.coord.check = false;
                                $this.$refs.pib.newFlag(coord.coord);
                            });
                            setTimeout(() => {
                                $this.$refs.pib.output(true);
                                $this.$dialog.loading.close();
                            });
                        });
                }
            },
            imageLoaded() {
                this.$dialog.loading.close();
                if (this.ok) {
                    this.fetchCoordState.init = true;
                    if (!this.fetchCoordState.fetch) {
                        this.fetchCoords();
                    }
                } else {
                    //todo
                    console.log("loaded");
                    let $this = this;
                    // if (!this.zip) {
                    //     this.$dialog.loading.open('正在压缩图片');
                    //     zipImage(this.$refs.pib.retImg(),0,(imgSrc,width,height) => {
                    //         $this.zip = true;
                    //         $this.img = imgSrc;
                    //         $this.$dialog.loading.close();
                    //     });
                    // }
                }
            },
            // 将图片保持到服务器
            saveImage() {
                this.$dialog.loading.open('正在保存图片');
                projectApi.saveIamge({
                    image : this.$refs.pib.retImg(),
                    projectId : this.projectId,
                    step : ''
                })
                    .then(data => {
                        this.ok = true;
                        this.pictureOK = true;
                        this.$dialog.loading.open('正在更新工程信息');
                        this.imageId = data.imageId;
                        this.imgId = 'project_' + this.projectId + '_step1_image_1';
                        let image = {};
                        image[this.imgId] = this.imageId;
                        console.log(image);
                        projectApi.updateProject({
                            id : this.projectId,
                            image : JSON.stringify(image)
                        })
                            .then(_ => {
                                this.$dialog.loading.close();
                            });
                    });
            },
            //
            checkOver() {
                this.$dialog.confirm({
                    title: '确认退出？',
                    mes: '退出后视为检验结束',
                    opts: () => {
                        this.$dialog.loading.open('提交更改');
                        projectApi.updateProject({
                            id : this.projectId,
                            state : 2
                        })
                            .then(_ => {
                                this.$dialog.loading.close();
                                this.$router.go(-1);
                            });
                    }
                });
            }
        },
        watch : {
            '$route'(val) {
                console.log(val)
            }
        }
    }
</script>

<style>
    .yd-popup-content>div {
        height: 100% !important;
        position: absolute;
        width: 100%;
    }
    .window-check-step-block {
        padding: 0.5em;
    }
</style>