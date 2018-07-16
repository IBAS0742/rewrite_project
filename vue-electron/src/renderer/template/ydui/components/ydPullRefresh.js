import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydPullRefresh = (function () {
    const props = Object.assign({}, Vue.temp.ydui.PullRefresh.props, {
		"callback": buildYduiProps(null, null, "function", "当拖动列表达到一定位置后将会调用该自定义方法"),
		"stop-drag": buildYduiProps(null, "false", "boolean", "是否禁止拖动加载内容"),
		"pull-text": buildYduiProps(null, "下拉刷新", "string", "下拉提示文字"),
		"drop-text": buildYduiProps(null, "松开加载", "string", "下拉到可加载位置提示文字"),
		"loading-text": buildYduiProps(null, "加载中...", "string", "加载中提示文字"),
		"show-init-tip": buildYduiProps(null, "true", "boolean", "是否首次加载显示提示图标")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydPullRefresh',
        // 这个是方便阅读定义的
        label: '下拉刷新',
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
        // 生成一个基础的 yd-pull-refresh 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'pullRefresh-' + (new Date()).getTime()
            return {
                id: 'pullRefresh-' + (new Date()).getTime(),
                // #slot#id,
                title: '下拉刷新',
                // 对应当前框架中的名称
                name: 'yd-pull-refresh',
                // 官方文档中的名称
                realname: 'yd-pull-refresh',
                props: this.baseProps,
                // 默认内容
                text: 'pull-refresh',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
