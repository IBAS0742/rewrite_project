<template>
    <yd-layout>
        <yd-navbar fixed>
            <div slot="left" @click="$router.go(-1)">
                <yd-icon name="fanhui2" size="0.3rem" custom></yd-icon>
            </div>
            <div slot="center" style="font-size: 0.4rem;">开发中</div>
        </yd-navbar>
        <div style="padding-top: 2rem;text-align: center;">
            <yd-icon name="location" size="2rem"></yd-icon>
        </div>
    </yd-layout>
</template>

<script>
    export default {
        name: "blank"
    }
</script>

<style scoped>

</style>