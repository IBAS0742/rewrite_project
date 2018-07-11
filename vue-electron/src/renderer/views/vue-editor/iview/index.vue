<template>
    <div class="main">
        <div style="width: 100%;height: 100%;" ref="mainDiv">
            <div :style="mainViewStyle">
                <preview :code="code"></preview>
            </div>
            <div :style="bottomViewStyle">
                <div ref="dragBar" class="dragBar"></div>
                <Tabs v-model="activeName" tab-position="left">
                    <TabPane label="代码" name="second">配置管理</TabPane>
                    <TabPane label="节点树" name="first">用户管理</TabPane>
                    <TabPane label="样式" name="third">角色管理</TabPane>
                    <TabPane label="配置" name="fourth">定时任务补偿</TabPane>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import preview from './preview'
    import * as element from 'iview'
    import 'iview/dist/styles/iview.css'

    export default {
        name: 'vue-editor',
        components: {
            preview,
            ...element
        },
        data() {
            return {
                totalHeight: 0,
                mainViewStyle: {
                    'width': '100%',
                    'height': '70%',
                    'h': 0,
                    'hr': 0.7,
                    'background-color': '#f1f1f1'
                },
                bottomViewStyle: {
                    'width': '100%',
                    'height': '30%',
                    'h': 0,
                    'hr': 0.3,
                    'background-color': '#f1f1f1'
                },
                activeName: 'first',
                code: [
                    {
                        name: 'Button',
                        id: 'first',
                        props: {},
                        style: {},
                        text: 'ibas',
                        children: []
                    },
                    {
                        name: 'Tag',
                        id: 'second',
                        children: [
                            {
                                name: 'Input',
                                props: {
                                    value: '内容'
                                },
                                attrs: {
                                    placeholder: '提示'
                                },
                                children: []
                            }
                        ]
                    }
                ]
            }
        },
        computed: {
        },
        mounted() {
            const $this = this
            this.$refs.dragBar.setAttribute('draggable', true)
            this.$refs.dragBar.ondrag = (e) => {
                if (!e.x || !e.y) {
                    return
                }
                $this.mainViewStyle.height = ($this.mainViewStyle.h + e.offsetY) + 'px'
                $this.bottomViewStyle.height = ($this.bottomViewStyle.h - e.offsetY) + 'px'
            }
            this.$refs.dragBar.ondragend = (e) => {
                $this.mainViewStyle.h = parseInt($this.mainViewStyle.height.split('px')[0])
                $this.mainViewStyle.h = $this.mainViewStyle.h / this.totalHeight
                $this.bottomViewStyle.h = parseInt($this.bottomViewStyle.height.split('px')[0])
                $this.bottomViewStyle.h = $this.bottomViewStyle.h / this.totalHeight
            }
            window.onresize = () => {
                console.log('res')
                $this.totalHeight = this.$refs.mainDiv.clientHeight
                $this.mainViewStyle.h = $this.mainViewStyle.hr * this.totalHeight
                $this.mainViewStyle.height = $this.mainViewStyle.h + 'px'
                $this.bottomViewStyle.h = $this.bottomViewStyle.hr * this.totalHeight
                $this.bottomViewStyle.height = $this.bottomViewStyle.h + 'px'
            }
            this.totalHeight = this.$refs.mainDiv.clientHeight
            this.mainViewStyle.h = (this.totalHeight * 0.7)
            this.mainViewStyle.height = (this.totalHeight * 0.7) + 'px'
            this.bottomViewStyle.h = (this.totalHeight * 0.3)
            this.bottomViewStyle.height = (this.totalHeight * 0.3) + 'px'
            window.$this = this
        }
    }
</script>

<style scoped>
    .main {
        padding: 0.4rem;
        width: 100%;
        height: 100%;
        position: fixed;
        padding-bottom: 55px;
    }
    .mainView {
        height: 70%;
        width: 100%;
        background-color: #f1f1f1;
    }
    .bottomView {
        height: 30%;
        width: 100%;
    }
    .dragBar {
        width: 100%;
        height: 0.2rem;
        position: inherit;
        background: #66b1ff;
        margin-bottom: 0.2rem;
        cursor: n-resize;
    }
</style>