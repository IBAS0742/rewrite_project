import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydTextArea = (function () {
    const props = Object.assign({}, Vue.temp.ydui.TextArea.props, {
		"maxlength": buildYduiProps(null, null, "number", "最大输入字数"),
		"placeholder": buildYduiProps(null, null, "string", "初始提示文字"),
		"readonly": buildYduiProps(null, "false", "boolean", "是否只读"),
		"show-counter": buildYduiProps(null, "true", "boolean", "是否显示计数器"),
		"callback": buildYduiProps(null, null, "function", "更改后调用的方法")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydTextArea',
        // 这个是方便阅读定义的
        label: '多行文本框',
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
        // 生成一个基础的 yd-text-area 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'textArea-' + (new Date()).getTime()
            return {
                id: 'textArea-' + (new Date()).getTime(),
                // #slot#id,
                title: '多行文本框',
                // 对应当前框架中的名称
                name: 'yd-text-area',
                // 官方文档中的名称
                realname: 'yd-text-area',
                props: this.baseProps,
                // 默认内容
                text: 'text-area',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
