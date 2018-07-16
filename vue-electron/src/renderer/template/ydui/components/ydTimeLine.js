import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydTimeLine = (function () {
    const props = Object.assign({}, Vue.temp.ydui.TimeLine.props, {

    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydTimeLine',
        // 这个是方便阅读定义的
        label: '时间轴',
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
        // 生成一个基础的 yd-time-line 对象的节点
        createElementNode() {
            // #slot#let id = 'timeLine-' + (new Date()).getTime()
            return {
                id: 'timeLine-' + (new Date()).getTime(),
                // #slot#id,
                title: '时间轴',
                // 对应当前框架中的名称
                name: 'yd-time-line',
                // 官方文档中的名称
                realname: 'yd-time-line',
                props: this.baseProps,
                // 默认内容
                text: 'time-line',
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

export const ydTimeLineItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.TimeLineItem.props, {

    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydTimeLineItem',
        // 这个是方便阅读定义的
        label: '时间轴项',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "-",
				"have": false,
				"desc": "内容"
			},
			{
				"slot": "icon",
				"have": false,
				"desc": "自定义图标"
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
        // 生成一个基础的 yd-time-line-item 对象的节点
        createElementNode() {
            let id = 'timeLineItem-' + (new Date()).getTime()
            return {
                // #normal#id: 'timeLineItem-' + (new Date()).getTime(),
                id,
                title: '时间轴项',
                // 对应当前框架中的名称
                name: 'yd-time-line-item',
                // 官方文档中的名称
                realname: 'yd-time-line-item',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'time-line-item',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
