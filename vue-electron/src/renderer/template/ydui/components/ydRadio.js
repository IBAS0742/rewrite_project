import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydRadio = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.Radio.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.Radio.props[i]
    }
    props = Object.assign({}, props, {
		"color": buildYduiProps(null, "#4cd864", "string && 常规颜色值", "图标颜色"),
		"size": buildYduiProps(null, "20", "number", "图标大小，默认为px")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydRadio',
        // 这个是方便阅读定义的
        label: '单选',
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
        // 生成一个基础的 yd-radio 对象的节点
        createElementNode() {
            // #slot#let id = 'radio-' + (new Date()).getTime()
            return {
                id: 'radio-' + (new Date()).getTime(),
                // #slot#id,
                title: '单选',
                // 对应当前框架中的名称
                name: 'yd-radio',
                // 官方文档中的名称
                realname: 'yd-radio',
                props: this.baseProps,
                // 默认内容
                text: 'radio',
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

export const ydRadioGroup = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.RadioGroup.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.RadioGroup.props[i]
    }
    props = Object.assign({}, props, {
		"val": buildYduiProps(null, null, "string || number", "值"),
		"disabled": buildYduiProps(null, "false", "boolean", "是否禁用")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydRadioGroup',
        // 这个是方便阅读定义的
        label: '单选组',
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
        // 生成一个基础的 yd-radio-group 对象的节点
        createElementNode() {
            // #slot#let id = 'radioGroup-' + (new Date()).getTime()
            return {
                id: 'radioGroup-' + (new Date()).getTime(),
                // #slot#id,
                title: '单选组',
                // 对应当前框架中的名称
                name: 'yd-radio-group',
                // 官方文档中的名称
                realname: 'yd-radio-group',
                props: this.baseProps,
                // 默认内容
                text: 'radio-group',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
