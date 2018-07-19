import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydPopup = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.Popup.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.Popup.props[i]
    }
    props = Object.assign({}, props, {
		"position": buildYduiProps([ "bottom", " center", " left", " right" ], "bottom", "string", "显示位置"),
		"height": buildYduiProps(null, "auto", "string", "高度"),
		"width": buildYduiProps(null, "auto", "string", "宽度"),
		"close-on-masker": buildYduiProps(null, "true", "boolean", "是否点击遮罩关闭弹窗"),
		"masker-opacity": buildYduiProps(null, ".5", "number", "遮罩层透明度（v1.2.1新增）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydPopup',
        // 这个是方便阅读定义的
        label: '弹窗',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "-",
				"have": false,
				"desc": "内容（超出容器将出现滚动条）"
			},
			{
				"slot": "top",
				"have": false,
				"desc": "顶部内容（仅在position != \"center\"中生效）"
			},
			{
				"slot": "bottom",
				"have": false,
				"desc": "底部内容（仅在position != \"center\"中生效）"
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
        // 生成一个基础的 yd-popup 对象的节点
        createElementNode() {
            let id = 'popup-' + (new Date()).getTime()
            return {
                // #normal#id: 'popup-' + (new Date()).getTime(),
                id,
                title: '弹窗',
                // 对应当前框架中的名称
                name: 'yd-popup',
                // 官方文档中的名称
                realname: 'yd-popup',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'popup',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
