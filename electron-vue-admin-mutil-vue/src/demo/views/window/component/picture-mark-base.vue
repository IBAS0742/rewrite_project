<template>
    <div style="height: 100%;">
        <yd-navbar ref="navbar" fixed>
            <div slot="left">
                <slot name="navbar-left"></slot>
            </div>
            <div slot="center" style="font-size: 0.4rem;">
                <slot name="navbar-center"></slot>
            </div>
            <div slot="right">
                <slot name="navbar-right"></slot>
            </div>
        </yd-navbar>
        <div style="padding-top: 1rem;height: 100%;">
            <div style="position: fixed;bottom: 1rem;left: 0;z-index: 100;display: block;width: 100%;text-align: center;">
                <yd-button type="primary" @click.native="scale(1)">放大</yd-button>
                <yd-button type="primary" @click.native="scale(-1)">缩小</yd-button>
                <!--<yd-button type="primary" @click.native="option.canMove=false;">绘制点</yd-button>-->
                <!--<yd-button type="primary" @click.native="option.canMove=true;">恢复</yd-button>-->
            </div>
            <div style="width: 100%;height: 100%;">
                <vueCropper
                        style=""
                        ref="cropper"
                        :img="option.img"
                        :info="true"
                        :full="option.full"
                        :canMove="option.canMove"
                        :fixedBox="option.fixedBox"
                        :original="option.original"
                        :width="option.width"
                        :height="option.height"
                        @imgLoad="imgLoad"
                        @imageClick="imageClick">
                    <div slot="overPic">
                        <div class="hoverFlag" v-for="(flag,ind) in flags" :key="ind"
                             @click="clickFlag(flag,ind)"
                             :style="'width:' + (flag.width * 2) + 'px;height:' + (flag.width * 2) + 'px;top:' + (flag.top - flag.width) + 'px;left:' + (flag.left - flag.width) + 'px;'"></div>
                    </div>
                </vueCropper>
            </div>
            <slot name="other"></slot>
        </div>
        <yd-popup v-model="changeFlagPopupShow" position="bottom" width="100%" height="60%">
            <div style="padding: 0.2rem;">
                <yd-button size="large" @click.native="deleteFlag()">删除该标记点</yd-button>
            </div>
        </yd-popup>
    </div>
</template>

<script>
    import vueCropper from './../../../components/vue-cropper'
    import { asynImageFlag } from './../../../common/js/asynImageFlag'

    let asynImageFlagOP;

    export default {
        name: "picture-mark-base",
        props : {
            imgUrl : {
                type : String,
                required : true
            },
            flagType : {
                type:String,
                required:true
            }
        },
        components : {
            vueCropper
        },
        computed: {
            height() {
                return ''
            }
        },
        watch : {
            imgUrl() {
                this.option.img = this.imgUrl;
            }
        },
        data() {
            return {
                option: {
                    img: this.imgUrl,
                    full: true,
                    outputType: 'png',
                    canMove: true,
                    fixedBox: false,
                    original: false,
                    width : '100%',
                    change : false,
                    // height : '500'
                },
                // asynImageFlag : {},
                flags : [],
                changeFlagPopupShow : false,
                changeFlag : {},
                deleteIds : []
            }
        },
        methods : {
            // 图片加载完成
            imgLoad (msg) {
                let img = new Image();
                img.src = this.$refs.cropper.$refs.cropperImg.src;
                asynImageFlagOP = asynImageFlag(img,this.$refs.cropper.$refs.cropperImg);
                asynImageFlagOP.defaultFlagNameType = this.flagType;
                this.$emit('imageLoaded');
            },
            imageClick(ret) {
                if (this.option.change) {
                    return;
                }
                console.log(ret)
                let flag = asynImageFlagOP.newFlag({
                    width : 0,
                    left : ret.ox,
                    top : ret.oy
                });
                this.flags = asynImageFlagOP.flags();
                this.option.canMove = true;
                this.$emit('imageClick',flag);
            },
            scale(dir) {
                this.$refs.cropper.scale += 0.2 * dir;
            },
            output(noSave) {
                let flags = asynImageFlagOP.flags();
                asynImageFlagOP.reFlag();
                flags.forEach(flag => {
                    asynImageFlagOP.newFlag(flag);
                });
                this.flags = asynImageFlagOP.flags();
                this.$emit('outputImage',asynImageFlagOP.flags(),asynImageFlagOP.outputRetImage(),[].concat(this.deleteIds),noSave);
                setTimeout(() => {
                    this.deleteIds = [];
                });
            },
            clickFlag(flag,ind) {
                this.option.canMove=true;
                this.option.change=false;
                this.changeFlag = { flag , ind };
                this.changeFlagPopupShow = true;
            },
            deleteFlag() {
                asynImageFlagOP.undoFlagByFid(this.changeFlag.flag.fid);
                if (this.changeFlag.flag.id) {
                    this.deleteIds.push(this.changeFlag.flag.id);
                }
                this.changeFlagPopupShow = false;
            },
            reFlag() {
                asynImageFlagOP.reFlag();
                this.flags = [];
            },
            newFlag(obj) {
                asynImageFlagOP.newFlag(obj);
                this.flags.push(obj);
            },
            // todo 仅测试
            getFlags() {
                return asynImageFlagOP.flags();
            },
            updateFlagByFid(obj) {
                asynImageFlagOP.updateFlagByFid(obj);
            },
            retImg() {
                return asynImageFlagOP.outputRetImage();
            },
            changeBaseImage(src,width,height) {
                asynImageFlagOP.changeBaseImage({
                    src,width,height
                });
            }
        },
        mounted() {
            // todo
            window.$this = this;
        }
    }
</script>

<style scoped>
    .hoverFlag {
        position: absolute;
        z-index: 20;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
    }
</style>