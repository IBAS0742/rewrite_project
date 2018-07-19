<template>
    <yd-layout>
        <yd-navbar fixed>
            <div slot="left" @click="$router.go(-1)">
                <yd-icon name="fanhui2" size="0.3rem" custom></yd-icon>
            </div>
            <div slot="center" style="font-size: 0.4rem;">{{title}}</div>
        </yd-navbar>

        <div style="margin-top: 1rem;">
            <div style="padding-top : 0.2rem;">
                <yd-accordion style="margin : 0.5em;">
                    <yd-accordion-item :title="'通知编号 ' + pi.messageId" v-for="(pi,ind) in projectInfos" :key="ind">
                        <div slot="txt" v-if="pi.state==2" style="margin-left: 0.2rem;">
                            <yd-badge type="primary">完成</yd-badge>
                        </div>
                        <project-info-btns>
                            <div slot="up-left">
                                <yd-button bgcolor="#e0e0e0" size="large" type="primary"
                                           @click.native="showAndChangeProjectInfo(pi,ind)">工程信息</yd-button>
                            </div>
                            <div slot="up-right">
                                <yd-button bgcolor="#e0e0e0" size="large" type="primary"
                                           @click.native="showAndChangeJianliInfo(pi,ind)">监理方信息</yd-button>
                            </div>
                            <div slot="down-left">
                                <yd-button v-if="pi.state==2" bgcolor="#e0e0e0" size="large" type="primary" @click.native="checkWindow(pi.id)">继续验窗</yd-button>
                                <yd-button v-else bgcolor="#e0e0e0" size="large" type="primary" @click.native="checkWindow(pi.id)">开始验窗</yd-button>
                            </div>
                            <div slot="down-right">
                                <yd-button v-if="pi.state==2" bgcolor="#e0e0e0" size="large" type="primary" @click.native="showReport(pi,ind)">查看报告</yd-button>
                            </div>
                        </project-info-btns>
                    </yd-accordion-item>
                </yd-accordion>

                <info-view-update :show="showProjectInfo"
                                  :title="'项目信息'" :loading="projectInfoLoading"
                                  :infos="projectInfo" @update="updateProjectInfo"
                                  @hide="showProjectInfo=false;"></info-view-update>

                <info-view-update :show="showJianliInfo"
                                  :title="'监理方信息'" :loading="jianliInfoLoading"
                                  :infos="jianliInfo" @update="updateJianliInfo"
                                  @hide="showJianliInfo=false;"></info-view-update>
            </div>
        </div>

        <yd-popup v-model="reportPopupShow" position="center" width="90%" :height="reportDialogHeight + 'px'">
            <div style="background: #e7e7e7;padding: 0.5rem;">
                <div v-for="(rep,ind) in reportDoc" :key="ind" v-show="rep.show">
                    <yd-button size="large" @click.native="openDoc(rep)">{{ind}}</yd-button>
                </div>
            </div>
        </yd-popup>
    </yd-layout>
</template>

