import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydCellGroup = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.CellGroup.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.CellGroup.props[i]
    }
    props = Object.assign({}, props, {
		"title": buildYduiProps(null, null, "string", "每组列表的标题")
    })
    for (let i in props) {
        if (props[i].type.constructor.name !== 'String') {
            props[i] = buildYduiProps(null,null,'string',"")
        }
    }
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCellGroup',
        // 这个是方便阅读定义的
        label: '表单',
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
        // 生成一个基础的 yd-cell-group 对象的节点
        createElementNode() {
            // #slot#let id = 'cellGroup-' + (new Date()).getTime()
            return {
                id: 'cellGroup-' + (new Date()).getTime(),
                // #slot#id,
                title: '表单',
                // 对应当前框架中的名称
                name: 'yd-cell-group',
                // 官方文档中的名称
                realname: 'yd-cell-group',
                props: this.baseProps,
                // 默认内容
                text: 'cell-group',
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

export const ydCellItem = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.CellItem.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.CellItem.props[i]
    }
    props = Object.assign({}, props, {
		"type": buildYduiProps([ "link", "a", "label", "div", "checkbx", "radio" ], "div", "string", "列表的类型，type='link'将会解析为路由，type='a'则解析为普通<a>"),
		"arrow": buildYduiProps(null, "false", "boolean", "是否带右向箭头"),
		"href": buildYduiProps(null, null, "string || object", "跳转链接，只在type='link'时生效")
    })
    for (let i in props) {
        if (props[i].type.constructor.name !== 'String') {
            props[i] = buildYduiProps(null,null,'string',"")
        }
    }
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCellItem',
        // 这个是方便阅读定义的
        label: '表单项',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "icon",
				"have": false,
				"desc": "列表的图标"
			},
			{
				"slot": "left",
				"have": false,
				"desc": "列表左侧内容"
			},
			{
				"slot": "right",
				"have": false,
				"desc": "列表右侧内容"
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
        // 生成一个基础的 yd-cell-item 对象的节点
        createElementNode() {
            let id = 'cellItem-' + (new Date()).getTime()
            return {
                // #normal#id: 'cellItem-' + (new Date()).getTime(),
                id,
                title: '表单项',
                // 对应当前框架中的名称
                name: 'yd-cell-item',
                // 官方文档中的名称
                realname: 'yd-cell-item',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'cell-item',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
