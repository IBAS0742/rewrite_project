import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydInfiniteScroll = (function () {
    const props = Object.assign({}, Vue.temp.ydui.InfiniteScroll.props, {
		"callback": buildYduiProps(null, null, "function", "当列表滚动到底部时，调用的自定义方法"),
		"distance": buildYduiProps(null, null, "number", "触发加载方法的滚动距离阈值（像素）"),
		"scroll-top": buildYduiProps(null, "true", "boolean", "是否初始化滚动至顶部")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydInfiniteScroll',
        // 这个是方便阅读定义的
        label: '滚动加载',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
			{
				"slot": "-",
				"have": false,
				"desc": "内容"
			},
			{
				"slot": "list",
				"have": false,
				"desc": "列表内容"
			},
			{
				"slot": "loadingtip",
				"have": false,
				"desc": "加载中提示内容"
			},
			{
				"slot": "donetip",
				"have": false,
				"desc": "所有数据加载完毕后提示内容"
			}
		],
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            console.log(props)
            return p
        })(props),
        // 生成一个基础的 yd-infinite-scroll 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            let id = 'infiniteScroll-' + (new Date()).getTime()
            return {
                // #normal#id: 'infiniteScroll-' + (new Date()).getTime(),
                id,
                title: '滚动加载',
                // 对应当前框架中的名称
                name: 'yd-infinite-scroll',
                // 官方文档中的名称
                realname: 'yd-infinite-scroll',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'infinite-scroll',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
