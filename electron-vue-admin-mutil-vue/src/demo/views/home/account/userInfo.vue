<template>
    <div style="padding: 0.2rem;background: #fff;">

        <div style="margin-bottom: 0.5rem;">
            <div style="display: inline-block;width: 100%;padding: 0 20% 0 20%;margin-bottom: 0.3rem;">
                <img :src="headerImg" alt="" style="width: 100%;">
            </div>
            <yd-button @click.native="userInfoPopupShow=true;" size="large" style="margin-bottom: 0.3rem;">个人信息</yd-button>
            <yd-button @click.native="certifyListPopupShow=true;" size="large" style="margin-bottom: 0.3rem;">证书列表</yd-button>
            <yd-button v-show="role=='admin'" @click.native="houtaiguanli" size="large" style="margin-bottom: 0.3rem;">后台管理</yd-button>
            <yd-button @click.native="logout" size="large" style="margin-bottom: 0.3rem;">退出登录</yd-button>
        </div>

        <!-- 个人信息页 -->
        <yd-popup v-model="userInfoPopupShow" position="bottom" width="100%" height="100%">
            <yd-navbar ref="navbar" fixed>
                <div slot="left" @click="userInfoPopupShow=false">
                    返回
                </div>
                <div slot="center" style="font-size: 0.4rem;">
                    个人信息
                </div>
                <div slot="right">
                    <yd-icon size="0.5rem" name="compose" @click.native="updateUserInfo"></yd-icon>
                </div>
            </yd-navbar>
            <div style="margin: 1rem 0.2rem;">
                <div v-for="(info,infoInd) in userInfoList" :key="infoInd"
                     style="background: #fff;display: inline-block;width: 100%;line-height: 0.7rem;font-size: 0.3rem;border-bottom: 1px solid #ccc;">
                    <div style="display: inline-block;width:50%;box-sizing: border-box;float:left;">{{infoInd}}</div>
                    <div style="display: inline-block;width:50%;box-sizing: border-box;padding-left: 0.2rem;">{{info}}</div>
                </div>
            </div>
        </yd-popup>
        <!-- 证书列表页 -->
        <yd-popup v-model="certifyListPopupShow" position="bottom" width="100%" height="100%">
            <yd-navbar ref="navbar" fixed>
                <div slot="left" @click="certifyListPopupShow=false">
                    返回
                </div>
                <div slot="center" style="font-size: 0.4rem;">
                    证书列表
                </div>
                <div slot="right">
                    <yd-icon size="0.5rem" name="xinjian1" @click.native="toCreateCertify" custom></yd-icon>
                </div>
            </yd-navbar>
            <div style="margin: 1rem 0.2rem;">
                <yd-accordion>
                    <yd-accordion-item
                            v-for="(certify,ind) in certifyList"
                            :title="'第' + (ind + 1) + '条记录'">
                        <div style="padding: .24rem;">
                            <div v-for="(c,ind) in certify" :key="ind"
                                 style="background: #fff;display: inline-block;width: 100%;line-height: 0.7rem;font-size: 0.3rem;border-bottom: 1px solid #ccc;">
                                <div style="display: inline-block;width:50%;box-sizing: border-box;float:left;">{{ind}}</div>
                                <div style="display: inline-block;width:50%;box-sizing: border-box;padding-left: 0.2rem;">{{c}}</div>
                            </div>
                        </div>
                    </yd-accordion-item>
                </yd-accordion>
            </div>
        </yd-popup>
        <!-- 修改个人信息 -->
        <yd-popup v-model="userInfoPopupChangeShow" position="bottom" width="100%" height="100%">
            <yd-navbar ref="navbar" fixed>
                <div slot="left" @click="userInfoPopupChangeShow=false">
                    返回
                </div>
                <div slot="center" style="font-size: 0.4rem;">
                    修改个人信息
                </div>
                <div slot="right" @click="toUpdateUserInfo">
                    提交
                </div>
            </yd-navbar>
            <div style="margin-top: 1rem;">
                <v-form-common :input-info="userInfoFields"></v-form-common>
            </div>
        </yd-popup>
        <!-- 添加证书 -->
        <yd-popup v-model="addCertifyPopupShow" position="bottom" width="100%" height="100%">
            <yd-navbar ref="navbar" fixed>
                <div slot="left" @click="addCertifyPopupShow=false">
                    返回
                </div>
                <div slot="center" style="font-size: 0.4rem;">
                    添加证书
                </div>
                <div slot="right" @click="createCertify">
                    提交
                </div>
            </yd-navbar>
            <div style="margin-top: 1rem;">
                <v-form-common ref="certiryVFC" :input-info="certifyFields"></v-form-common>
            </div>
        </yd-popup>
    </div>
