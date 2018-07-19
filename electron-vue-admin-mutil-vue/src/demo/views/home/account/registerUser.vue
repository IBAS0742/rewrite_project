<template>
    <div>
        <v-form-common :input-info="inputInfo" ref="vfc" @change="change"
                       @checkboxBadgeClick="checkboxBadgeClick"></v-form-common>
        <div style="display: block;width: 100%;">
            <yd-button
                    class="v-form-register-btn"
                    slot="icon" size="large"
                    type="primary"
                    @click.native="submit">
                {{$t('home.account.registerVue.registerRegisterBtnLabel')}}</yd-button>
        </div>

    </div>
</template>

<script type="text/babel">
    import vFormCommon from './../../../components/v-form/v-form-common'
    import {formVFormCommonFields} from './../../../common/js/component-utils/v-form-common'
    import vFormCustom from './../../../components/v-form/v-form-custom'
    import * as accountApi from './../../../api/accountApi'

    import {registerUserFields} from "../common/userInfoFields";

    import sha256 from 'sha256'

    export default {
        name : 'register-user',
        components : {
            vFormCustom,
            vFormCommon
        },
        computed : {
        },
        data() {
            return {
                inputInfo : [],
                formStyle : {
                    'margin-bottom' : '0px !important'
                },
            }
        },
        methods: {
            shift() {
                this.$emit('shift');
            },
            change(ii) {
                if (ii.check == 'checkName' && ii.value) {
                    accountApi[ii.check](ii.value)
                        .then(_ => {
                            if (_.code == 200) {
                                this.$dialog.toast({
                                    mes : ii.checkSuccess,
                                    timeout: 1500
                                });
                            } else {
                                this.$dialog.toast({
                                    mes : ii.checkError,
                                    timeout: 1500
                                });
                                ii.value = '';
                            }
                        });
                }
            },
            submit() {
                if (this.$refs.vfc.$refs.input.every(_ => _.valid)) {
                    let data = {};
                    this.inputInfo.forEach(ii => {
                        data[ii.name] = ii.value;
                    });
                    if (data.agreeStatement) {
                        delete data.agreeStatement;
                        for (var i in data) {
                            if (i == 'password') {
                                data[i] = sha256(data[i]);
                            }
                        }
                        accountApi.registerPeople(data)
                            .then(_ => {
                                if (_.code == 200) {
                                    this.$dialog.toast({
                                        mes : '注册成功，请登陆完善个人信息。',
                                        timeout: 3000,
                                        callback : () => {
                                            this.$router.go(0);
                                        }
                                    });
                                } else {}
                            });
                    } else {
                        this.$dialog.toast({
                            mes : "请先同意免责",
                            timeout: 1500
                        });
                    }
                } else {
                    this.$dialog.toast({
                        mes: '请先完成表单信息',
                        timeout: 1500
                    })
                }
            },
            checkboxBadgeClick(ii) {
                this.$emit('showStatement');
            }
        },
        mounted() {
            //todo
            window.$this = this;
            this.inputInfo = this.inputInfo.concat(formVFormCommonFields(registerUserFields(this)));
        }
    }
</script>

<style scoped>
    .v-form-register-btn {
        width : 90% !important;
        float: left;
        margin : 0 5%;
    }
    .register-mzsm{
        padding: 1.2rem 0.2rem 0.1rem 0.2rem;
        font-size: 0.3rem;
    }
    .register-mzsm div{
        text-indent:2em;display: inline-block;width: 100%;
        padding-bottom: 0.08rem;
    }
</style>
