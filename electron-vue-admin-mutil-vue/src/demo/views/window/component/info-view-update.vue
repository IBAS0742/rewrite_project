<template>
    <yd-popup v-model="show" position="bottom" width="100%" height="100%">
        <yd-navbar fixed>
            <div slot="left" @click="update=false;$emit('hide')">
                <yd-icon name="fanhui2" size="0.3rem" custom></yd-icon>
            </div>
            <div slot="center" style="font-size: 0.4rem;">{{title}}</div>
        </yd-navbar>

        <v-form-common style="margin-top: 1rem;" :disabled="disabled" :input-info="infos"></v-form-common>
        <div style="margin: 0.1rem;">
            <div style="display: inline-block;width: 100%;" v-show="!update">
                <yd-button type="primary" @click.native="disabled=false;update=true;" size="large">修改</yd-button>
            </div>
            <div v-show="update" style="display: inline-block;width: 100%;">
                <div class="info-view-update-update-btns">
                    <yd-button type="danger" @click.native="disabled=true;update=false;" size="large">取消</yd-button>
                </div>
                <div class="info-view-update-update-btns">
                    <yd-button type="warning" @click.native="update=false;submit()" size="large">提交</yd-button>
                </div>
            </div>
        </div>
    </yd-popup>
</template>

<script>
    import vFormCommon from './../../../components/v-form/v-form-common'

    export default {
        name: "info-view-update",
        components : {
            vFormCommon
        },
        props : {
            infos : {
                type : Array,
                required : true
            },
            show : {
                type : Boolean,
                required : true
            },
            title : {
                type : String,
                required : false
            },
            loading : {
                type : Boolean,
                required : true
            }
        },
        data() {
            return {
                disabled : true,
                update : false
            }
        },
        methods : {
            submit() {
                this.$dialog.loading.open('正在提交更改');
                this.$emit('update');
                this.disabled = true;
            }
        },
        watch : {
            loading(val) {
                if (val) {
                    this.$dialog.loading.close();
                }
            }
        }
    }
</script>

<style>
    .info-view-update-update-btns {
        display: inline-block;
        width: 40%;
        margin : 0 5%;
        float: left;
    }
</style>