<template>
    <yd-tabbar fixed>
        <yd-tabbar-item v-for="(m,ind) in menus" :active="m.active" :key="ind" :title="m.title" :link="m.routerPath">
            <yd-icon :name="m.icon" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
</template>

<script>

    export default {
        name : 'v-tabbar-custom',
        props : {
            menus : {
                type : Array,
                default : false,
                required : true
            },
            iconSize : {
                type : String,
                default : '0.54rem'
            }
        },
        computed : {
            menusCount() {
                return this.menus.length;
            }
        },
        created() {
            console.log(this.$router)
        },
        methods : {
            invoke(ind,m) {
                this.menus.forEach(m => m.active = false);
                this.menus[ind].active = true;
                this.$emit('tap',m);
            }
        }
    }
</script>

<style scoped>
    .yd-tabbar-item {
        padding: 0.5em 0;
    }
</style>