</template>

<script>
    import * as api from './../../../api/accountApi'
    import * as fields from './../common/userInfoFields'
    import vFormCommon from './../../../components/v-form/v-form-common'
    import { formVFormCommonFields } from './../../../common/js/component-utils/v-form-common'
    import { baseUrl } from "../../../config";

    export default {
        name: 'user-info',
        components : {
            vFormCommon
        },
        props : {
            userInfo : {
                type : Object,
                required : true
            },
            logined : {
                type : Boolean,
                required:true
            },
            userId : {}
        },
        data() {
            return {
                headerImg : '',
                userInfoPopupShow : false,
                certifyListPopupShow : false,
                userInfoFields: [],
                certifyFields : [],
                certifyList : [],
                userInfoPopupChangeShow : false,
                addCertifyPopupShow : false,
                certifyType : []
            };
        },
        computed : {
            userInfoList() {
                let list = {};
                for (var i = 0;i < this.userInfoFields.length;i++) {
                    list[this.userInfoFields[i].label] = this.userInfo[this.userInfoFields[i].name]
                }
                this.userInfoFields.forEach(uif => {
                    uif.value = this.userInfo[uif.name] || uif.value;
                })
                return list;
            },
            role() {
                return localStorage.getItem('role');
            }
        },
        mounted() {
            //todo
            window.$$this = this;
            this.userInfoFields = formVFormCommonFields(fields.userInfoFields(this));
            this.certifyFields = formVFormCommonFields(fields.certifyFields(this));
            this.certifyFields[0].options = this.certifyType;
            this.headerImg = require('./header.jpg');
        },
        methods : {
            changeUserInfo() {

            },
            logout() {
                api.logout()
                    .then(_ => {
                        this.$dialog.toast({
                            mes: '退出成功',
                            timeout: 1000,
                            callback : () => {
                                this.$router.go(0);
                            }
                        });
                        this.addCertifyPopupShow = false
                    });
            },
            fetchCertify() {
                api.getUserCertify()
                    .then(_ => _.certifyList)
                    .then(_ => {
                        this.certifyList = [];
                        _.forEach(certify => {
                            let certify_ = {};
                            for (var i = 0;i < this.certifyFields.length;i++) {
                                certify_[this.certifyFields[i].label] = certify[this.certifyFields[i].name];
                            }
                            this.certifyList.push(certify_);
                        });
                    });
            },
            createCertify() {
                if (this.$refs.certiryVFC.$refs.input.every(_ => _.valid)) {
                    let data = {};
                    this.certifyFields.forEach(_ => data[_.name] = _.value);
                    api.createCertify(data)
                        .then(_ => {
                            if (_.code == 200) {
                                this.fetchCertify();
                                this.$dialog.toast({
                                    mes : '添加成功',
                                    timeout : 1000
                                });
                            } else {
                                this.$dialog.toast({
                                    mes : _.msg,
                                    timeout : 3000
                                });
                            }
                        });
                } else {
                    console.log('asdf');
                }
            },
            toCreateCertify() {
                this.addCertifyPopupShow = true;
                this.certifyFields.forEach(_ => _.value = '');
            },
            updateUserInfo() {
                this.userInfoPopupChangeShow = true;
            },
            toUpdateUserInfo() {
                let data = {};
                this.userInfoFields.forEach(uif => {
                    if (uif.value) {
                        data[uif.name] = uif.value;
                    }
                });
                data.id = this.userId;
                api.updateUserInfo(data)
                    .then(_ => {
                        if (_.code == 200) {
                            this.$emit('updateUserInfo');
                            this.$dialog.toast({
                                mes : '修改成功',
                                timeout : 1000
                            });
                        } else {
                            this.$dialog.toast({
                                mes : _.msg,
                                timeout : 3000
                            });
                        }
                    });
            },
            houtaiguanli() {
                location.href= baseUrl + '/sys/index.html';
            }
        },
        watch : {
            logined(val) {
                if (val) {
                    this.fetchCertify();
                    api.getRegtype()
                        .then(_ => {
                            _.regtype.forEach(regtype => {
                                this.certifyType.push({
                                    label : regtype.description,
                                    value : regtype.value,
                                    description : regtype.value + ' ' + regtype.description
                                });
                            });

                        });
                    api.getQpregtype()
                        .then(_ => {
                            _.qpregtype.forEach(qpregtype => {
                                this.certifyType.push({
                                    label : qpregtype.description,
                                    value : qpregtype.value,
                                    description : qpregtype.value + ' ' + qpregtype.description
                                });
                            });
                        });
                }
            }
        }
    }
</script>