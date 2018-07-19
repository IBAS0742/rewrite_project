import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydInput = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.Input.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.Input.props[i]
    }
    props = Object.assign({}, props, {
		"name": buildYduiProps(null, null, "string", "表单name"),
		"type": buildYduiProps([ "text", " password", " email", " number", " tel", " datetime-local", " date", " time" ], "text", "string", "文本框类型"),
		"placeholder": buildYduiProps(null, null, "string", "描述输入字段"),
		"readonly": buildYduiProps(null, "false", "boolean", "是否只读"),
		"disabled": buildYduiProps(null, "false", "boolean", "是否禁用"),
		"regex": buildYduiProps(null, null, "string", "验证验证，可为内置正则（email/mobile/bankcard）或自定义正则"),
		"autocomplete": buildYduiProps(null, "off", "string", "自动完成"),
		"show-clear-icon": buildYduiProps(null, "true", "boolean", "是否显示清空内容图标"),
		"show-error-icon": buildYduiProps(null, "true", "boolean", "是否显示错误图标"),
		"show-success-icon": buildYduiProps(null, "true", "boolean", "是否显示正确图标"),
		"show-required-icon": buildYduiProps(null, "true", "boolean", "是否显示必填提示图标"),
		"required": buildYduiProps(null, "false", "boolean", "是否必填"),
		"max": buildYduiProps(null, null, "number", "最大输入字符"),
		"min": buildYduiProps(null, null, "number", "最少输入字符"),
		"on-focus": buildYduiProps(null, null, "function", "进入焦点事件"),
		"on-blur": buildYduiProps(null, null, "function", "离开焦点事件")
    })
    for (let i in props) {
        if (props[i].type.constructor.name !== 'String') {
            props[i] = buildYduiProps(null,null,'string',"")
        }
    }
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydInput',
        // 这个是方便阅读定义的
        label: '输入框',
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
        // 生成一个基础的 yd-input 对象的节点
        createElementNode() {
            // #slot#let id = 'input-' + (new Date()).getTime()
            return {
                id: 'input-' + (new Date()).getTime(),
                // #slot#id,
                title: '输入框',
                // 对应当前框架中的名称
                name: 'yd-input',
                // 官方文档中的名称
                realname: 'yd-input',
                props: this.baseProps,
                // 默认内容
                text: 'input',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
