import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydLightBox = (function () {
    const props = Object.assign({}, Vue.temp.ydui.LightBox.props, {
		"num": buildYduiProps(null, "0", "number", "图片个数（异步数据需指定）"),
		"close-text": buildYduiProps(null, "关闭", "string", "关闭提示文字")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydLightBox',
        // 这个是方便阅读定义的
        label: '图片预览',
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
        // 生成一个基础的 yd-light-box 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'lightBox-' + (new Date()).getTime()
            return {
                id: 'lightBox-' + (new Date()).getTime(),
                // #slot#id,
                title: '图片预览',
                // 对应当前框架中的名称
                name: 'yd-light-box',
                // 官方文档中的名称
                realname: 'yd-light-box',
                props: this.baseProps,
                // 默认内容
                text: 'light-box',
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

export const ydLightBoxImg = (function () {
    const props = Object.assign({}, Vue.temp.ydui.LightBoxImg.props, {
		"src": buildYduiProps(null, null, "string", "图片路径"),
		"original": buildYduiProps(null, null, "string", "原图路径（不指定将使用src）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydLightBoxImg',
        // 这个是方便阅读定义的
        label: '图片预览-图片',
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
        // 生成一个基础的 yd-light-box-img 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'lightBoxImg-' + (new Date()).getTime()
            return {
                id: 'lightBoxImg-' + (new Date()).getTime(),
                // #slot#id,
                title: '图片预览-图片',
                // 对应当前框架中的名称
                name: 'yd-light-box-img',
                // 官方文档中的名称
                realname: 'yd-light-box-img',
                props: this.baseProps,
                // 默认内容
                text: 'light-box-img',
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

export const ydLightBoxTxt = (function () {
    const props = Object.assign({}, Vue.temp.ydui.LightBoxTxt.props, {

    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydLightBoxTxt',
        // 这个是方便阅读定义的
        label: '图片预览-文字',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "top",
				"have": false,
				"desc": "上部内容"
			},
			{
				"slot": "content",
				"have": false,
				"desc": "主体内容（超出一定高度，将出现滚动条）"
			},
			{
				"slot": "bottom",
				"have": false,
				"desc": "底部内容"
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
        // 生成一个基础的 yd-light-box-txt 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            let id = 'lightBoxTxt-' + (new Date()).getTime()
            return {
                // #normal#id: 'lightBoxTxt-' + (new Date()).getTime(),
                id,
                title: '图片预览-文字',
                // 对应当前框架中的名称
                name: 'yd-light-box-txt',
                // 官方文档中的名称
                realname: 'yd-light-box-txt',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'light-box-txt',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
