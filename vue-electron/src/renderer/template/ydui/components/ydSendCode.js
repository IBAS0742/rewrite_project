import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydSendCode = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.SendCode.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.SendCode.props[i]
    }
    props = Object.assign({}, props, {
		"second": buildYduiProps(null, "60", "number", "倒计时时长（秒）"),
		"init-str": buildYduiProps(null, "获取短信验证码", "string", "初始化按钮显示文本"),
		"run-str": buildYduiProps(null, "{%s}秒后重新获取", "string", "运行时显示文本"),
		"reset-str": buildYduiProps(null, "重新获取验证码", "string", "运行结束后显示文本"),
		"storage-key": buildYduiProps(null, null, "string", "储存倒计时剩余时间sessionstorage的键值，设置不为空后，刷新页面倒计时将继续")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydSendCode',
        // 这个是方便阅读定义的
        label: '发送验证码',
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
        // 生成一个基础的 yd-send-code 对象的节点
        createElementNode() {
            // #slot#let id = 'sendCode-' + (new Date()).getTime()
            return {
                id: 'sendCode-' + (new Date()).getTime(),
                // #slot#id,
                title: '发送验证码',
                // 对应当前框架中的名称
                name: 'yd-send-code',
                // 官方文档中的名称
                realname: 'yd-send-code',
                props: this.baseProps,
                // 默认内容
                text: 'send-code',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
