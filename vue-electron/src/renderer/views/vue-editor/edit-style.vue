<template>
    <div>
        <elm-el-row :gutter="5">
            <elm-el-col class="elm-el-row-text" :span="10">样式名称</elm-el-col>
            <elm-el-col class="elm-el-row-text" :span="10">值</elm-el-col>
            <elm-el-col :span="4">
                <elm-el-button>添加</elm-el-button>
            </elm-el-col>
        </elm-el-row>
        <elm-el-row v-for="(s,ind) in styles" :gutter="5">
            <elm-el-col :span="10">
                <!--<elm-el-input v-modal="s.name" @change="addRow(ind)"></elm-el-input>-->
                <input type="text" v-model="s.name" class="el-input__inner" @change="addRow(ind)">
            </elm-el-col>
            <elm-el-col :span="10">
                <!--<elm-el-input v-modal="s.value" @change="addRow(ind)"></elm-el-input>-->
                <input type="text" :value="s.value" class="el-input__inner" @change="addRow(ind)">
            </elm-el-col>
            <elm-el-col :span="4">
                <elm-el-button @click="handleDelete(ind)">删除</elm-el-button>
            </elm-el-col>
        </elm-el-row>
    </div>
</template>

<script>
    /* eslint-disable no-array-constructor */

    export default {
        name: "edit-style",
        props: {
            styleObj: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                styles: []
            }
        },
        methods: {
            addRow(ind) {
                console.log(this.styles)
                if ((ind + 1) === this.styles.length) {
                    this.styles.push({
                        name: '',
                        value: ''
                    })
                }
            },
            buildObject() {
                const obj = {}
                for (let i = 0; i < this.styles.length; i++) {
                    if (this.styles[i].name && this.styles[i].value) {
                        obj[this.styles[i].name] = this.styles[i].value
                    }
                }
                return obj
            },
            handleDelete(ind) {
                console.log(this.styles)
                this.styles.splice(ind, 1)
                if (!this.styles.length) {
                    this.styles.push({
                        name: '',
                        value: ''
                    })
                }
            }
        },
        mounted() {
            for (const i in this.styleObj) {
                this.styles.push(Object.assign({}, {
                    name: i,
                    value: this.styleObj[i]
                }))
            }
            this.styles.push({
                name: '',
                value: ''
            })
        }
    }
</script>

<style scoped>
    .elm-el-row-text {
        text-align: center;
        font-size: 1.4em;
        line-height: 2.4em;
    }
</style>