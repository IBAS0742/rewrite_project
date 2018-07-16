import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydCheckList = (function () {
    const props = Object.assign({}, Vue.temp.ydui.CheckList.props, {
		"color": buildYduiProps(null, "#4cd864", "string & 常规颜色值", "选中颜色"),
		"align": buildYduiProps([ "left", " right" ], "left", "string", "图标放置位置"),
		"label": buildYduiProps(null, "true", "boolean", "是否启用点击整行触发选中"),
		"callback": buildYduiProps(null, null, "function", "回调方法（返回当前选中值和是否全选）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCheckList',
        // 这个是方便阅读定义的
        label: '多选列表',
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
        // 生成一个基础的 yd-check-list 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'checkList-' + (new Date()).getTime()
            return {
                id: 'checkList-' + (new Date()).getTime(),
                // #slot#id,
                title: '多选列表',
                // 对应当前框架中的名称
                name: 'yd-check-list',
                // 官方文档中的名称
                realname: 'yd-check-list',
                props: this.baseProps,
                // 默认内容
                text: 'check-list',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()


// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydCheckListItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.CheckListItem.props, {
		"disabled": buildYduiProps(null, "false", "boolean", "是否禁用"),
		"val": buildYduiProps(null, null, "boolean,string,number", "值（必填）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCheckListItem',
        // 这个是方便阅读定义的
        label: '多选列表内容',
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
        // 生成一个基础的 yd-check-list-item 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'checkListItem-' + (new Date()).getTime()
            return {
                id: 'checkListItem-' + (new Date()).getTime(),
                // #slot#id,
                title: '多选列表内容',
                // 对应当前框架中的名称
                name: 'yd-check-list-item',
                // 官方文档中的名称
                realname: 'yd-check-list-item',
                props: this.baseProps,
                // 默认内容
                text: 'check-list-item',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
