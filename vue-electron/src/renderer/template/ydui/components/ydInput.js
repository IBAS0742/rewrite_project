import { buildYduiProps } from "../buildDefaultObject";

export const ydInput = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Button.props, {
        "name": buildYduiProps(null, "", "string", "表单name"),
        "type": buildYduiProps([ "text", " password", " email", " number", " tel", " datetime-local", " date", " time" ], "text", "string", "文本框类型"),
        "placeholder": buildYduiProps(null, 'placeholder', "string", "描述输入字段"),
        "readonly": buildYduiProps(null, false, "boolean", "是否只读"),
        "disabled": buildYduiProps(null, false, "boolean", "是否禁用"),
        "regex": buildYduiProps(null, null, "string", "验证验证，可为内置正则（email/mobile/bankcard）或自定义正则"),
        "autocomplete": buildYduiProps(null, "off", "string", "自动完成"),
        "show-clear-icon": buildYduiProps(null, true, "boolean", "是否显示清空内容图标"),
        "show-error-icon": buildYduiProps(null, true, "boolean", "是否显示错误图标"),
        "show-success-icon": buildYduiProps(null, true, "boolean", "是否显示正确图标"),
        "show-required-icon": buildYduiProps(null, true, "boolean", "是否显示必填提示图标"),
        "required": buildYduiProps(null, false, "boolean", "是否必填"),
        "max": buildYduiProps(null, 0, "number", "最大输入字符"),
        "min": buildYduiProps(null, 0, "number", "最少输入字符"),
        "on-focus": buildYduiProps(null, ()=>{}, "function", "进入焦点事件"),
        "on-blur": buildYduiProps(null, ()=>{}, "function", "离开焦点事件")
    })

    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydInput',
        // 这个是方便阅读定义的
        label: '输入框',
        // 这里从 ydui 中获取 props 的定义
        props,
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            return p
        })(props),
        // 生成一个基础的 yd-button 对象的节点
        createElementNode() {
            return {
                id: 'input-' + (new Date()).getTime(),
                title: '输入框',
                // 对应当前框架中的名称
                name: 'yd-input',
                // 官方文档中的名称
                realname: 'yd-input',
                props: this.baseProps,
                type: 'el',
                children: [],
                style: {}
            }
        }
    }
})()