import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydIcons = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Icons.props, {
        "name": buildYduiProps([ "见下表" ], 'footmark', "string", "图标名称[必填]"),
        "color": buildYduiProps(null, "#333", "string && 常规颜色值", "图标颜色"),
        "size": buildYduiProps(null, ".6rem", "string && (px或rem)", "图标大小"),
        "custom": buildYduiProps(null, false, "boolean", "是否为自定义图标")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydIcons',
        // 这个是方便阅读定义的
        label: '图标',
        // 这里从 ydui 中获取 props 的定义
        props,
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            return p
        })(props),
        // 生成一个基础的 yd-icons 对象的节点
        createElementNode() {
            return {
                id: 'icons-' + (new Date()).getTime(),
                title: '图标',
                // 对应当前框架中的名称
                name: 'yd-icons',
                // 官方文档中的名称
                realname: 'yd-icons',
                props: this.baseProps,
                // 默认内容
                text: 'icons',
                type: 'el',
                children: [],
                style: {}
            }
        }
    }
})()
