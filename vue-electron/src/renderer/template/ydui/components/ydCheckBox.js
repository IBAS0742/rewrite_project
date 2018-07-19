import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydCheckBox = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.CheckBox.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.CheckBox.props[i]
    }
    props = Object.assign({}, props, {
		"val": buildYduiProps(null, null, "string || number || boolean", "值"),
		"disabled": buildYduiProps(null, "false", "boolean", "是否禁用"),
		"color": buildYduiProps(null, "#4cd864", "string && 常规颜色值", "图标颜色【单个使用才会生效】"),
		"size": buildYduiProps(null, "20", "number", "图标大小【单个使用才会生效】"),
		"shape": buildYduiProps([ "square", " circle" ], "square", "string", "图标形状，默认方形"),
		"change": buildYduiProps(null, null, "function", "更改调用方法"),
		"true-value": buildYduiProps(null, "true", "string, number, boolean", "选中时的值"),
		"false-value": buildYduiProps(null, "false", "string, number, boolean", "选中时的值")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCheckBox',
        // 这个是方便阅读定义的
        label: '多选',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [],
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            return p
        })(props),
        // 生成一个基础的 yd-check-box 对象的节点
        createElementNode() {
            let id = 'checkBox-' + (new Date()).getTime()
            return {
                // #normal#id: 'checkBox-' + (new Date()).getTime(),
                id,
                title: '多选',
                // 对应当前框架中的名称
                name: 'yd-check-box',
                // 官方文档中的名称
                realname: 'yd-check-box',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'check-box',
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

export const ydCheckBoxGroup = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.CheckBoxGroup.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.CheckBoxGroup.props[i]
    }
    props = Object.assign({}, props, {
		"color": buildYduiProps(null, "#4cd864", "string && 常规颜色值", "图标颜色"),
		"size": buildYduiProps(null, "20", "number", "图标大小，默认为px")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCheckBoxGroup',
        // 这个是方便阅读定义的
        label: '多选组',
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
        // 生成一个基础的 yd-check-box-group 对象的节点
        createElementNode() {
            // #slot#let id = 'checkBoxGroup-' + (new Date()).getTime()
            return {
                id: 'checkBoxGroup-' + (new Date()).getTime(),
                // #slot#id,
                title: '多选组',
                // 对应当前框架中的名称
                name: 'yd-check-box-group',
                // 官方文档中的名称
                realname: 'yd-check-box-group',
                props: this.baseProps,
                // 默认内容
                text: 'check-box-group',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
