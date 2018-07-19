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

    import sha256 from 'sha256'

    let registerFields = ($this) => {
        return [{
            name : 'diyige',
            label : 'diyige',
            type : 'selectInput',
            value : '',
            // todo 这里的字段没有国际化
            options : [
                {
                    label : $this.$t("window.fields.jianli.diyigeOptions.ucorporationNo"),
                    name : "ucorporationNo",
                    placeholder : ''
                },
                {
                    label : $this.$t("window.fields.jianli.diyigeOptions.uid"),
                    name : 'uid',
                    placeholder : ''
                },
                {
                    label : $this.$t("window.fields.jianli.diyigeOptions.ubusinessNo"),
                    name : 'ubusinessNo',
                    placeholder : ''
                }
            ],
            required : true
        },{
            "type":"input",
            "label": $this.$t('home.account.registerVue.registerUserName'),
            "placeholder": $this.$t('home.account.registerVue.registerUserNamePlaceholder'),
            "value":"",
            "name":"username",
            check : 'checkName',
            checkSuccess : '该用户名可以使用',
            checkError : '该用户名已经被使用，请重新填写。',
            required : true
        },{
            "type":"password",
            "label": $this.$t('home.account.registerVue.registerPassword'),
            "placeholder": $this.$t('home.account.registerVue.registerPasswordPlaceholder'),
            "value":"",
            "name":"password",
            required : true
        },{
            "type":"input",
            "label": '证书编号',
            "placeholder": '',
            "value":"",
            "name":"ucertifyId",
            check : 'checkCertify',
            required : true
        },{
            "type":"input",
            "label": '证书届满日期',
            "placeholder": '格式为 2018-01-31',
            "value":"",
            "name":"ucertifyEnd",
            check : 'checkCertify',
            required : true,
            regex : '^((?:19|20)\\d\\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$'
        },{
            "type" : "checkbox",
            "label" : "同意免责声明",
            "name" : 'agreeStatement',
            value : false,
            badge : '?'
        }];
    };

    export default {
        name : 'register-company',
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
                }
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
                } else if (ii.check == 'checkCertify' && ii.value) {
                    let data = {};
                    let count = 0;
                    for (var i = 0;i < this.inputInfo.length;i++) {
                        if (this.inputInfo[i].check == 'checkCertify' && this.inputInfo[i].value && this.$refs.vfc.$refs.input[i].valid) {
                            data[this.inputInfo[i].name] = this.inputInfo[i].value;
                            count++;
                        }
                    }
                    if (count == 2) {
                        accountApi[ii.check](data)
                            .then(_ => {
                                if (_.code == 200) {
                                } else {
                                    this.$dialog.toast({
                                        mes : _.msg,
                                        timeout: 1500
                                    });
                                }
                            });
                    }
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
                        accountApi.registerCompany(data)
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
            this.inputInfo = this.inputInfo.concat(formVFormCommonFields(registerFields(this)));
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
