<template>
    <elm-el-form action="" v-model="val" label-width="150px">
        <div v-for="(el,ind) in els" :key="ind">
            <div v-if="el.type !== 'function'">
                <elm-el-alert v-show="el.desc"
                        :title="el.desc"
                        type="success">
                </elm-el-alert>
                <elm-el-form-item :label="ind">
                    <elm-el-switch v-model="val[ind]" v-if="el.type === 'boolean'"></elm-el-switch>
                    <elm-el-select v-model="val[ind]" v-else-if="el.type === 'string' && el.range && el.range.length">
                        <elm-el-option v-for="(op,ind) in el.range" :label="op" :value="op"></elm-el-option>
                    </elm-el-select>
                    <elm-el-input @change="update(ind)" v-else v-model="val[ind]"></elm-el-input>
                </elm-el-form-item>
            </div>
        </div>
    </elm-el-form>
</template>

<script>
    export default {
        name: "setting-form",
        data() {
            return {
                els: {},
                // val: {},
                $$ObjName: 'a'
            }
        },
        props: {
            val: {
                type: Object,
                required: true
            }
        },
        methods: {
            update(ind) {
                this.$parent.$parent.$parent.editComponent.data[this.$$ObjName][ind] = this.val[ind]
                console.log(ind)
            }
        }
    }
</script>

<style scoped>

</style>