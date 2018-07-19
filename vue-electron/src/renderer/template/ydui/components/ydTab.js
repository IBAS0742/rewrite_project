import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydTab = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.Tab.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.Tab.props[i]
    }
    props = Object.assign({}, props, {
		"active-color": buildYduiProps(null, "#ff5e53", "string && 常规颜色值", "选中时高亮的颜色值"),
		"callback": buildYduiProps(null, null, "function", "切换时调用的函数（返回当前label和当前tabkey）"),
		"item-click": buildYduiProps(null, null, "function", "点击选项卡时触发的方法（v1.2.1新增）"),
		"prevent-default": buildYduiProps(null, "true", "boolean", "是否自动切换（v1.2.1新增）"),
		"horizontal-scroll": buildYduiProps(null, "false", "boolean", "是否可横向滚动（v1.2.1新增）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydTab',
        // 这个是方便阅读定义的
        label: '选项卡',
        // 这里从 ydui 中获取 props 的定义
        props,
        // #slot#slots: #slotstr#,
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            return p
        })(props),
        // 生成一个基础的 yd-tab 对象的节点
        createElementNode() {
            // #slot#let id = 'tab-' + (new Date()).getTime()
            return {
                id: 'tab-' + (new Date()).getTime(),
                // #slot#id,
                title: '选项卡',
                // 对应当前框架中的名称
                name: 'yd-tab',
                // 官方文档中的名称
                realname: 'yd-tab',
                props: this.baseProps,
                // 默认内容
                text: 'tab',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()


// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydTabPanel = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.TabPanel.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.TabPanel.props[i]
    }
    props = Object.assign({}, props, {
		"label": buildYduiProps(null, null, "string", "选项卡标题"),
		"active": buildYduiProps(null, null, "boolean", "是否激活当前选项卡"),
		"tabkey": buildYduiProps(null, null, "string || number", "选项卡的值（多用于区分各个选项卡），不指定将返回当前索引")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydTabPanel',
        // 这个是方便阅读定义的
        label: '选项卡内容',
        // 这里从 ydui 中获取 props 的定义
        props,
        // #slot#slots: #slotstr#,
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            return p
        })(props),
        // 生成一个基础的 yd-tab-panel 对象的节点
        createElementNode() {
            // #slot#let id = 'tabPanel-' + (new Date()).getTime()
            return {
                id: 'tabPanel-' + (new Date()).getTime(),
                // #slot#id,
                title: '选项卡内容',
                // 对应当前框架中的名称
                name: 'yd-tab-panel',
                // 官方文档中的名称
                realname: 'yd-tab-panel',
                props: this.baseProps,
                // 默认内容
                text: 'tab-panel',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
