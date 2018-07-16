import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydDateTime = (function () {
    const props = Object.assign({}, Vue.temp.ydui.DateTime.props, {
		"init-emit": buildYduiProps(null, "true", "boolean", "是否初始化修正值"),
		"readonly": buildYduiProps(null, "false", "boolean", "是否只读"),
		"type": buildYduiProps([ "datetime", " date", " time", " month", " day" ], "datetime", "string", "时间类型"),
		"start-date": buildYduiProps(null, null, "string", "限制开始时间，格式为：【2008-08-08 08:08】或【2008/08/08 08:08】或【2008-08-08】或【2008/08/08】或【08:08】"),
		"end-date": buildYduiProps(null, null, "string", "限制结束时间，格式为：同上"),
		"start-year": buildYduiProps(null, "0（不限制）", "number", "可选“年”的开始值"),
		"end-year": buildYduiProps(null, "0（不限制）", "number", "可选“年”的结束值"),
		"start-hour": buildYduiProps(null, "0", "number", "可选“小时”的开始值（取值0-23）"),
		"end-hour": buildYduiProps(null, "23", "number", "可选“小时”的结束值（取值1-23）"),
		"year-format": buildYduiProps(null, "{value}年", "string", "“年”模板【需包含 {value} 字符串，支持html】"),
		"month-format": buildYduiProps(null, "{value}月", "string", "“月”模板【需包含 {value} 字符串，支持html】"),
		"day-format": buildYduiProps(null, "{value}日", "string", "“日”模板【需包含 {value} 字符串，支持html】"),
		"hour-format": buildYduiProps(null, "{value}时", "string", "“小时”模板【需包含 {value} 字符串，支持html】"),
		"minute-format": buildYduiProps(null, "{value}分", "string", "“分钟”模板【需包含 {value} 字符串，支持html】"),
		"value": buildYduiProps(null, null, "string", "值，格式为：【2008-08-08 08:08】或【2008/08/08 08:08】或【2008-08-08】或【2008/08/08】或【08:08】"),
		"cancel-text": buildYduiProps(null, "取消", "string", "取消文字"),
		"confirm-text": buildYduiProps(null, "确定", "string", "确定文字"),
		"placeholder": buildYduiProps(null, null, "string", "没有内容提示的文字（:init-emit='false'时生效）"),
		"callback": buildYduiProps(null, null, "function", "点击确定后回调"),
		"masker-opacity": buildYduiProps(null, ".5", "number", "遮罩层透明度")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydDateTime',
        // 这个是方便阅读定义的
        label: '时间组件',
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
        // 生成一个基础的 yd-date-time 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'dateTime-' + (new Date()).getTime()
            return {
                id: 'dateTime-' + (new Date()).getTime(),
                // #slot#id,
                title: '时间组件',
                // 对应当前框架中的名称
                name: 'yd-date-time',
                // 官方文档中的名称
                realname: 'yd-date-time',
                props: this.baseProps,
                // 默认内容
                text: 'date-time',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
