<template>
    <yd-layout>
        <yd-navbar fixed>
            <div slot="left" @click="$router.go(-1)">
                <yd-icon name="fanhui2" size="0.3rem" custom></yd-icon>
            </div>
            <div slot="center" style="font-size: 0.4rem;">{{title}}</div>
        </yd-navbar>

        <div style="margin-top: 1rem;">
            <div>
                <div v-show="step1">
                    <v-form-common ref="vformProjectInfo" :input-info="projectInfo"></v-form-common>
                    <div style="padding: 0.3em;">
                        <yd-button
                                @click.native="saveProjectInfo()"
                                style="margin-top: 0"
                                type="primary" size="large">提交</yd-button>
                    </div>
                </div>
                <div v-show="step2">
                    <yd-button @click.native="skip">跳过此步，继续添加工程。</yd-button>
                    <v-form-common ref="vformJianli" :input-info="jianliInfo"></v-form-common>
                    <div style="padding: 0.3em;">
                        <yd-button
                                @click.native="saveJianli()"
                                style="margin-top: 0"
                                type="primary" size="large">提交</yd-button>
                    </div>
                </div>
            </div>
        </div>
    </yd-layout>
</template>

<script>
    import vFormCommon from './../../components/v-form/v-form-common'
    import {formVFormCommonFields} from './../../common/js/component-utils/v-form-common'
    import {mergeFields} from './../../common/js/component-utils/fieldsSplit'
    import { getCertifyList , createProject , createSupervisor  } from './../../api/projectApi'

    import * as fields from './common/projectFields'

    export default {
        name: "add-check-fields",
        components : {
            vFormCommon
        },
        data() {
            return {
                title : '填写工程信息',
                step1Title : '填写工程信息',
                step2Title : '填写监理人信息',
                step1 : true,
                step2 : false,
                projectInfo : [],
                jianliInfo : [],
                projectId : '',
                certifyList : [],
                fetchCertify : false
            };
        },
        methods: {
            saveProjectInfo() {
                if (this.$refs.vformProjectInfo.$refs.input.every(_ => _.valid)) {
                    this.$dialog.loading.open('正在保存');
                    createProject(mergeFields(this.projectInfo,true))
                        .then(_ => {
                            this.projectId = _.projectInfo.id;
                            this.step1 = false;
                            this.step2 = true;
                            this.title = this.step2Title;
                            this.$store.state.windowTitle = this.$t('window.fields.stepTwoTitle');
                            this.$dialog.toast({
                                mes : '添加成功',
                                timeout : 1000
                            });
                        });
                    this.$dialog.loading.close();
                } else {
                    this.$dialog.toast({mes: '请完善信息后提交', timeout: 1000});
                }
            },
            saveJianli() {
                if (this.$refs.vformJianli.$refs.input.every(_ => _.valid)) {
                    this.$dialog.loading.open('正在保存');
                    let data = Object.assign(mergeFields(this.jianliInfo,true),{
                        projectId : this.projectId
                    });
                    delete data['diyige'];
                    createSupervisor(data)
                        .then(_ => {
                            this.$dialog.toast({
                                mes: '保存成功',
                                timeout: 1500,
                                icon: 'success',
                                callback: () => {
                                    this.skip();
                                }
                            });
                        });
                    this.$dialog.loading.close();
                } else {
                    this.$dialog.toast({mes: '请完善信息后提交', timeout: 1000});
                }
            },
            skip() {
                this.step1 = true;
                this.step2 = false;
                this.title = this.step1Title;
                this.$store.state.windowTitle = this.$t('window.fields.stepOneTitle');
                this.projectInfo = [];
                this.projectInfo = this.projectInfo.concat(formVFormCommonFields(fields.projectInfoFields(this)));
                this.jianliInfo = [];
                this.jianliInfo = this.jianliInfo.concat(formVFormCommonFields(fields.jianliFields(this)));
                this.makeOption();
            },
            makeOption(val) {
                if (this.fetchCertify) {
                    val = val || this.certifyList;
                    this.projectInfo.forEach(pi => {
                        if (pi.name == 'certify') {
                            if (!val.length) {
                                $this.$dialog.confirm({
                                    title: '无法创建工程',
                                    mes: '请先添加证书后再进行创建工程。(用户中心 > 证书列表 > (右上角)添加)',
                                    opts: () => {
                                        $this.$router.push('/home/user')
                                    }
                                });
                            } else {
                                pi.options = val;
                            }
                        }
                    });
                }
            }
        },
        mounted() {
            this.skip();
            // todo
            console.log(this);
            let $this = this;
            getCertifyList()
                .then(_ => _.certifyList)
                .then(_ => {
                    this.fetchCertify = true;
                    _.forEach(__ => {
                        this.certifyList.push({
                            label : __.regno,
                            value : __.id
                        });
                    });
                });
            window.$this = this;
        },
        watch : {
            certifyList(val) {
                this.makeOption(val);
            }
        }
    }
</script>

<style scoped>
</style>