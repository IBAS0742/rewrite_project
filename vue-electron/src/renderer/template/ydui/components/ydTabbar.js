import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydTabBar = (function () {
    const props = Object.assign({}, Vue.temp.ydui.TabBar.props, {
		"fixed": buildYduiProps(null, "false", "boolean", "是否fixed定位"),
		"active-color": buildYduiProps(null, "#09bb07", "string", "选中颜色 && 常规颜色值"),
		"bgcolor": buildYduiProps(null, "#fff", "string && 常规颜色值", "背景颜色"),
		"fontsize": buildYduiProps(null, ".4rem（20px）", "string", "标题字体大小"),
		"color": buildYduiProps(null, "#5c5c5c", "string && 常规颜色值", "标题字体颜色"),
		"exact": buildYduiProps(null, "true", "boolean", "是否已开启 router-link 的严格模式"),
		"active-class": buildYduiProps(null, "router-link-active", "string", "router-link 激活时的class名")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydTabBar',
        // 这个是方便阅读定义的
        label: '底部导航',
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
        // 生成一个基础的 yd-tab-bar 对象的节点
        createElementNode() {
            // #slot#let id = 'tabBar-' + (new Date()).getTime()
            return {
                id: 'tabBar-' + (new Date()).getTime(),
                // #slot#id,
                title: '底部导航',
                // 对应当前框架中的名称
                name: 'yd-tab-bar',
                // 官方文档中的名称
                realname: 'yd-tab-bar',
                props: this.baseProps,
                // 默认内容
                text: 'tab-bar',
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

export const ydTabBarItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.TabBarItem.props, {
		"link": buildYduiProps(null, null, "string", "导航链接"),
		"type": buildYduiProps([ "link", "a" ], "link", "string", "链接的类型，type='link'的link将会解析为路由，type='a'是普通<a>"),
		"tag": buildYduiProps(null, null, "string", "router-link的tag属性，type='link'时生效"),
		"title": buildYduiProps(null, null, "string", "导航标题"),
		"active": buildYduiProps(null, "false", "boolean", "是否激活当前选项卡"),
		"dot": buildYduiProps(null, "false", "boolean", "是否添加小红点")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydTabBarItem',
        // 这个是方便阅读定义的
        label: '底部导航项',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "-",
				"have": false,
				"desc": "内容"
			},
			{
				"slot": "badge",
				"have": false,
				"desc": "添加角标"
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
        // 生成一个基础的 yd-tab-bar-item 对象的节点
        createElementNode() {
            let id = 'tabBarItem-' + (new Date()).getTime()
            return {
                // #normal#id: 'tabBarItem-' + (new Date()).getTime(),
                id,
                title: '底部导航项',
                // 对应当前框架中的名称
                name: 'yd-tab-bar-item',
                // 官方文档中的名称
                realname: 'yd-tab-bar-item',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'tab-bar-item',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
