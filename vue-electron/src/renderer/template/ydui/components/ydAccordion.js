import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydAccordion = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Accordion.props, {
		"accordion": buildYduiProps(null, "false", "boolean", "是否可以同时展开多个面板")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydAccordion',
        // 这个是方便阅读定义的
        label: '折叠面板',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [],
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            console.log(props)
            return p
        })(props),
        // 生成一个基础的 yd-accordion 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            let id = 'accordion-' + (new Date()).getTime()
            return {
                // #normal#id: 'accordion-' + (new Date()).getTime(),
                id,
                title: '折叠面板',
                // 对应当前框架中的名称
                name: 'yd-accordion',
                // 官方文档中的名称
                realname: 'yd-accordion',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'accordion',
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

export const ydAccordionItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.AccordionItem.props, {
		"title": buildYduiProps(null, null, "string", "标题"),
		"open": buildYduiProps(null, "false", "boolean", "是否默认展开面板"),
		"auto": buildYduiProps(null, "true", "boolean", "是否自动展开折叠参数")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydAccordionItem',
        // 这个是方便阅读定义的
        label: '折叠面板内容',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "-",
				"have": false,
				"desc": "内容"
			},
			{
				"slot": "title",
				"have": false,
				"desc": "标题内容（可自定义颜色，放置图标等等）"
			},
			{
				"slot": "icon",
				"have": false,
				"desc": "没有事件响应的标题图标内容（位于“标题内容”前面）"
			},
			{
				"slot": "txt",
				"have": false,
				"desc": "没有事件响应的其他标题内容（位于“标题内容”后面）"
			}
		],
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            console.log(props)
            return p
        })(props),
        // 生成一个基础的 yd-accordion-item 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            let id = 'accordionItem-' + (new Date()).getTime()
            return {
                // #normal#id: 'accordionItem-' + (new Date()).getTime(),
                id,
                title: '折叠面板内容',
                // 对应当前框架中的名称
                name: 'yd-accordion-item',
                // 官方文档中的名称
                realname: 'yd-accordion-item',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'accordion-item',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
