import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydCountDown = (function () {
    const props = Object.assign({}, Vue.temp.ydui.CountDown.props, {
		"time": buildYduiProps(null, null, "string", "结束时间点，时间格式"),
		"format": buildYduiProps(null, "{%d}天{%h}时{%m}分{%s}秒", "string", "模板参数"),
		"timetype": buildYduiProps([ "datetime", " second", "" ], "datetime", "string", "传入时间类型，datetime：结束时间（时间格式），second：剩余时间（秒）"),
		"done-text": buildYduiProps(null, "已结束", "string", "倒计时结束后显示文字"),
		"callback": buildYduiProps(null, null, "function", "倒计时结束后调用方法")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCountDown',
        // 这个是方便阅读定义的
        label: '时间倒计时',
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
        // 生成一个基础的 yd-count-down 对象的节点
        createElementNode() {
            // #slot#let id = 'countDown-' + (new Date()).getTime()
            return {
                id: 'countDown-' + (new Date()).getTime(),
                // #slot#id,
                title: '时间倒计时',
                // 对应当前框架中的名称
                name: 'yd-count-down',
                // 官方文档中的名称
                realname: 'yd-count-down',
                props: this.baseProps,
                // 默认内容
                text: 'count-down',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
