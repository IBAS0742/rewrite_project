import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydGridsGroup = (function () {
    const props = Object.assign({}, Vue.temp.ydui.GridsGroup.props, {
		"rows": buildYduiProps([ "2", " 3", " 4", " 5" ], "4", "number", "每行显示列数"),
		"title": buildYduiProps(null, null, "string", "每组表格标题"),
		"item-height": buildYduiProps(null, "0", "string && (px或rem)", "设置 yd-grids-item 的高度（防止页面内容高度不一致时导致页面错乱），默认0为不限制")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydGridsGroup',
        // 这个是方便阅读定义的
        label: '网格',
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
        // 生成一个基础的 yd-grids-group 对象的节点
        createElementNode() {
            // #slot#let id = 'gridsGroup-' + (new Date()).getTime()
            return {
                id: 'gridsGroup-' + (new Date()).getTime(),
                // #slot#id,
                title: '网格',
                // 对应当前框架中的名称
                name: 'yd-grids-group',
                // 官方文档中的名称
                realname: 'yd-grids-group',
                props: this.baseProps,
                // 默认内容
                text: 'grids-group',
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

export const ydGridsItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.GridsItem.props, {
		"type": buildYduiProps([ "link", " a" ], "link", "string", "渲染后dom的类型，type='link'将会解析为路由，type='a'则解析为普通<a>"),
		"link": buildYduiProps(null, null, "string || object", "跳转url")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydGridsItem',
        // 这个是方便阅读定义的
        label: '网格项',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "icon",
				"have": false,
				"desc": "图标内容"
			},
			{
				"slot": "text",
				"have": false,
				"desc": "文字内容"
			},
			{
				"slot": "else",
				"have": false,
				"desc": "其他内容，该slot没有样式限制"
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
        // 生成一个基础的 yd-grids-item 对象的节点
        createElementNode() {
            let id = 'gridsItem-' + (new Date()).getTime()
            return {
                // #normal#id: 'gridsItem-' + (new Date()).getTime(),
                id,
                title: '网格项',
                // 对应当前框架中的名称
                name: 'yd-grids-item',
                // 官方文档中的名称
                realname: 'yd-grids-item',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'grids-item',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
