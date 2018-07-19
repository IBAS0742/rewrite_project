<template>
    <yd-layout>
        <yd-navbar fixed>
            <div slot="left" @click="$router.go(-1)">
                <yd-icon name="fanhui2" size="0.3rem" custom></yd-icon>
            </div>
            <div slot="center" style="font-size: 0.4rem;">{{title}}</div>
        </yd-navbar>

        <div style="margin-top: 1rem;">
            <div style="padding-top: 0.2rem;">
                <div v-show="!logined">
                    <router-link class="login-div" to="/home/user">{{$t('window.main.loginFirst')}}</router-link>
                </div>

                <div v-show="logined" style="padding: 0 1em;">
                    <v-card-custom v-for="(m,ind) in menus" :key="ind"
                                   @click.native="$router.push(m.routerPath || '#')">
                        <div size="large" type="hollow">
                            {{m.label}}
                        </div>
                    </v-card-custom>
                </div>
            </div>
        </div>
    </yd-layout>
</template>

<script>
    import vCardCustom from './../../components/v-card/v-card-custom'
    export default {
        name : 'window-main',
        components : {
            vCardCustom
        },
        data() {
            return {
                title : this.$t('window.main.title'),
                menus : [
                    {
                        label : this.$t('window.main.addCheck'),
                        routerPath : '/window/add'
                    },
                    {
                        label : this.$t('window.main.checkList'),
                        routerPath : '/window/list'
                    },
                    // {
                    //     label : this.$t('window.main.repairsList'),
                    //     routerPath : '/window/repairs'
                    // },
                ]
            }
        },
        computed : {
            logined() {
                console.log(this.$store.state);
                return this.$store.state.logined;
            }
        }
    }
</script>

<style scoped>
    .login-div {
        text-align: center;
        font-size: 0.3rem !important;
        display: block;
        width: 80%;
        box-shadow: 1px 1px 2px 2px #c3c3c3;
        margin: 1em 10%;
        padding: 1em;
        cursor: pointer;
    }
</style>