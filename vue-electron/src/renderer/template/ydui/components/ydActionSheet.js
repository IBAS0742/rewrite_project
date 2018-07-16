import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// todo 如何将属性进行绑定

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydActionSheet = (function () {
    const props = Object.assign({}, Vue.temp.ydui.ActionSheet.props, {
		"items": buildYduiProps(null, null, "array", "菜单项数组：                [{                label: string, //菜单项的文本                callback: function, //点击该菜单项的回调函数                stay: boolean, //是否关闭 actionsheet（默认false，直接关闭）            }]"),
		"cancel": buildYduiProps(null, null, "string", "取消按钮的文本，为空则不显示取消按钮"),
		"masker-opacity": buildYduiProps(null, ".5", "number", "遮罩层透明度"),
        'v-model': buildYduiProps(null, false, "boolean", "显示菜单"),
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydActionSheet',
        // 这个是方便阅读定义的
        label: '上拉菜单',
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
        // 生成一个基础的 yd-action-sheet 对象的节点
        createElementNode() {
            let id = 'actionSheet-' + (new Date()).getTime()
            return {
                // #normal#id: 'actionSheet-' + (new Date()).getTime(),
                id,
                title: '上拉菜单',
                // 对应当前框架中的名称
                name: 'yd-action-sheet',
                // 官方文档中的名称
                realname: 'yd-action-sheet',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'action-sheet',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
