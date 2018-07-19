<template>
    <div>
        <div class="v-login-title">{{title}}</div>
        <v-form-common ref="vform" :input-info="inputInfo"></v-form-common>
        <div>
            <yd-button
                    class="v-form-login-btn"
                    slot="icon" size="large"
                    @click.native="shift()"
                    type="warning">{{$t('home.account.loginVue.loginRegisterBtnLabel')}}</yd-button>
            <yd-button
                    class="v-form-login-btn"
                    slot="icon" size="large"
                    type="primary"
                    @click.native="login"
            >{{$t('home.account.loginVue.loginLoginBtnLabel')}}</yd-button>
        </div>
    </div>
</template>

<script type="text/babel">
    import { login } from './../../../api/accountApi'
    import { loginFields } from './../common/userInfoFields'
    import VFormCommon from "../../../components/v-form/v-form-common";
    import { formVFormCommonFields } from './../../../common/js/component-utils/v-form-common'

    import sha256 from 'sha256'

    export default {
        name : 'login',
        components : {
            VFormCommon,
            // vFormCustom
        },
        computed : {
        },
        data() {
            return {
                title : this.$t('home.account.loginVue.login'),//登录
                inputInfo : []
            }
        },
        mounted() {
            this.inputInfo = this.inputInfo.concat(formVFormCommonFields(loginFields(this)));
            console.log(this.inputInfo)
        },
        methods: {
            shift() {
                this.$emit('shift');
            },
            login() {
                if (this.$refs.vform.$refs.input.every(_ => _.valid)) {
                    let obj = {};
                    this.inputInfo.forEach(_ => {
                        obj[_.name] = _.value;
                        if (_.name == 'password') {
                            obj[_.name] = sha256(_.value);
                        } else if (_.name == 'captcha') {
                            obj[_.info[0].name] = _.info[0].value;
                        }
                    });
                    login(obj)
                        .then(_ => {
                            if (_.code == 200) {
                                localStorage.setItem('role',_.role);
                                this.$dialog.toast({
                                    mes: this.$t('home.account.loginVue.loginSuccess'),//登录成功
                                    timeout: 1000,
                                    callback : () => {
                                        this.$router.go(0);
                                    }
                                });
                            } else {
                                this.$dialog.toast({
                                    mes : _.msg,
                                    timeout : 3000
                                });
                            }
                            console.log('login',_);
                        })
                        .catch(_ => {
                            console.log(_);
                        });
                } else {
                    this.error(this.$t('home.account.loginVue.loginInfoComplete'));
                }
            },
            error(msg,time,cb) {
                this.$dialog.toast({
                    mes: msg,
                    timeout: time || 1500,
                    icon: 'error',
                    callback: () => {
                        (cb || (() => {}))();
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .v-form-login-btn {
        width : 40% !important;
        float: left;
        margin : 0 5%;
    }
    .v-login-title {
        font-size: 0.5rem;
        text-align: center;
        margin : 0.2rem 0;
    }
</style>
