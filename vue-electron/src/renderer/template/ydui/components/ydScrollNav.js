import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydScrollNav = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.ScrollNav.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.ScrollNav.props[i]
    }
    props = Object.assign({}, props, {
		"index": buildYduiProps(null, "0", "number", "高亮索引"),
		"height": buildYduiProps(null, ".9rem", "string && (px或rem)", "导航高度"),
		"color": buildYduiProps(null, "#333", "string && 常规颜色值", "字体颜色"),
		"current-color": buildYduiProps(null, "#f00", "string && 常规颜色值", "高亮字体颜色"),
		"toggle-text": buildYduiProps(null, "切换分类", "string", "切换分类提示文字"),
		"bgcolor": buildYduiProps(null, "#fff", "string && 常规颜色值", "导航背景颜色"),
		"border-color": buildYduiProps(null, "#efefef", "string && 常规颜色值", "边框颜色"),
		"callback": buildYduiProps(null, null, "function", "切换回调函数（返回当前索引）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydScrollNav',
        // 这个是方便阅读定义的
        label: '滚动导航',
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
        // 生成一个基础的 yd-scroll-nav 对象的节点
        createElementNode() {
            // #slot#let id = 'scrollNav-' + (new Date()).getTime()
            return {
                id: 'scrollNav-' + (new Date()).getTime(),
                // #slot#id,
                title: '滚动导航',
                // 对应当前框架中的名称
                name: 'yd-scroll-nav',
                // 官方文档中的名称
                realname: 'yd-scroll-nav',
                props: this.baseProps,
                // 默认内容
                text: 'scroll-nav',
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

export const ydScrollNavPanel = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.ScrollNavPanel.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.ScrollNavPanel.props[i]
    }
    props = Object.assign({}, props, {
		"label": buildYduiProps(null, null, "string", "导航标题")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydScrollNavPanel',
        // 这个是方便阅读定义的
        label: '滚动导航内容',
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
        // 生成一个基础的 yd-scroll-nav-panel 对象的节点
        createElementNode() {
            // #slot#let id = 'scrollNavPanel-' + (new Date()).getTime()
            return {
                id: 'scrollNavPanel-' + (new Date()).getTime(),
                // #slot#id,
                title: '滚动导航内容',
                // 对应当前框架中的名称
                name: 'yd-scroll-nav-panel',
                // 官方文档中的名称
                realname: 'yd-scroll-nav-panel',
                props: this.baseProps,
                // 默认内容
                text: 'scroll-nav-panel',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
