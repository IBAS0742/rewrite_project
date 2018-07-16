import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydProgressBar = (function () {
    const props = Object.assign({}, Vue.temp.ydui.ProgressBar.props, {
		"type": buildYduiProps([ "circle", "line" ], "circle", "string", "进度条类型"),
		"progress": buildYduiProps(null, "0", "float", "进度所占百分比（取值范围0-1）"),
		"fill-color": buildYduiProps(null, null, "string && 常规颜色值", "进度条背景颜色，线形进度条无效"),
		"stroke-width": buildYduiProps(null, null, "number", "进度条描边厚度，取值为正数，svg中stroke-width属性值"),
		"stroke-color": buildYduiProps(null, null, "string && 常规颜色值", "进度条颜色"),
		"trail-width": buildYduiProps(null, null, "number", "高亮进度条描边厚度，不填则取stroke-width的值"),
		"trail-color": buildYduiProps(null, null, "string && 常规颜色值", "高亮进度条颜色")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydProgressBar',
        // 这个是方便阅读定义的
        label: '进度条',
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
        // 生成一个基础的 yd-progress-bar 对象的节点
        createElementNode() {
            // #slot#let id = 'progressBar-' + (new Date()).getTime()
            return {
                id: 'progressBar-' + (new Date()).getTime(),
                // #slot#id,
                title: '进度条',
                // 对应当前框架中的名称
                name: 'yd-progress-bar',
                // 官方文档中的名称
                realname: 'yd-progress-bar',
                props: this.baseProps,
                // 默认内容
                text: 'progress-bar',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
