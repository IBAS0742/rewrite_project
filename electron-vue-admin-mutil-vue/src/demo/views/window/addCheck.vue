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
                <v-card-custom v-for="(m,ind) in menus" :key="ind" @click.native="createProject(m)">
                    <yd-icon :size="menuSize" :name="m.iconName" custom></yd-icon>
                    <div style="font-size: 0.7em;">{{m.title}}</div>
                </v-card-custom>
            </div>
        </div>
    </yd-layout>
</template>

<script>
    import vCardCustom from './../../components/v-card/v-card-custom'

    export default {
        components : {
            vCardCustom
        },
        name : 'window-add-check',
        data() {
            return {
                menuSize : '0.8rem',
                title : this.$t('window.add.title'),
                menus : [
                    {
                        title : this.$t('window.add.handAdd'),
                        routerPath : '/window/addFields',
                        iconName : 'xinjian2'
                    },
                    {
                        title : this.$t('window.add.copyFromOther'),
                        routerPath : '',
                        iconName : 'fuzhi1'
                    },
                    {
                        title : this.$t('window.add.copyFromTemplate'),
                        routerPath : '',
                        iconName : 'xinjian'
                    },
                ]
            }
        },
        methods : {
            createProject(m) {
                this.$router.push(m.routerPath)
            }
        }
    }
</script>