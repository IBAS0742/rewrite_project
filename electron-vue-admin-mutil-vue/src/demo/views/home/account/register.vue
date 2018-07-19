<template>
    <div>
        <div style="margin: 0.2rem 0;font-size: 0.5rem;text-align: center;">{{title}}</div>
        <yd-tab>
            <yd-tab-panel label="个人用户">
                <register-user @showStatement="statementPopupShow=true"></register-user>
            </yd-tab-panel>
            <yd-tab-panel label="公司用户">
                <register-company @showStatement="statementPopupShow=true"></register-company>
            </yd-tab-panel>
        </yd-tab>

        <yd-popup v-model="statementPopupShow" position="bottom" width="100%" height="100%">
            <yd-navbar title="NavBar" fixed>
                <div slot="left" @click="statementPopupShow=false">返回</div>
                <div slot="center" style="font-size: 0.5rem;">免责声明</div>
            </yd-navbar>
            <div class="register-mzsm">
                <div>
                    本网站所提供的信息，只供参考之用。
                </div>
                <div>
                    本网站及其雇员一概毋须以任何方式就任何信息传递或传送的失误、不准确或错误对用户或任何其他人士负任何直接或间接的责任。
                </div>
                <div>
                    在法律允许的范围内，本网站在此声明,不承担用户或任何人士就使用或未能使用本网站所提供的信息或任何链接或项目所引致的任何直接、间接、附带、从属、特殊、惩罚性或惩戒性的损害赔偿（包括但不限于收益、预期利润的损失或失去的业务、未实现预期的节省）。
                </div>
                <div>
                    本网站所提供的信息，若在任何司法管辖地区供任何人士使用或分发给任何人士时会违反该司法管辖地区的法律或条例的规定或会导致本网站或其第三方代理人受限于该司法管辖地区内的任何监管规定时，则该等信息不宜在该司法管辖地区供该等任何人士使用或分发给该等任何人士。用户须自行保证不会受限于任何限制或禁止用户使用或分发本网站所提供信息的当地的规定。
                </div>
                <div>
                    本网站图片，文字之类版权申明，因为网站可以由注册用户自行上传图片或文字，本网站无法鉴别所上传图片或文字的知识版权，如果侵犯，请及时通知我们，本网站将在第一时间及时删除。
                </div>
                <div>
                    凡以任何方式登陆本网站或直接、间接使用本网站资料者，视为自愿接受本网站声明的约束。
                </div>
                <div style="height: 0.2rem;">
                </div>
                <div>
                    The information provided on this site is for reference only.
                </div>
                <div>
                    The Website and its employees shall not in any way be liable to the user or any other person for any errors, inaccuracies or errors in the transmission or transmission of any information directly or indirectly.
                </div>
                <div>
                    To the extent permitted by law, this website hereby declares that it does not assume any direct, indirect, incidental, contingent, special, or indirect liability arising out of the use or inability of the user or any person to use or to use information provided on this site or any link or item. Punitive or exemplary damages (including but not limited to benefits, loss of expected profits or lost business, unrealized savings).
                </div>
                <div>
                    The information provided on this website, if used by any person in any jurisdiction or distributed to any person, would violate the laws or regulations of the jurisdiction or cause the website or its third party agents to be restricted Where there are any regulatory requirements in jurisdictions, such information should not be used in or distributed to any such persons in the jurisdiction. The user is responsible for ensuring that he will not be bound by any local regulations that restrict or prohibit users from using or distributing the information provided on this site. Copyrights of pictures, texts, etc. of this site are stated because the site can upload images or texts by registered users.
                </div>
                <div>
                    This site cannot identify the intellectual property rights of uploaded pictures or texts. If it is infringed, please inform us in time that this site will be the first time. Delete in time.
                </div>
                <div>
                    Any person who accesses this website by any means or directly or indirectly uses the information on this website shall be deemed to voluntarily accept the restrictions of this site's statement.
                </div>
            </div>
        </yd-popup>
    </div>
</template>

<script type="text/babel">
    import registerUser from './registerUser'
    import registerCompany from './registerCompany'

    export default {
        name : 'register',
        components : {
            registerUser,
            registerCompany
        },
        computed : {
        },
        data() {
            return {
                title : this.$t('home.account.registerVue.register'),
                statementPopupShow : false
            }
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .v-form-register-btn {
        width : 40% !important;
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
