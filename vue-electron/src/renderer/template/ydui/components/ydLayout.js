import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydLayout = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.Layout.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.Layout.props[i]
    }
    props = Object.assign({}, props, {
		"link": buildYduiProps(null, null, "string", "yd-navbar的跳转链接"),
		"title": buildYduiProps(null, null, "string", "yd-navbar的标题"),
		"show-navbar": buildYduiProps(null, "true", "boolean", "是否显示yd-navbar")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydLayout',
        // 这个是方便阅读定义的
        label: '布局',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "navbar",
				"have": false,
				"desc": "页头内容"
			},
			{
				"slot": "top",
				"have": false,
				"desc": "上部内容"
			},
			{
				"slot": "-",
				"have": false,
				"desc": "主体内容"
			},
			{
				"slot": "bottom",
				"have": false,
				"desc": "下部内容"
			},
			{
				"slot": "tabbar",
				"have": false,
				"desc": "页尾内容"
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
        // 生成一个基础的 yd-layout 对象的节点
        createElementNode() {
            let id = 'layout-' + (new Date()).getTime()
            return {
                // #normal#id: 'layout-' + (new Date()).getTime(),
                id,
                title: '布局',
                // 对应当前框架中的名称
                name: 'yd-layout',
                // 官方文档中的名称
                realname: 'yd-layout',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'layout',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
