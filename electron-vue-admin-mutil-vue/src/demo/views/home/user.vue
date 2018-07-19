<template>
    <div :style="'min-height:' + minHeight + 'px;margin-bottom:3rem;'">
        <div v-show="!logined">
            <login v-show="loginShow" v-on:shift="shift"></login>
            <register v-show="registerShow" v-on:shift="shift"></register>
        </div>
        <user-info :user-info="userInfo"
                   @updateUserInfo="updateUserInfo"
                   :user-id="userId"
                   v-show="logined"
                   :logined="logined"></user-info>
    </div>
</template>

<script>
    import * as api from './../../api/accountApi'
    import login from './account/login';
    import register from './account/register';
    import userInfo from './account/userInfo';

    export default {
        data() {
            return {
                logined : false,
                userInfo : {},
                loginShow : true,
                registerShow : false,
                userId : ''
            }
        },
        computed : {
            minHeight() {
                return window.innerHeight - 70;
            },
        },
        name : 'v-home-user',
        components : {
            login,
            register,
            userInfo
        },
        methods : {
            /**
             * 转换登陆注册
             * */
            shift() {
                this.loginShow = !this.loginShow;
                this.registerShow = !this.registerShow;
            },
            updateUserInfo() {
                api.getUserInfo()
                    .then(_ => {
                        _ = _.user;
                        this.userId = _.id;
                        delete _.roleIdList;
                        delete _.id;
                        delete _.createTime;
                        delete _.password;
                        return _;
                    })
                    .then(_ => {
                        this.userInfo = _;
                        this.$store.state.userInfo = _;
                        this.$store.state.logined = true;
                        this.logined = true;
                    });
            }
        },
        mounted() {
            console.log(this);
            api.getUserInfo()
                .then(_ => {
                    _ = _.user;
                    this.userId = _.id;
                    delete _.roleIdList;
                    delete _.id;
                    delete _.createTime;
                    delete _.password;
                    return _;
                })
                .then(_ => {
                    this.userInfo = _;
                    this.$store.state.userInfo = _;
                    this.$store.state.logined = true;
                    this.logined = true;
                });
        }
    }
</script>