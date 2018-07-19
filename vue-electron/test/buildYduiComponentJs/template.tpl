
// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const yd#YDUI-Name# = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.#YDUI-Name#.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.#YDUI-Name#.props[i]
    }
    props = Object.assign({}, props, {
        // #props#
    })
    for (let i in props) {
        if (props[i].type.constructor.name !== 'String') {
            props[i] = buildYduiProps(null,null,'string',"")
        }
    }
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'yd#YDUI-Name#',
        // 这个是方便阅读定义的
        label: '#YDUI-chi-name#',
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
        // 生成一个基础的 yd-#YDUI-name# 对象的节点
        createElementNode() {
            // #slot#let id = '#YDUI-tiny-name#-' + (new Date()).getTime()
            return {
                // #normal#id: '#YDUI-tiny-name#-' + (new Date()).getTime(),
                // #slot#id,
                title: '#YDUI-chi-name#',
                // 对应当前框架中的名称
                name: 'yd-#YDUI-name#',
                // 官方文档中的名称
                realname: 'yd-#YDUI-name#',
                props: this.baseProps,
                // 默认内容
                // #normal#text: '#YDUI-name#',
                type: 'el',
                // #normal#children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
