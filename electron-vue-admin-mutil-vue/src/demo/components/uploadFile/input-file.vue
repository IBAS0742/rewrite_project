<template>
    <input
            type="file"
            :accept="accept || 'image/*'"
            @change="change"/>
</template>

<script>
    export default {
        name: "input-file",
        props : {
            accept : {
                type : String
            }
        },
        methods: {
            change(e) {
                this.$parent.$parent.fileChange(e.target)
                this.$destroy()
                // this.$emit('add',e.target);
                // eslint-disable-next-line
                new this.constructor({
                    parent: this.$parent,
                    el: this.$el,
                })
            }
        }
    }
</script>

<style scoped>

</style>