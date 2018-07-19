import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydFlexBox = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.FlexBox.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.FlexBox.props[i]
    }
    props = Object.assign({}, props, {
		"direction": buildYduiProps([ "horizontal", " vertical" ], "horizontal", "string", "布局方向（水平和垂直）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydFlexBox',
        // 这个是方便阅读定义的
        label: 'flex 布局',
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
        // 生成一个基础的 yd-flex-box 对象的节点
        createElementNode() {
            // #slot#let id = 'flexBox-' + (new Date()).getTime()
            return {
                id: 'flexBox-' + (new Date()).getTime(),
                // #slot#id,
                title: 'flex 布局',
                // 对应当前框架中的名称
                name: 'yd-flex-box',
                // 官方文档中的名称
                realname: 'yd-flex-box',
                props: this.baseProps,
                // 默认内容
                text: 'flex-box',
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

export const ydFlexBoxItem = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.FlexBoxItem.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.FlexBoxItem.props[i]
    }
    props = Object.assign({}, props, {
		"align": buildYduiProps([ "top", " center", " bottom" ], "center", "string", "垂直对齐方式")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydFlexBoxItem',
        // 这个是方便阅读定义的
        label: 'flex 布局项',
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
        // 生成一个基础的 yd-flex-box-item 对象的节点
        createElementNode() {
            // #slot#let id = 'flexBoxItem-' + (new Date()).getTime()
            return {
                id: 'flexBoxItem-' + (new Date()).getTime(),
                // #slot#id,
                title: 'flex 布局项',
                // 对应当前框架中的名称
                name: 'yd-flex-box-item',
                // 官方文档中的名称
                realname: 'yd-flex-box-item',
                props: this.baseProps,
                // 默认内容
                text: 'flex-box-item',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
