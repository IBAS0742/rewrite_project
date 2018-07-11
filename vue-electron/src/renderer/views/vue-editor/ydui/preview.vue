<template>
    <div>
        <pre-component-ydui v-for="(c,ind) in code" :code="c"></pre-component-ydui>
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