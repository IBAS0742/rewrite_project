import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydStep = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.Step.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.Step.props[i]
    }
    props = Object.assign({}, props, {
		"theme": buildYduiProps([ "1", " 2" ], "1", "number", "样式主题"),
		"current": buildYduiProps(null, null, "number", "默认选中的项"),
		"current-color": buildYduiProps(null, "#0db78a", "string && 常规颜色值", "选中项的高亮颜色")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydStep',
        // 这个是方便阅读定义的
        label: '步骤条',
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
        // 生成一个基础的 yd-step 对象的节点
        createElementNode() {
            // #slot#let id = 'step-' + (new Date()).getTime()
            return {
                id: 'step-' + (new Date()).getTime(),
                // #slot#id,
                title: '步骤条',
                // 对应当前框架中的名称
                name: 'yd-step',
                // 官方文档中的名称
                realname: 'yd-step',
                props: this.baseProps,
                // 默认内容
                text: 'step',
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

export const ydStepItem = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.StepItem.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.StepItem.props[i]
    }
    props = Object.assign({}, props, {

    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydStepItem',
        // 这个是方便阅读定义的
        label: '步骤条项',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "top",
				"have": false,
				"desc": "步骤条上方的内容"
			},
			{
				"slot": "bottom",
				"have": false,
				"desc": "步骤条下方的内容"
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
        // 生成一个基础的 yd-step-item 对象的节点
        createElementNode() {
            let id = 'stepItem-' + (new Date()).getTime()
            return {
                // #normal#id: 'stepItem-' + (new Date()).getTime(),
                id,
                title: '步骤条项',
                // 对应当前框架中的名称
                name: 'yd-step-item',
                // 官方文档中的名称
                realname: 'yd-step-item',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'step-item',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
