<template>

    <yd-layout>
        <yd-navbar fixed>
            <div slot="left" @click="$router.go(-1)">
                <yd-icon name="fanhui2" size="0.3rem" custom></yd-icon>
            </div>
            <div slot="center" style="font-size: 0.4rem;">{{title}}</div>
        </yd-navbar>
        <div style="margin-top: 1rem;">
            <div style="padding: 0.5em;" v-for="(img,ind) in imgs" :key="ind">
                <div style="display: block;width: 100%;">
                    <img style="width: 100%;" :src="img.retImg || img.img" alt="">
                    <div>
                        <yd-button v-show="!img.ok" type="warning" @click.native="imgOK(ind)">使用该图片</yd-button>
                        <yd-button v-show="!img.ok" type="warning" @click.native="removeImage(ind)">删除图片</yd-button>
                        <yd-button v-show="img.ok" type="primary" @click.native="toMakeFlag(ind)">添加标记</yd-button>
                        <yd-button v-show="img.ok" type="primary" @click.native="removeImage(img,ind)">删除图片</yd-button>
                    </div>
                    <yd-accordion v-show="img.flags.length">
                        <yd-accordion-item
                                v-for="(flag,ind_) in img.flags" :key="ind_"
                                :title="'标记点' + query.word + ' - ' + (ind + 1) + ' - ' + flag.word + '信息'">
                            <div style="padding: .24rem;">
                                <div v-for="(info,infoInd) in flag.info" :key="infoInd" style="display: inline-block;width: 100%;line-height: 0.6rem;font-size: 0.3rem;">
                                    <div style="display: inline-block;width:50%;box-sizing: border-box;float:left;">{{infoInd}}</div>
                                    <div style="display: inline-block;width:50%;box-sizing: border-box;padding-left: 0.2rem;">{{info}}</div>
                                </div>
                            </div>
                        </yd-accordion-item>
                    </yd-accordion>
                </div>
            </div>

            <div style="padding: 0.5em;">
                <yd-button style="margin: 0.2em;" @click.native="uploadImage">添加图片</yd-button>
            </div>

            <yd-popup v-model="show" position="bottom" width="100%" height="100%">
                <project-info-base
                        style="height: 100%;"
                        ref="pib"
                        :flag-type="'default'"
                        @outputImage="outputImage"
                        @imageLoaded="imageLoaded"
                        @imageClick="imageClick"
                        :img-url="curImgInfo.img || ''">
                    <div slot="navbar-left">
                        <yd-button type="primary" @click.native="$refs.pib.option.canMove=false;">标记</yd-button>
                    </div>
                    <div slot="navbar-center">
                        <yd-button type="primary" @click.native="$refs.pib.option.canMove=false;$refs.pib.option.change=true;">修改</yd-button>
                    </div>
                    <div slot="navbar-right">
                        <yd-button type="primary" @click.native="show = false;$refs.pib.output();">保存</yd-button>
                    </div>
                    <div slot="other">
                        <yd-popup v-model="windowInfoShow" position="bottom" width="100%" height="100%">
                            <yd-navbar ref="navbar" fixed>
                                <div slot="left" @click="cancelFlag">取消</div>
                                <div slot="center" style="font-size: 0.4rem;">标记点信息</div>
                                <div slot="right" @click="saveFlag">保存</div>
                            </yd-navbar>
                            <div style="padding-top: 1rem;">
                                <v-form-common
                                        @radioSelectChange="radioSelectChange"
                                        :input-info="windowOptions"></v-form-common>
                            </div>
                        </yd-popup>
                    </div>
                </project-info-base>
            </yd-popup>
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
    import { storageManage } from './../../../common/js/storageManage'
    import { formVFormCommonFields } from './../../../common/js/component-utils/v-form-common'
    import { zipImage } from './../../../common/js/asynImageFlag'

    // util
    import {mergeFields} from './../../../common/js/component-utils/fieldsSplit'

    export default {
        name: "window-check-step-two",
        data() {
            return {
                title : '检查位置',
                show : false,
                imgIds : [],
                imgs : [
                    // {
                    //     ok : '', //使用该图片
                    //     img : '',
                    //     retImg : '',
                    //     imgId : '',
                    //     flags : [],
                    //     imageId : '',
                    //     init : false,
                    //     fetch : false,
                    //     zip : true,  //图片是否压缩过
                    // }
                ],
                //这个对象是用于临时存放一个图片信息的对象，即 imgs 中的一个对象
                curImgInfo : {},
                // 执行队列
                execList : [],
                windowInfoShow : false,
                curFlag : {},
                windowOptions: [],
                // 从步骤一获取的参数
                query : {
                    // 步骤一选中的标记点的 fid
                    flagId : '',
                    // 项目id
                    projectId : 0,
                    // 图片前缀
                    perStr : '',
                    // 图片集合对象
                    image : {},
                    word : ''
                }
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
            this.$store.state.windowTitle = '编辑工程信息';
            /**
             * 代码流程
             * 1.获取并检查参数是否正确
             * 2.从参数中获取图片信息
             * 3.获取图片坐标信息(并绘制覆盖原图)
             * */
            // step 1
            let query = JSON.parse(sessionStorage.getItem('query') || '{}');
            let isOk = true;
            console.log(query,this.query);
            for (let i in this.query) {
                if (i in query && (typeof query[i] == typeof this.query[i])) {
                    this.query[i] = query[i];
                } else {
                    // todo 参数有问题
                    isOk = false;
                }
            }
            this.query.projectId = parseInt(this.query.projectId);
            if (isOk) {
                this.title = '检验位置:' + this.query.word;
                // todo 参数正确的方案 获取图片信息
                for (var i in query.image) {
                    if (i.indexOf(query.perStr) + 1) {
                        this.imgIds.push(query.image[i]);
                    }
                }
                this.loadImages();
            } else {
                // todo 参数有问题
                this.$dialog.toast({
                    mes: '发生错误，请退出重新进入',
                    timeout: 2000
                });
            }

            this.initWindowSelection();
        },
        methods : {
            // 初始化窗户标记选项
            initWindowSelection() {
                projectApi.getWindowInfo()
                    .then(_ => _.check_window)
                    .then(wi => {
                        let options = {
                            "type":"radioSelectVer",
                            "label":"",
                            "placeholder":"",
                            "value": 1,
                            "name":"",
                            "options":[]
                        };
                        let formOptions = [];
                        formOptions.push(Object.assign({},options,{
                            id : '',
                            label: '窗户类型',
                            options : []
                        },{
                            type : 'radioSelect'
                        }));
                        wi.forEach(_ => {
                            formOptions[0].options.push({
                                value : _.description,
                                label : _.description,
                                id : _.id
                            });
                            _.childrenList.forEach(__ => {
                                let ops = Object.assign({},options,{
                                    parent: _.id,
                                    label : __.description,
                                    options : [
                                        {
                                            label : '正常',
                                            value : '正常'
                                        }
                                    ],
                                    hide : true
                                });
                                for (var i = 0;i < __.childrenList.length;i++) {
                                    ops.options.push({
                                        label : __.childrenList[i].description,
                                        value : __.childrenList[i].description
                                    });
                                }
                                ops.selected = 0;
                                ops.value = '正常';
                                formOptions.push(ops);
                            });
                        });
                        this.windowOptions = this.windowOptions.concat(formVFormCommonFields(formOptions));
                        console.log(this.windowOptions);
                    });
            },
            // 开始从 imgIds 中一个个依次载入图片
            loadImages() {
                /**
                 * 这里的流程稍有些复杂，
                 * 第一步，生成一个执行队列，每一个执行内容为
                 *      1.获取图片
                 *      2.获取标记点坐标
                 *      3.回调执行下一个
                 */
                if (this.imgIds.length) {
                    for (let i = 0;i < this.imgIds.length;i++) {
                        this.execList.push(
                            this.fetchImage.bind(this,this.imgIds[i],i)
                        );
                    }
                    this.execList.pop()();
                } else {
                }
            },
            // 获取图片，这里是为了将 垂直结构 代码化解为 水平结构
            // 这里的 imgId 可能有点偏差
            fetchImage(imageId,imgId) {
                let $this = this;
                this.curImgInfo = {
                    imageId,
                    init : false,
                    fetch : false,
                    ok : true, //使用该图片
                    img : '',
                    retImg : '',
                    imgId,
                    flags : [],
                    zip : true
                };
                projectApi.getImage(this.query.projectId,imageId)
                    .then(imgInfo => {
                        if (imgInfo.projectImage && imgInfo.projectImage.image) {
                            $this.pictureOK = true;
                            // todo
                            projectApi.fetchImage(imgInfo.projectImage.image)
                                .then(_ => {
                                    $this.curImgInfo.retImg = $this.curImgInfo.img = _;
                                    // $this.fetchCoords(imageId);
                                });
                        }
                    });
            },
            // 获取点标记，这里也是为了将 垂直结构 代码化解为 水平结构
            fetchCoords(imageId) {
                let imageId_ = this.curImgInfo.imageId || imageId;
                if (this.curImgInfo.init) {
                    this.curImgInfo.fetch = true;
                    let $this = this;
                    // 这里必须清除所有的标记，因为这里是公用的，可能会导致多个图片标记在一起
                    $this.$refs.pib.reFlag();
                    projectApi.getCoordList(imageId_)
                        .then(_ => {
                            _.page.list.forEach(coord => {
                                coord.coord = JSON.parse(coord.coord);
                                coord.coord.id = coord.id;
                                $this.$refs.pib.newFlag(coord.coord);
                            });
                            setTimeout(() => {
                                $this.$refs.pib.output(true);
                            });
                        });
                }
            },
            // 图片加载/上传 成功后触发
            imageLoaded() {
                this.$dialog.notify({
                    mes: 'imageLoaded',
                    timeout: 3000
                });
                this.$dialog.loading.close();
                if (!this.curImgInfo.fetch) {
                    this.curImgInfo.init = true;
                    if (!this.curImgInfo.fetch) {
                        this.fetchCoords();
                    }
                } else {
                    if (this.curImgInfo.flags.length) {
                        this.$refs.pib.reFlag();
                        this.curImgInfo.flags.forEach(flag => {
                            this.$refs.pib.newFlag(flag);
                            console.log(flag.fid);
                        });
                    }
                    // if (!this.curImgInfo.zip) {
                    //     let $this = this;
                    //     this.$dialog.loading.open('正在压缩图片');
                    //     zipImage(this.$refs.pib.retImg(),0,(imgSrc,width,height) => {
                    //         $this.curImgInfo.zip = true;
                    //         $this.curImgInfo.img = imgSrc;
                    //         $this.$dialog.loading.close();
                    //     });
                    // }
                }
            },
            // 打开标记窗口
            toMakeFlag(ind) {
                if (this.curImgInfo.imageId = this.imgs[ind].imageId) {} else {
                    this.$dialog.loading.open('装载中');
                }
                this.show = true;
                this.curImgInfo = this.imgs[ind];
                this.curImgInfo.init = false;
                this.$refs.pib.reFlag();
                this.curImgInfo.flags.forEach(flag => {
                    this.$refs.pib.newFlag(flag);
                    console.log(flag.fid);
                });
            },
            // 从标记窗口中退出时导出的图片及标记信息
            outputImage(flags,retImg,deleteIds,noSave) {
                console.log(arguments);
                let keyWord = ['fid','height','id','left','style','top','width','word'];
                // 初始化过程中的内容要另外操作
                if (this.curImgInfo.init) {
                    // 这里需要继续初始化下一个图片
                    flags.forEach(flag => {
                        let info = {};
                        for (let i in flag) {
                            if (keyWord.indexOf(i) + 1) {} else {
                                info[i] = flag[i];
                            }
                        }
                        flag.info = info;
                    });
                    this.curImgInfo.ok = true;
                    this.curImgInfo.flags = flags;
                    this.curImgInfo.retImg = retImg;
                    let i = 0;
                    for (i = 0;i < this.imgs.length;i++) {
                        if (this.curImgInfo.imageId == this.imgs[i].imageId) {
                            this.imgs[i] = this.curImgInfo;
                            i = -1;
                            break;
                        }
                    }
                    if (i + 1) {
                        this.imgs.push(this.curImgInfo);
                    } else {}
                    if (this.execList.length) {
                        this.execList.pop()();
                    } else {
                    }
                } else {
                    // 这里需要提交更改
                    this.curImgInfo.retImg = retImg;
                    this.curImgInfo.flags = flags;
                    if (flags.length) {
                        let taskNum = flags.length + (deleteIds.length ? 1 : 0);
                        this.$dialog.loading.open('正在提交更改');
                        this.curImgInfo.init = true;
                        let taskOverCheck = () => {
                            taskNum--;
                            if (taskNum) {} else {
                                this.$refs.pib.reFlag();
                                this.$dialog.loading.close();
                                this.fetchCoords();
                            }
                        };
                        flags.forEach(flag => {
                            let flag_ = Object.assign({},flag);
                            for (let i in flag_.info) {
                                flag_[i] = flag_.info[i];
                            }
                            delete flag_.info;
                            if (flag.id) {
                                projectApi.updateCoord(flag.id,flag_)
                                    .then(taskOverCheck);
                            } else {
                                projectApi.saveCoord(this.curImgInfo.imageId,flag_)
                                    .then(taskOverCheck);
                            }
                        });
                        (deleteIds.length) ?
                            (projectApi.deleteCoord(deleteIds)
                                .then(taskOverCheck)) : false;
                    }
                }
            },
            // 从本地打开图片
            uploadImage() {
                this.$refs.file.$el.click();
                // let inp = document.createElement('input');
                // inp.type = 'file';
                // inp.accept = 'image/*';
                // inp.click();
                // inp.onchange = (e) => {
                //     var id = 'img' + (new Date()).getTime() + '' + parseInt(Math.random() * 1000);
                //     this.$dialog.loading.open('正在加载图片');
                //     this.imgs.push({
                //         id : id,
                //         imageId : '',
                //         img : (window.URL.createObjectURL(e.target.files[0])),
                //         retImg : '',
                //         flags : [],
                //         ok : false,
                //         init : false,
                //         fetch : true,
                //         zip : false
                //     });
                //     this.curImgInfo = this.imgs[this.imgs.length - 1];
                // }
            },
            fileChange(target) {
                this.$dialog.loading.open('加载图片');
                this.imgs.push({
                    id : 'img' + (new Date()).getTime() + '' + parseInt(Math.random() * 1000),
                    imageId : '',
                    img : window.URL.createObjectURL(target.files[0]),
                    retImg : '',
                    flags : [],
                    ok : false,
                    init : false,
                    fetch : true,
                    zip : false
                });
                this.$dialog.loading.open('正在压缩图片');
                let $this = this;
                zipImage(this.imgs[this.imgs.length - 1].img,0,(imgSrc,width,height) => {
                    $this.curImgInfo.zip = true;
                    $this.curImgInfo.img = imgSrc;
                    $this.$dialog.loading.close();
                    $this.curImgInfo = this.imgs[this.imgs.length - 1];
                });
            },
            //删除图片
            removeImage(img,ind) {
                let $this = this;
                if (this.imgs.length > ind && ind >= 0) {
                    this.comfirm('确认删除图片?','删除后将不能恢复！',() => {
                        $this.$dialog.loading.open('更新项目信息');
                        $this.imgs.splice(ind,1);
                        projectApi.deleteImage(img.imageId)
                            .then(_ => {
                                for (var i in $this.query.image) {
                                    if ($this.query.image[i] == img.imageId) {
                                        delete $this.query.image[i];
                                        break;
                                    }
                                }
                                projectApi.updateProject({
                                    id : $this.query.projectId,
                                    image : JSON.stringify($this.query.image)
                                })
                                    .then(() => {
                                        sessionStorage.setItem('query',JSON.stringify($this.query));
                                        $this.$dialog.loading.close();
                                    });
                            });
                    });
                }
            },
            // 当点击使用图片是触发 上次图片到服务器
            imgOK(ind) {
                this.$dialog.loading.open('正在上传图片');
                this.$refs.pib.output();
                let $this = this;
                projectApi.saveIamge({
                    image : this.curImgInfo.retImg,
                    projectId : this.query.projectId,
                    step : this.query.flagId
                }).then(data => {
                    $this.curImgInfo.ok = true;
                    $this.curImgInfo.imgId = this.query.perStr + '_image_' + (new Date()).getTime();
                    $this.curImgInfo.init = true;
                    $this.curImgInfo.imageId = data.imageId;
                    $this.query.image[this.curImgInfo.imgId] = data.imageId;
                    $this.$dialog.loading.open('更新工程信息');
                    projectApi.updateProject({
                        id : $this.query.projectId,
                        image : JSON.stringify(this.query.image)
                    })
                        .then(_ => {
                            $this.$dialog.loading.close();
                            sessionStorage.setItem('query',JSON.stringify($this.query));
                        });
                });
            },
            // 当标记窗口中的图片被点击时触发
            imageClick(flag) {
                console.log(flag);
                this.curFlag = flag;
                this.windowInfoShow = true;
                this.windowOptions[0].selected = -1;
                this.windowOptions[0].selectLabel = '';
                this.windowOptions[0].value = '';
                for (var i = 1;i < this.windowOptions.length;i++) {
                    this.windowOptions[i].hide = true;
                    this.windowOptions[i].value = '正常';
                    this.windowOptions[i].selectLabel = '正常';
                    this.windowOptions[i].selected = 0;
                }
            },
            // 撤销保存当前标记的位置
            cancelFlag() {
                this.windowInfoShow = false;
                this.$refs.pib.asynImageFlag.undoFlagByFid(this.curFlag.fid);
            },
            // 保存当前标记的信息
            saveFlag() {
                if (this.windowOptions[0].value == '') {
                    this.error('请完成表单后保存');
                } else {
                    let id = this.windowOptions[0].options[this.windowOptions[0].selected].id;
                    let ret = {};
                    ret[this.windowOptions[0].label] = this.windowOptions[this.windowOptions[0].selected].value;
                    for (var i = 1;i < this.windowOptions.length;i++) {
                        if (this.windowOptions[i].parent == id) {
                            ret[this.windowOptions[i].label] = this.windowOptions[i].options[this.windowOptions[i].selected].value;
                        }
                    }
                    this.$refs.pib.updateFlagByFid(Object.assign(this.curFlag,{info : ret}));
                    this.windowInfoShow = false;
                }
            },
            // 单选框改变时的事件
            radioSelectChange(ret,ind,op,ind_) {
                if (ind == 0) {
                    for (var i = 1;i < this.windowOptions.length;i++) {
                        if (this.windowOptions[i].parent == op.id) {
                            this.windowOptions[i].hide = false;
                        } else {
                            this.windowOptions[i].hide = true;
                        }
                    }
                }
            },
            error(msg,time,cb) {
                this.$dialog.toast({
                    mes: msg,
                    timeout: time || 1500,
                    icon: 'error',
                    callback: () => (cb || (() => {}))
                });
            },
            comfirm(title,msg,cb) {
                this.$dialog.confirm({
                    title: title,
                    mes: msg,
                    opts: () => {
                        (cb || (() => {}))();
                    }
                });
            }
        },
        watch : {
        }
    }
</script>

<style>
    .yd-popup-content>div {
        height: 100% !important;
        position: absolute;
        width: 100%;
    }
</style>