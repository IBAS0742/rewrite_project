import { buildYduiProps } from "../buildDefaultObject";

export const ydButton = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Button.props, {
        "type": buildYduiProps([ "primary", " danger", " warning", " hollow", " disabled" ], "primary", "string", "按钮类型"),
        "size": buildYduiProps([ "small", " large" ], "small", "string", "按钮大小"),
        "bgcolor": buildYduiProps(null, "", "string && 常规颜色值", "按钮背景颜色"),
        "color": buildYduiProps(null, "", "string && 常规颜色值", "按钮字体颜色"),
        "disabled": buildYduiProps(null, false, "boolean", "是否禁用"),
        "shape": buildYduiProps([ "square", " circle" ], "square", "string", "形状（分为直角square和大圆角circle）"),
        "action-type": buildYduiProps([ "button", " submit", " reset" ], "button", "string", "渲染后 <button> 的类型")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydButton',
        // 这个是方便阅读定义的
        label: '按钮',
        // 这里从 ydui 中获取 props 的定义
        props,
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            console.log(props)
            return p
        })(props),
        // 生成一个基础的 yd-button 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            return {
                id: 'btn-' + (new Date()).getTime(),
                title: '按钮',
                // 对应当前框架中的名称
                name: 'yd-button',
                // 官方文档中的名称
                realname: 'yd-button',
                props: this.baseProps,
                // 默认内容
                text: 'button',
                type: 'el',
                children: [],
                style: {}
            }
        }
    }
})()
