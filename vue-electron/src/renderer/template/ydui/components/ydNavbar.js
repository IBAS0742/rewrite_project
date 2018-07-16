import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydNavBar = (function () {
    const props = Object.assign({}, Vue.temp.ydui.NavBar.props, {
		"title": buildYduiProps(null, null, "string", "导航标题"),
		"fixed": buildYduiProps(null, "false", "boolean", "是否fixed定位"),
		"bgcolor": buildYduiProps(null, "#fff", "string && 常规颜色值", "背景颜色"),
		"height": buildYduiProps(null, "1rem（50px）", "string", "高度"),
		"fontsize": buildYduiProps(null, ".4rem（20px）", "string", "中间标题字号"),
		"color": buildYduiProps(null, "#5c5c5c", "string && 常规颜色值", "按钮字体颜色")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydNavBar',
        // 这个是方便阅读定义的
        label: '头部导航',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "left",
				"have": false,
				"desc": "导航左侧内容"
			},
			{
				"slot": "center",
				"have": false,
				"desc": "导航中间内容"
			},
			{
				"slot": "right",
				"have": false,
				"desc": "导航右侧内容"
			}
		],
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            return p
        })(props),
        // 生成一个基础的 yd-nav-bar 对象的节点
        createElementNode() {
            let id = 'navBar-' + (new Date()).getTime()
            return {
                // #normal#id: 'navBar-' + (new Date()).getTime(),
                id,
                title: '头部导航',
                // 对应当前框架中的名称
                name: 'yd-nav-bar',
                // 官方文档中的名称
                realname: 'yd-nav-bar',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'nav-bar',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()


// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydNavBarBackIcon = (function () {
    const props = Object.assign({}, Vue.temp.ydui.NavBarBackIcon.props, {
		"color": buildYduiProps(null, "#5c5c5c", "string", "图标颜色")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydNavBarBackIcon',
        // 这个是方便阅读定义的
        label: '头部导航-回退',
        // 这里从 ydui 中获取 props 的定义
        props,
        // #slot#slots: #slotstr#,
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            console.log(props)
            return p
        })(props),
        // 生成一个基础的 yd-nav-bar-back-icon 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'navBarBackIcon-' + (new Date()).getTime()
            return {
                id: 'navBarBackIcon-' + (new Date()).getTime(),
                // #slot#id,
                title: '头部导航-回退',
                // 对应当前框架中的名称
                name: 'yd-nav-bar-back-icon',
                // 官方文档中的名称
                realname: 'yd-nav-bar-back-icon',
                props: this.baseProps,
                // 默认内容
                text: 'nav-bar-back-icon',
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

export const ydNavBarNextIcon = (function () {
    const props = Object.assign({}, Vue.temp.ydui.NavBarNextIcon.props, {
		"color": buildYduiProps(null, "#5c5c5c", "string", "图标颜色")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydNavBarNextIcon',
        // 这个是方便阅读定义的
        label: '头部导航-往前',
        // 这里从 ydui 中获取 props 的定义
        props,
        // #slot#slots: #slotstr#,
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            console.log(props)
            return p
        })(props),
        // 生成一个基础的 yd-nav-bar-next-icon 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'navBarNextIcon-' + (new Date()).getTime()
            return {
                id: 'navBarNextIcon-' + (new Date()).getTime(),
                // #slot#id,
                title: '头部导航-往前',
                // 对应当前框架中的名称
                name: 'yd-nav-bar-next-icon',
                // 官方文档中的名称
                realname: 'yd-nav-bar-next-icon',
                props: this.baseProps,
                // 默认内容
                text: 'nav-bar-next-icon',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
