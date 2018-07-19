<template>
    <router-view></router-view>
</template>

<script>

    export default {
        name : 'window',
        data() {
            return {
            }
        },
        computed : {
            title() {
                return this.$store.state.windowTitle;
            }
        },
        methods : {
            routerBack() {
                this.$router.go(-1);
            }
        },
        mounted() {
            if (this.$route.path == '/window') {
                this.$store.state.windowTitle = this.$t('window.main.title');
            } else if (this.$route.path == '/window/addFields') {
                this.$store.state.windowTitle = this.$t('window.fields.stepOneTitle');
            }
        },
        watch : {
            $route(val) {
                if (val.path == '/window') {
                    this.$store.state.windowTitle = this.$t('window.main.title');
                } /*else if (val.path == '/window/addFields') {
                    this.$router.go(0);
                    this.$store.state.windowTitle = this.$t('window.fields.stepOneTitle');
                }*/
            }
        }
    }
</script>
