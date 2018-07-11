<template>
    <div :style="'background-color: #f2f2f2;position: fixed;height: 100%;overflow: auto;box-sizing: padding-box;padding: 6px 6px 56px 6px;width: calc(100% - ' + offsetLeft + 'px);'">
        <div style="margin: 0.5rem 0;">
            <iv-button type="primary" @click="modal1 = true">添加模板</iv-button>
        </div>
        <iv-modal
                v-model="modal1"
                title="模板列表"
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </iv-modal>
        <iv-table :columns="columns1" :data="data1"></iv-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns1: [
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'left',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('IvButton', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('IvButton', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ])
                        }
                    },
                    {
                        title: '模板名称',
                        key: 'name'
                    },
                    {
                        title: '创建时间',
                        key: 'time'
                    },
                    {
                        title: '测试数据源',
                        key: 'src'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        src: 'New York No. 1 Lake Park',
                        time: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        src: 'London No. 1 Lake Park',
                        time: '2016-10-01'
                    }
                ],
                offsetLeft: 0,
                modal1: false
            }
        },
        methods: {
            ok() {},
            cancel() {}
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