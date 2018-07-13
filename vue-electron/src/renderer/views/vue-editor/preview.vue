<template>
    <div>
        <pre-component v-for="(c,ind) in code" :code="c"></pre-component>
    </div>
</template>

<script>
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