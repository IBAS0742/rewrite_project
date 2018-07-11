<template>
    <div>
        <pre-component-i-view v-for="(c,ind) in code" :code="c"></pre-component-i-view>
    </div>
</template>

<script>
    // import precomponent from './../../components/component/precomponent'

    export default {
        name: "preview",
        props: {
            code: {
                type: Array,
                required: true
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>