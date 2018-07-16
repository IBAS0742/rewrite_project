import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydPreview = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Preview.props, {
		"buttons": buildYduiProps(null, null, "array", "按钮们：                [{                label: string, //文字                link: [string, object], //跳转链接，当为object时，为router-link                color: string, //文字颜色                click: function, //点击回调函数            }]")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydPreview',
        // 这个是方便阅读定义的
        label: '表单预览',
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
        // 生成一个基础的 yd-preview 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'preview-' + (new Date()).getTime()
            return {
                id: 'preview-' + (new Date()).getTime(),
                // #slot#id,
                title: '表单预览',
                // 对应当前框架中的名称
                name: 'yd-preview',
                // 官方文档中的名称
                realname: 'yd-preview',
                props: this.baseProps,
                // 默认内容
                text: 'preview',
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

export const ydPreviewHeader = (function () {
    const props = Object.assign({}, Vue.temp.ydui.PreviewHeader.props, {

    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydPreviewHeader',
        // 这个是方便阅读定义的
        label: '表单预览头部',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "left",
				"have": false,
				"desc": "左侧内容"
			},
			{
				"slot": "right",
				"have": false,
				"desc": "右侧内容"
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
        // 生成一个基础的 yd-preview-header 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            let id = 'previewHeader-' + (new Date()).getTime()
            return {
                // #normal#id: 'previewHeader-' + (new Date()).getTime(),
                id,
                title: '表单预览头部',
                // 对应当前框架中的名称
                name: 'yd-preview-header',
                // 官方文档中的名称
                realname: 'yd-preview-header',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'preview-header',
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

export const ydPreviewItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.PreviewItem.props, {

    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydPreviewItem',
        // 这个是方便阅读定义的
        label: '表单预览内容',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "left",
				"have": false,
				"desc": "左侧内容"
			},
			{
				"slot": "right",
				"have": false,
				"desc": "右侧内容"
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
        // 生成一个基础的 yd-preview-item 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            let id = 'previewItem-' + (new Date()).getTime()
            return {
                // #normal#id: 'previewItem-' + (new Date()).getTime(),
                id,
                title: '表单预览内容',
                // 对应当前框架中的名称
                name: 'yd-preview-item',
                // 官方文档中的名称
                realname: 'yd-preview-item',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'preview-item',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
