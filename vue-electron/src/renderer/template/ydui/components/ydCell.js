import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

export const ydCellGroup = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Button.props, {
        title: buildYduiProps(null, '', 'string', '每组列表的标题')
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCellGroup',
        // 这个是方便阅读定义的
        label: '表单组',
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
        // 生成一个基础的 yd-button 对象的节点
        createElementNode() {
            return {
                id: 'cell-group' + (new Date()).getTime(),
                title: '表单组',
                // 对应当前框架中的名称
                name: 'yd-cell-group',
                // 官方文档中的名称
                realname: 'yd-cell-group',
                props: this.baseProps,
                // 默认内容
                //text: 'cell-group',
                type: 'el',
                children: [],
                style: {}
            }
        }
    }
})()

export const ydCellItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Button.props, {
        "type": buildYduiProps([ "link", "a", "label", "div", "checkbx", "radio" ], "div", "string", '列表的类型，type="link"将会解析为路由，type="a"则解析为普通<a>'),
        "arrow": buildYduiProps(null, false, "boolean", "是否带右向箭头"),
        "href": buildYduiProps(null, "", "string || object", '跳转链接，只在type="link"时生效')
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCellItem',
        // 这个是方便阅读定义的
        label: '表单项',
        // 这里从 ydui 中获取 props 的定义
        props,
        slots: [
            {
                slot: 'icon',
                desc: '列表图标',
                have: false
            }, {
                slot: 'left',
                desc: '列表左侧内容',
                have: false
            }, {
                slot: 'right',
                desc: '列表右侧内容',
                have: false
            }
        ],
        // 生成基础的 props 对象
        baseProps: ((props) => {
            let p = {}
            for (let i in props) {
                p[i] = props[i].default
            }
            return p
        })(props),
        // 生成一个基础的 yd-button 对象的节点
        createElementNode() {
            let id = 'cell-item' + (new Date()).getTime()
            return {
                id,
                title: '表单项',
                // 对应当前框架中的名称
                name: 'yd-cell-item',
                // 官方文档中的名称
                realname: 'yd-cell-item',
                props: this.baseProps,
                // 默认内容
                //text: 'cell-item',
                type: 'el',
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
