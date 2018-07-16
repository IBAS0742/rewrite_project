import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydRollNotice = (function () {
    const props = Object.assign({}, Vue.temp.ydui.RollNotice.props, {
		"height": buildYduiProps(null, "30", "number", "高度（px）"),
		"speed": buildYduiProps(null, "500", "number", "切换速度（毫秒）"),
		"autoplay": buildYduiProps(null, "3000", "number", "自动播放时间（毫秒）"),
		"align": buildYduiProps([ "left", " center", " right" ], "left", "string", "对齐方式"),
		"direction": buildYduiProps([ "up", " down" ], "up", "string", "滚动方向")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydRollNotice',
        // 这个是方便阅读定义的
        label: '滚动公告',
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
        // 生成一个基础的 yd-roll-notice 对象的节点
        createElementNode() {
            // #slot#let id = 'rollNotice-' + (new Date()).getTime()
            return {
                id: 'rollNotice-' + (new Date()).getTime(),
                // #slot#id,
                title: '滚动公告',
                // 对应当前框架中的名称
                name: 'yd-roll-notice',
                // 官方文档中的名称
                realname: 'yd-roll-notice',
                props: this.baseProps,
                // 默认内容
                text: 'roll-notice',
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

export const ydRollNoticeItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.RollNoticeItem.props, {

    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydRollNoticeItem',
        // 这个是方便阅读定义的
        label: '滚动公告内容',
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
        // 生成一个基础的 yd-roll-notice-item 对象的节点
        createElementNode() {
            let id = 'rollNoticeItem-' + (new Date()).getTime()
            return {
                // #normal#id: 'rollNoticeItem-' + (new Date()).getTime(),
                id,
                title: '滚动公告内容',
                // 对应当前框架中的名称
                name: 'yd-roll-notice-item',
                // 官方文档中的名称
                realname: 'yd-roll-notice-item',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'roll-notice-item',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
