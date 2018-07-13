<template>
    <div class="main">
        <elm-el-slider v-model="offsetLeft"></elm-el-slider>
        <div class="left-panel" ref="mainDiv" :style="'width:' + offsetLeft + '%;display:' + (offsetLeft? 'block':'none')">
            <yd-tab style="width:100%;" v-model="activeName" tab-position="left">
                <yd-tab-panel class="yd-tab-panel-ex" label="代码" name="first">配置管理</yd-tab-panel>
                <yd-tab-panel class="yd-tab-panel-ex" label="节点树" name="second">
                    <elm-el-tree  default-expand-all :data="code" :props="defaultProps">
                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span>
                                <svg-icon v-show="data.type=='el'" icon-class="el"></svg-icon>
                                <svg-icon v-show="data.type=='el-slot'" icon-class="el-slot"></svg-icon>
                                <svg-icon v-show="data.type=='slot'" icon-class="slot"></svg-icon>
                            </span>
                            <span>{{ node.label }}</span>
                            <span>
                              <elm-el-button
                                      v-show="data.type != 'template'"
                                      type="text"
                                      size="mini"
                                      @click.stop="() => append(data)">
                                样式
                              </elm-el-button>
                              <elm-el-button
                                      v-show="data.type != 'template'"
                                      type="text"
                                      size="mini"
                                      @click.stop="() => setting(node, data)">
                                配置
                              </elm-el-button>
                              <elm-el-button
                                      v-show="data.type === 'el' || data.type === 'template' || (data.type === 'slot' && data.have)"
                                      type="text"
                                      size="mini"
                                      @click.stop="() => insertNode(data, node)">
                                添加
                              </elm-el-button>
                              <elm-el-button
                                      v-show="data.type === 'slot' && !data.have"
                                      type="text"
                                      size="mini"
                                      @click.stop="() => insertNode(data, node)">
                                替换
                              </elm-el-button>
                              <elm-el-button
                                      v-show="data.type === 'slot' && data.have"
                                      type="text"
                                      size="mini"
                                      @click.stop="() => recoverNode(data, node)">
                                还原
                              </elm-el-button>
                              <elm-el-button
                                      v-show="data.type == 'el'"
                                      type="text"
                                      size="mini"
                                      @click.stop="() => removeNode(data, node)">
                                删除
                              </elm-el-button>
                            </span>
                        </span>
                    </elm-el-tree>
                </yd-tab-panel>
                <yd-tab-panel class="yd-tab-panel-ex" label="样式" name="third" v-show="editComponent.id !== 0">
                    <elm-el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            @change="updateStyle"
                            autosize
                            v-model="editComponent.styleText">
                    </elm-el-input>
                </yd-tab-panel>
                <yd-tab-panel class="yd-tab-panel-ex" label="配置" name="fourth" v-show="editComponent.id !== 0">
                    <elm-el-form label-position="left" label-width="80px" :model="formLabelAlign">
                        <elm-el-form-item label="名称">
                            <elm-el-input v-model="formLabelAlign.name"></elm-el-input>
                        </elm-el-form-item>
                        <elm-el-form-item label="活动区域">
                            <elm-el-input v-model="formLabelAlign.region"></elm-el-input>
                        </elm-el-form-item>
                        <elm-el-form-item label="活动形式">
                            <elm-el-input v-model="formLabelAlign.type"></elm-el-input>
                        </elm-el-form-item>
                    </elm-el-form>
                </yd-tab-panel>
            </yd-tab>
        </div>
        <div class="right-panel" :style="'width:' + (100 - offsetLeft) + '%;display:' + ((100 - offsetLeft)? 'block':'none')">
            <preview :code="code[0].children">
            </preview>
        </div>
        <ElmElDialog title="选择组件" :visible.sync="selectComponent.dialog" :modal="false">
            <elm-el-autocomplete
                    ref="autocomplete"
                    style="width:100%"
                    class="inline-input"
                    v-model="selectComponent.componentName"
                    :fetch-suggestions="querySearchComponent"
                    placeholder="请选择一个组件"
                    @select="handleSelect"
            ></elm-el-autocomplete>
        </ElmElDialog>
    </div>
</template>

