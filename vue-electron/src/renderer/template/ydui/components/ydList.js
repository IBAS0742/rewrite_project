import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydListTheme = (function () {
    const props = Object.assign({}, Vue.temp.ydui.ListTheme.props, {
        "theme": buildYduiProps([ "1", " 2", " 3", " 4", " 5" ], 3, "string || number", "列表主题样式")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydListTheme',
        // 这个是方便阅读定义的
        label: '列表',
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
        // 生成一个基础的 yd-list 对象的节点
        createElementNode() {
            // #slot#let id = 'list-' + (new Date()).getTime()
            return {
                id: 'list-' + (new Date()).getTime(),
                // #slot#id,
                title: '列表',
                // 对应当前框架中的名称
                name: 'yd-list-theme',
                // 官方文档中的名称
                realname: 'yd-list',
                props: this.baseProps,
                // 默认内容
                // text: 'list',
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

export const ydListItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.ListItem.props, {
        "type": buildYduiProps([ "link", "a", "div" ], "a", "string", '列表的类型，type="link"的href将会解析为路由，type="a"是普通<a>'),
        "href": buildYduiProps(null, null, "string || object", "跳转链接")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydListItem',
        // 这个是方便阅读定义的
        label: '列表项',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "img",
				"have": false,
				"desc": ""
			},
			{
				"slot": "title",
				"have": false,
				"desc": ""
			},
			{
				"slot": "other",
				"have": false,
				"desc": ""
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
        // 生成一个基础的 yd-list-item 对象的节点
        createElementNode() {
            let id = 'list-item-' + (new Date()).getTime()
            return {
                // #normal#id: 'list-item-' + (new Date()).getTime(),
                id,
                title: '列表项',
                // 对应当前框架中的名称
                name: 'yd-list-item',
                // 官方文档中的名称
                realname: 'yd-list-item',
                props: this.baseProps,
                // 默认内容
                // text: 'list-item',
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

export const ydListOther = (function () {
    const props = Object.assign({}, Vue.temp.ydui.ListOther.props, {
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydListOther',
        // 这个是方便阅读定义的
        label: '列表附件',
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
        // 生成一个基础的 yd-list-other 对象的节点
        createElementNode() {
            // #slot#let id = 'list-o-' + (new Date()).getTime()
            return {
                id: 'list-o-' + (new Date()).getTime(),
                // #slot#id,
                title: '列表附件',
                // 对应当前框架中的名称
                name: 'yd-list-other',
                // 官方文档中的名称
                realname: 'yd-list-other',
                props: this.baseProps,
                // 默认内容
                text: 'list-other',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
