import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydKeyBoard = (function () {
    const props = Object.assign({}, Vue.temp.ydui.KeyBoard.props, {
		"title": buildYduiProps(null, "ydui安全键盘", "string", "键盘提示标题"),
		"cancel-text": buildYduiProps(null, "取消", "string", "取消文字"),
		"input-text": buildYduiProps(null, "输入数字密码", "string", "输入提示标题"),
		"disorder": buildYduiProps(null, "false", "boolean", "是否打乱键盘顺序"),
		"callback": buildYduiProps(null, null, "function", "6位密码输入完后调用的方法"),
		"trigger-close": buildYduiProps(null, "true", "boolean", "是否点击遮罩关闭键盘"),
		"masker-opacity": buildYduiProps(null, ".5", "number", "遮罩层透明度")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydKeyBoard',
        // 这个是方便阅读定义的
        label: '安全键盘',
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
        // 生成一个基础的 yd-key-board 对象的节点
        createElementNode() {
            // #slot#let id = 'keyBoard-' + (new Date()).getTime()
            return {
                id: 'keyBoard-' + (new Date()).getTime(),
                // #slot#id,
                title: '安全键盘',
                // 对应当前框架中的名称
                name: 'yd-key-board',
                // 官方文档中的名称
                realname: 'yd-key-board',
                props: this.baseProps,
                // 默认内容
                text: 'key-board',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