<!--<script src="./extern/ydui.flexible.js"></script>-->
<!--<script src="./extern/fastclick.js"></script>-->
<!-- 这里使用了 饿了么 的树组件 -->
<script>
    import preview from './../preview'
    import editStyle from './../edit-style'
    import 'vue-ydui/dist/ydui.base.css'
    import { ydComponent } from "../../../template/ydui/registerAllComponent"
    import { baseComponent } from "../../../template/baseUI/registerAllComponent"
    import { recoverYduiSlot } from "../../../template/ydui/buildDefaultObject"
    require('./extern/ydui.flexible')
    require('./extern/fastclick')

    console.log(ydComponent)

    export default {
        name: 'vue-editor',
        components: {
            preview,
            editStyle
        },
        data() {
            return {
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                selectComponent: {
                    dialog: false,
                    componentName: '',
                    ydComponentName: [],
                    node: {},
                    data: {}
                },
                editComponent: {
                    style: {},
                    styleText: '{}',
                    id: 0,
                    node: {},
                    data: {}
                },
                defaultProps: {
                    children: 'children',
                    label: 'title'
                },
                activeName: 1,
                code: [
                    {
                        type: 'template',
                        title: 'template',
                        id: 0,
                        children: [
                            {
                                title: '按钮',
                                type: 'el',
                                name: 'yd-button',
                                id: 'first',
                                props: {},
                                style: {},
                                text: 'ibas',
                                children: []
                            },
                            {
                                title: '列表',
                                type: 'el',
                                name: 'yd-list-theme',
                                id: 'second',
                                props: {
                                    theme: 3
                                },
                                style: {},
                                children: [
                                    {
                                        "id": "list-1531463542714",
                                        "title": "列表",
                                        "name": "yd-list-theme",
                                        "realname": "yd-list",
                                        "props": { "theme": 3 },
                                        "type": "el",
                                        "children": [{
                                            "id": "list-item-1531463545643",
                                            "title": "列表项",
                                            "name": "yd-list-item",
                                            "realname": "yd-list-item",
                                            "props": { "type": "a", "href": "" },
                                            "type": "el",
                                            "children": [{
                                                "slot": "img",
                                                "have": false,
                                                "desc": "",
                                                "id": "list-item-1531463545643img",
                                                "type": "slot",
                                                "title": "img"
                                            }, {
                                                "id": "list-item-1531463545643title",
                                                "name": "span",
                                                "realname": "span",
                                                "style": {},
                                                "text": "span",
                                                "type": "el-slot",
                                                "slot": "title",
                                                "have": true,
                                                "desc": "",
                                                "title": "title"
                                            }, {
                                                "slot": "other",
                                                "have": false,
                                                "desc": "",
                                                "id": "list-item-1531463545643other",
                                                "type": "slot",
                                                "title": "other"
                                            }],
                                            "style": {}
                                        }],
                                        "style": {}
                                    }
                                ]
                            }
                        ]
                    }
                ],
                offsetLeft: 40
            }
        },
        computed: {
        },
        methods: {
            // 打开插入组件的对话框
            insertNode(data, node) {
                this.selectComponent.dialog = true
                this.selectComponent.node = node
                this.selectComponent.data = data
                console.log(data, node, ydComponent)
                setTimeout(() => {
                    this.$refs.autocomplete.$el.getElementsByTagName('input')[0].focus()
                })
            },
            // 模糊搜索 组件 方法
            querySearchComponent(qs, cb) {
                if (qs) {
                    qs = qs.toLowerCase()
                    cb(this.selectComponent.ydComponentName.filter(name => {
                        return (name.value.indexOf(qs) + 1)
                    }))
                } else {
                    cb(this.selectComponent.ydComponentName)
                }
            },
            // 将选中的组件添加到节点中
            handleSelect(qs) {
                window.ret = {
                    qs,
                    sel: this.selectComponent
                }
                if (this.selectComponent.data.type === 'slot') {
                    if (this.selectComponent.data.have) {
                        this.selectComponent.data.children.push(qs.component.createElementNode())
                    } else {
                        const newNode = qs.component.createElementNode()
                        this.selectComponent.data.have = true
                        for (let i = 0; i < this.selectComponent.node.parent.childNodes.length; i++) {
                            if (this.selectComponent.node.parent.childNodes[i].data.id === this.selectComponent.data.id) {
                                this.selectComponent.node.parent.data.children.splice(i, 1, Object.assign(newNode, this.selectComponent.data))
                                break
                            }
                        }
                    }
                } else {
                    this.selectComponent.data.children.push(qs.component.createElementNode())
                }
                this.selectComponent.dialog = false
                this.selectComponent.componentName = ''
            },
            // 更新样式
            updateStyle() {
                window.ret = this.editComponent.styleText
                try {
                    const style = JSON.parse(this.editComponent.styleText.replace(/'/g, '"'))
                    this.editComponent.style = style
                    console.log(this.editComponent.style)
                } catch (e) {
                    console.log(e)
                }
            },
            // 恢复 slot 的内容
            recoverNode(data, node) {
                for (let i = 0; i < node.parent.data.children.length; i++) {
                    if (node.parent.data.children[i].id === data.id) {
                        node.parent.data.children.splice(i, 1, recoverYduiSlot(data))
                        break
                    }
                }
            },
            // 删除一个节点
            removeNode(data, node) {
                for (let i = 0; i < node.parent.data.children.length; i++) {
                    if (node.parent.data.children[i].id === data.id) {
                        node.parent.data.children.splice(i, 1)
                        break
                    }
                }
            },
            // 修改一个节点的配置信息 主要是 props
            setting(data, node) {
                this.editComponent.data = data
                this.editComponent.node = node
                this.editComponent.id = data.id
                this.activeName = 3
            }
        },
        mounted() {
            window.$this = this
            for (const i in ydComponent) {
                this.selectComponent.ydComponentName.push({
                    value: ydComponent[i].name.toLowerCase() + ' >>> ' + ydComponent[i].label,
                    component: ydComponent[i]
                })
            }
            for (const i in baseComponent) {
                this.selectComponent.ydComponentName.push({
                    value: baseComponent[i].name.toLowerCase() + ' >>> 基础组件',
                    component: baseComponent[i]
                })
            }
        },
        watch: {
            'editComponent.style'(val) {
                this.editComponent.styleText = JSON.stringify(val, null, "\t")
            }
        }
    }
</script>

<style>
    .highlighted {
        background: #e4f1ff !important;
    }
</style>
<style scoped>
    .main {
        overflow: scroll;
        padding: 0.4rem;
        width: calc(100% - 36px);
        height: 100%;
        position: fixed;
        padding-bottom: 55px;
    }
    .right-panel {
        float: left;
        width: 60%;
        /*background: white;*/
        border: 2px solid #e3e3e3;
        padding: 2px;
        box-sizing: border-box;
    }
    .left-panel {
        float: left;
        width: 40%;
        padding-right: 0.1rem;
    }
    .yd-tab-panel-ex {
        height: calc(100% - 47px);
    }
</style>