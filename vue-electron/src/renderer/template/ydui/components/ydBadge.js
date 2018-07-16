import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydBadge = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Badge.props, {
		"type": buildYduiProps([ "primary", " danger", " warning", " hollow" ], "", "string", "角标类型[默认为灰底白字]"),
		"shape": buildYduiProps([ "circle", " square" ], "circle", "string", "角标形状（圆形和方形）"),
		"color": buildYduiProps(null, null, "string && 常规颜色值", "角标颜色"),
		"bgcolor": buildYduiProps(null, null, "string && 常规颜色值", "角标背景色")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydBadge',
        // 这个是方便阅读定义的
        label: '角标',
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
        // 生成一个基础的 yd-badge 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'badge-' + (new Date()).getTime()
            return {
                id: 'badge-' + (new Date()).getTime(),
                // #slot#id,
                title: '角标',
                // 对应当前框架中的名称
                name: 'yd-badge',
                // 官方文档中的名称
                realname: 'yd-badge',
                props: this.baseProps,
                // 默认内容
                text: 'badge',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
