import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydSearch = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Search.props, {
		"placeholder": buildYduiProps(null, "搜 索", "string", "placeholder提示文字"),
		"cancel-text": buildYduiProps(null, "取消", "string", "取消按钮文字"),
		"on-submit": buildYduiProps(null, null, "function", "提交时触发方法"),
		"on-cancel": buildYduiProps(null, null, "function", "取消触发的方法"),
		"fullpage": buildYduiProps(null, "false", "boolean", "是否全屏模式（带搜索匹配结果）"),
		"top": buildYduiProps(null, "0", "string && (px或rem)", "全屏模式距离顶部的距离"),
		"result": buildYduiProps(null, "[]", "array", "匹配结果（fullpage为true时生效）"),
		"item-click": buildYduiProps(null, null, "function", "匹配结果点击事件（fullpage为true时生效）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydSearch',
        // 这个是方便阅读定义的
        label: '搜索框',
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
        // 生成一个基础的 yd-search 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'search-' + (new Date()).getTime()
            return {
                id: 'search-' + (new Date()).getTime(),
                // #slot#id,
                title: '搜索框',
                // 对应当前框架中的名称
                name: 'yd-search',
                // 官方文档中的名称
                realname: 'yd-search',
                props: this.baseProps,
                // 默认内容
                text: 'search',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
