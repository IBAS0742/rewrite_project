import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydSwitch = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Switch.props, {
		"disabled": buildYduiProps(null, "false", "boolean", "是否禁用"),
		"color": buildYduiProps(null, "#4cd864", "string && 常规颜色值", "颜色"),
		"true-value": buildYduiProps(null, "true", "string, number, boolean", "选中时的值"),
		"false-value": buildYduiProps(null, "false", "string, number, boolean", "选中时的值")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydSwitch',
        // 这个是方便阅读定义的
        label: '开关',
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
        // 生成一个基础的 yd-switch 对象的节点
        createElementNode() {
            // #slot#let id = 'switch-' + (new Date()).getTime()
            return {
                id: 'switch-' + (new Date()).getTime(),
                // #slot#id,
                title: '开关',
                // 对应当前框架中的名称
                name: 'yd-switch',
                // 官方文档中的名称
                realname: 'yd-switch',
                props: this.baseProps,
                // 默认内容
                text: 'switch',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
