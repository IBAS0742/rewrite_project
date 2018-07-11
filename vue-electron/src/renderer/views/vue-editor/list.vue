<template>
    <div :style="'background-color: #f2f2f2;position: fixed;height: 100%;overflow: auto;box-sizing: padding-box;padding: 6px 6px 56px 6px;width: calc(100% - ' + offsetLeft + 'px);'">
        <el-row style="margin-bottom: 0.5rem;">
            <el-button type="primary" @click="showAddDialog">创建模板</el-button>
        </el-row>
        <el-dialog title="添加模板" :visible.sync="addDialogShow">
            <div>内容</div>
        </el-dialog>
        <el-table
                :data="tableData"
                style="width: 100%;position: relative;">
            <el-table-column
                    v-for="(column,ind) in columnData"
                    :prop="column.prop"
                    :label="column.name"
                    :width="column.width">
            </el-table-column>
            <el-table-column
                    fixed="left"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/index.css'
    import * as element from 'element-ui'

    export default {
        components: {
            ...((element) => {
                const ret = {}
                for (const i in element) {
                    if (element[i].name && !(element[i] instanceof Function)) {
                        // console.log(element[i].name)
                        ret[element[i].name.replace(/[A-Z]/g, function(v, ind) {
                            if (ind) {
                                return '-' + v.toLowerCase()
                            } else {
                                return v.toLowerCase()
                            }
                        })] = element[i]
                    }
                }
                return ret
            })(element)
        },
        data() {
            return {
                columnData: [
                    {
                        name: '模板名称',
                        prop: 'name',
                        width: 180
                    },
                    {
                        name: '创建日期',
                        prop: 'date',
                        width: 180
                    },
                    {
                        name: '模拟数据源',
                        // width: 180,
                        prop: 'src'
                    }
                ],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    src: ''
                }],
                offsetLeft: 0,
                addDialogShow: false
            }
        },
        methods: {
            showAddDialog() {
                this.addDialogShow = true
            }
        },
        mounted() {
            window.$this = this
            this.offsetLeft = this.$el.offsetLeft
            window.onresize = () => {
                this.offsetLeft = this.$el.offsetLeft
            }
        }
    }
</script>

<style scoped>

</style>