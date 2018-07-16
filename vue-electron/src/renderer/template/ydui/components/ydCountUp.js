import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydCountUp = (function () {
    const props = Object.assign({}, Vue.temp.ydui.CountUp.props, {
		"start": buildYduiProps(null, "true", "boolean", "是否立即开始动画"),
		"startnum": buildYduiProps(null, null, "number", "开始数值"),
		"endnum": buildYduiProps(null, null, "number", "结束数值"),
		"decimals": buildYduiProps(null, "0", "number", "小数的位数"),
		"duration": buildYduiProps(null, "2", "number", "动画执行时间（秒）"),
		"use-easing": buildYduiProps(null, "false", "boolean", "是否使用easy动画效果"),
		"separator": buildYduiProps(null, null, "string", "每隔三位的分隔符"),
		"prefix": buildYduiProps(null, null, "string", "数字前头标识"),
		"suffix": buildYduiProps(null, null, "string", "数字末尾标识"),
		"callback": buildYduiProps(null, null, "function", "动画执行完毕调用方法")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCountUp',
        // 这个是方便阅读定义的
        label: '数字动画',
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
        // 生成一个基础的 yd-count-up 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'countUp-' + (new Date()).getTime()
            return {
                id: 'countUp-' + (new Date()).getTime(),
                // #slot#id,
                title: '数字动画',
                // 对应当前框架中的名称
                name: 'yd-count-up',
                // 官方文档中的名称
                realname: 'yd-count-up',
                props: this.baseProps,
                // 默认内容
                text: 'count-up',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