<script>
    import * as projectApi from './../../api/projectApi'

    import projectInfoBtns from './component/project-info-btns'
    import * as fields from './common/projectFields'
    import infoViewUpdate from './component/info-view-update'
    import { mergeFields } from './../../common/js/component-utils/fieldsSplit'

    import {formVFormCommonFields} from './../../common/js/component-utils/v-form-common'

    export default {
        name: "check-list",
        components : {
            projectInfoBtns,
            infoViewUpdate
        },
        data() {
            return {
                project : '',
                projectInfos : [],
                projectInfo : [],
                showProjectInfo : false,
                projectInfoLoading : true,
                jianliInfos : {},
                jianliInfo : [],
                showJianliInfo : false,
                jianliInfoLoading : true,
                changeProjectId : '',
                title : '验窗列表',
                reportPopupShow : false,
                reportDoc : {
                    MWI1 : {
                        show : false,
                        link : this.$store.state.baseUrl + '/statics/file/MWI/MWI1.html'
                    },
                    MWI2 : {
                        show : false,
                        link : this.$store.state.baseUrl + '/statics/file/MWI/MWI2.html'
                    },
                    MWI2a : {
                        show : false,
                        link : this.$store.state.baseUrl + '/statics/file/MWI/MWI2a.html'
                    },
                    DOC : {
                        show : false,
                        link : this.$store.state.baseUrl + '/statics/file/MWI/doc.html'
                    }
                },
                reportDialogHeight : 0
            };
        },
        mounted() {
            // this.projectInfo = [];
            this.projectInfo = this.projectInfo.concat(formVFormCommonFields(fields.projectInfoFields(this)));
            // this.jianliInfo = [];
            this.jianliInfo = this.jianliInfo.concat(formVFormCommonFields(fields.jianliFields(this)));
            projectApi.projectList()
                .then(_ => {
                    return projectApi.projectInfoPerDear(_.projects)
                })
                .then(_ => {
                    this.projectInfos = _;
                });
            // todo
            window.$this = this;
        },
        methods : {
            showAndChangeProjectInfo(pi,ind) {
                this.changeProjectId = ind;
                this.showProjectInfo = true;
                this.projectInfo.forEach(_ => {
                    if (_.name in pi) {
                        _.value = pi[_.name];
                    } else if (_.name in pi.content) {
                        _.value = pi.content[_.name];
                        _.selectLabel = pi.content[_.name];
                    }
                })
            },
            updateProjectInfo() {
                // todo
                let $this = this;
                this.projectInfoLoading = false;
                projectApi.updateProject(mergeFields(this.projectInfo,true))
                    .then(_ => {
                        $this.$dialog.loading.close();
                        $this.projectInfo.forEach(pi => {
                            if (pi.belongTo) {
                                $this.projectInfos[$this.changeProjectId][pi.belongTo][pi.name] = pi.value;
                            } else {
                                $this.projectInfos[$this.changeProjectId][pi.name] = pi.value;
                            }
                        });
                    });
            },
            updateJianliInfo() {
                // todo
                this.jianliInfoLoading = false;
                let data = mergeFields(this.jianliInfo,true);
                data['projectId'] = this.changeProjectId;
                if (data.id) {
                    projectApi.updateSupervisor(data)
                        .then(_ => {
                            this.jianliInfoLoading = true;
                        });
                } else {
                    projectApi.createSupervisor(data)
                        .then(_ => {
                            this.jianliInfoLoading = true;
                            this.showAndChangeJianliInfo({id : this.changeProjectId});
                        });
                }
            },
            checkWindow(id) {
                this.$router.push({
                    path : '/window/check/stepOne',
                    query : {
                        projectId : id
                    }
                })
            },
            showAndChangeJianliInfo(pi,ind) {
                this.showJianliInfo = true;
                this.$dialog.loading.open('获取监理人信息');
                this.changeProjectId = pi.id;
                projectApi.getSupervisor(pi.id)
                    .then(_ => _.user)
                    .then(_ => {
                        if (_) {
                            this.jianliInfo.forEach(ji => {
                                if (ji.type == 'selectInput') {
                                    for (var i = 0;i < ji.options.length;i++) {
                                        if (_[ji.options[i].name]) {
                                            ji.selected = i;
                                            ji.name = ji.options[i].name;
                                            ji.label = ji.options[i].label;
                                            ji.placeholder = ji.options[i].placeholder;
                                            ji.value = _[ji.options[i].name];
                                        }
                                    }
                                } else {
                                    ji.value = _[ji.name];
                                }
                            })
                        } else {
                            this.jianliInfo.forEach(ji => {
                                ji.value = '';
                            });
                        }
                        console.log(_)
                        this.$dialog.loading.close();
                    });
            },
            showReport(pi,ind) {
                let $this = this;
                localStorage.setItem('pdf',JSON.stringify({"projectId":pi.id}));
                projectApi.getWhat(pi.id)
                    .then(_ => {
                        for (var i in $this.reportDoc) {
                            $this.reportDoc[i].show = false;
                        }
                        console.log(_);
                        if (_.code == 200) {
                            _.data.forEach(_ => {
                                $this.reportDoc[_].show = true;
                            });
                            $this.reportDialogHeight = 47.016 * _.data.length + 42.75;
                            $this.reportPopupShow = true;
                        }
                    });
            },
            openDoc(rep) {
                window.open(rep.link);
            }
        }
    }
</script>

<style>
    .yd-grids-2:before {
        border-bottom: none !important;
    }
    .yd-btn-block {
        margin-top: 0.1rem !important;
    }
    .yd-popup-content{
        width: 100%;
        height: 100%;
    }
    .yd-popup-content>div {
        height: 100% !important;
        position: absolute;
        width: 100%;
    }
</style>