<template>
    <div>
        <input type="text" v-model="zipRate">
        <yd-button @click.native="up">上传图片</yd-button>
        <yd-button @click.native="zip">压缩</yd-button>
        <div style="display: inline-block;width: 100%">
            原图
            <img :src="img" alt="" style="width: 100%">
        </div>
        <div style="display: inline-block;width: 100%">
            zip图
            <img :src="retImg" alt="" style="width: 100%">
        </div>
    </div>
</template>

<script>
    import {zipImage,AIF} from "../../common/js/asynImageFlag";

    export default {
        name: "test",
        data() {
            return {
                img : '',
                retImg : '',
                zipRate : 0
            }
        },
        methods : {
            up() {
                let inp = document.createElement('input');
                inp.type = 'file';
                inp.accept = 'image/*';
                inp.click();
                let $this = this;
                inp.onchange = (e) => {
                    console.time('load')
                    let img = new Image();
                    img.onload = () => {
                        AIF(img,(src) => {
                            $this.img = src;
                            console.timeEnd('load');
                        },1);
                    };
                    img.src = window.URL.createObjectURL(e.target.files[0]);
                }
            },
            zip() {
                console.time('4')
                zipImage(this.img,this.zipRate,(retImg) =>  {
                    this.retImg = retImg;
                    console.timeEnd('4');
                });
            }
        },
        mounted() {
            window.$this = this;
        }
    }
</script>

<style scoped>

</style>