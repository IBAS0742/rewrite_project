import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydSpinner = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.Spinner.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.Spinner.props[i]
    }
    props = Object.assign({}, props, {
		"unit": buildYduiProps(null, "1", "number", "累计值"),
		"max": buildYduiProps(null, null, "number", "最大值"),
		"min": buildYduiProps(null, "累计值", "number", "最小值（不设置最小值，则默认为累计值）"),
		"readonly": buildYduiProps(null, "false", "boolean", "是否只读"),
		"longpress": buildYduiProps(null, "true", "boolean", "是否支持长按快速加减"),
		"width": buildYduiProps(null, "2rem（100px）", "string && (px或rem)", "总宽度"),
		"height": buildYduiProps(null, ".6rem（30px）", "string && (px或rem)", "总高度")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydSpinner',
        // 这个是方便阅读定义的
        label: '数字加减',
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
        // 生成一个基础的 yd-spinner 对象的节点
        createElementNode() {
            // #slot#let id = 'spinner-' + (new Date()).getTime()
            return {
                id: 'spinner-' + (new Date()).getTime(),
                // #slot#id,
                title: '数字加减',
                // 对应当前框架中的名称
                name: 'yd-spinner',
                // 官方文档中的名称
                realname: 'yd-spinner',
                props: this.baseProps,
                // 默认内容
                text: 'spinner',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
