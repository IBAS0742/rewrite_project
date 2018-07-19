<!--
    本意是为登陆注册编写的通用表单
-->
<template>
    <div>
        <div class="v-form-custom-title">
            <slot name="title"></slot>
        </div>
        <yd-cell-group class="demo-small-pitch" :style="formStyle">
            <yd-cell-item v-for="(ii,ind) in inputInfo" :key="ind">
                <span slot="left" style="min-width: 60px;text-align: right;">{{ii.label}}：</span>
                <yd-input :type="ii.type" slot="right"
                          required v-model="ii.value" max="20"
                          :placeholder="ii.placeholder" @change.native="change(ii)"></yd-input>
            </yd-cell-item>
        </yd-cell-group>
        <slot name="bottom"></slot>
    </div>
</template>

<script>
    export default {
        name : 'v-form-custom',
        props : {
            inputInfo : {
                type : Array,
                required : true
            },
            formStyle : {
                type : Object,
                required:false
            }
        },
        data() {
            return {
                input1 : '',
                input2 : ''
            }
        },
        methods : {
            change(ii) {
                this.$emit('change',ii);
            }
        }
    }
</script>

<style>
    .v-form-custom-title {
        font-size: 0.5rem;
        text-align: center;
    }
</style>