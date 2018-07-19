import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydScrollTab = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.ScrollTab.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.ScrollTab.props[i]
    }
    props = Object.assign({}, props, {
		"index": buildYduiProps(null, "0", "number", "高亮索引"),
		"callback": buildYduiProps(null, null, "function", "切换回调函数（返回当前索引）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydScrollTab',
        // 这个是方便阅读定义的
        label: '滚动选项卡',
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
        // 生成一个基础的 yd-scroll-tab 对象的节点
        createElementNode() {
            // #slot#let id = 'scrollTab-' + (new Date()).getTime()
            return {
                id: 'scrollTab-' + (new Date()).getTime(),
                // #slot#id,
                title: '滚动选项卡',
                // 对应当前框架中的名称
                name: 'yd-scroll-tab',
                // 官方文档中的名称
                realname: 'yd-scroll-tab',
                props: this.baseProps,
                // 默认内容
                text: 'scroll-tab',
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

export const ydScrollTabPanel = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.ScrollTabPanel.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.ScrollTabPanel.props[i]
    }
    props = Object.assign({}, props, {
		"label": buildYduiProps(null, null, "string", "选项卡标题"),
		"icon": buildYduiProps(null, null, "string", "图标（只支持图标样式名）"),
		"active": buildYduiProps(null, null, "boolean", "是否激活当前选项卡（v1.1.8已废除，使用 yd-scrolltab 的 index 替代）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydScrollTabPanel',
        // 这个是方便阅读定义的
        label: '滚动选项卡内容',
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
        // 生成一个基础的 yd-scroll-tab-panel 对象的节点
        createElementNode() {
            // #slot#let id = 'scrollTabPanel-' + (new Date()).getTime()
            return {
                id: 'scrollTabPanel-' + (new Date()).getTime(),
                // #slot#id,
                title: '滚动选项卡内容',
                // 对应当前框架中的名称
                name: 'yd-scroll-tab-panel',
                // 官方文档中的名称
                realname: 'yd-scroll-tab-panel',
                props: this.baseProps,
                // 默认内容
                text: 'scroll-tab-panel',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
