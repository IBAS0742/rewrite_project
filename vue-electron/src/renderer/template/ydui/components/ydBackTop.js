import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydBackTop = (function () {
    const props = Object.assign({}, Vue.temp.ydui.BackTop.props, {

    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydBackTop',
        // 这个是方便阅读定义的
        label: '返回顶部',
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
        // 生成一个基础的 yd-back-top 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'backTop-' + (new Date()).getTime()
            return {
                id: 'backTop-' + (new Date()).getTime(),
                // #slot#id,
                title: '返回顶部',
                // 对应当前框架中的名称
                name: 'yd-back-top',
                // 官方文档中的名称
                realname: 'yd-back-top',
                props: this.baseProps,
                // 默认内容
                text: 'back-top',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
