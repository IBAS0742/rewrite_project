import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydRate = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.Rate.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.Rate.props[i]
    }
    props = Object.assign({}, props, {
		"count": buildYduiProps(null, "5", "number", "星星个数"),
		"size": buildYduiProps(null, ".5rem（25px）", "string", "图标大小"),
		"color": buildYduiProps(null, null, "string", "初始颜色 && 常规颜色值"),
		"active-color": buildYduiProps(null, null, "string && 常规颜色值", "选中样式"),
		"show-text": buildYduiProps(null, null, "array", "提示文字数组"),
		"readonly": buildYduiProps(null, "false", "boolean", "是否只读"),
		"padding": buildYduiProps(null, ".06rem（3px）", "string", "两颗星星间的距离")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydRate',
        // 这个是方便阅读定义的
        label: '评分',
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
        // 生成一个基础的 yd-rate 对象的节点
        createElementNode() {
            // #slot#let id = 'rate-' + (new Date()).getTime()
            return {
                id: 'rate-' + (new Date()).getTime(),
                // #slot#id,
                title: '评分',
                // 对应当前框架中的名称
                name: 'yd-rate',
                // 官方文档中的名称
                realname: 'yd-rate',
                props: this.baseProps,
                // 默认内容
                text: 'rate',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
