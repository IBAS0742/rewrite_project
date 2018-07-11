<template>
    <div :style="'background-color: #f2f2f2;position: fixed;height: 100%;overflow: auto;box-sizing: padding-box;padding: 6px 6px 56px 6px;width: calc(100% - ' + offsetLeft + 'px);'">
        <Button type="primary" @click="modal1 = true">Display dialog box</Button>
        <Modal
                v-model="modal1"
                title="Common Modal dialog box title"
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
        <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
    import 'iview/dist/styles/iview.css'
    import * as element from 'iview'

    export default {
        components: {
            ...element
        },
        data() {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
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