import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydCitySelect = (function () {
    let props = {}
    for (let i in Vue.temp.ydui.CitySelect.props) {
        props[i.replace(/[A-Z]/g, (alphe) => {
            return '-' + alphe.toLowerCase()
        })] = Vue.temp.ydui.CitySelect.props[i]
    }
    props = Object.assign({}, props, {
		"provance": buildYduiProps(null, null, "string", "初始【省】的值"),
		"city": buildYduiProps(null, null, "string", "初始【市】的值"),
		"area": buildYduiProps(null, null, "string", "初始【县】的值"),
		"title": buildYduiProps(null, "所在地区", "string", "提示标题"),
		"choose-title": buildYduiProps(null, "请选择", "string", "请选择提示标题"),
		"ready": buildYduiProps(null, "true", "boolean", "是否准备就绪，异步数据时有用"),
		"items": buildYduiProps(null, "[]", "array", "数据，内容格式有限制，具体见下文"),
		"callback": buildYduiProps(null, null, "function", "选择结束后调用的方法，同时返回：            {                itemname1: '', //选择后【省】的名称                itemname2: '', //选择后【市】的名称                itemname3: '', //选择后【县】的名称                itemvalue1: '', //选择后【省】的值                itemvalue2: '', //选择后【市】的值                itemvalue3: '' //选择后【县】的值            }"),
		"columns": buildYduiProps(null, null, "number", "层级数（不设置默认取数据第一个的层级数）（v1.2.1新增）"),
		"masker-opacity": buildYduiProps(null, ".5", "number", "遮罩层透明度（v1.2.1新增）")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydCitySelect',
        // 这个是方便阅读定义的
        label: '省市县级联',
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
        // 生成一个基础的 yd-city-select 对象的节点
        createElementNode() {
            let id = 'citySelect-' + (new Date()).getTime()
            return {
                // #normal#id: 'citySelect-' + (new Date()).getTime(),
                id,
                title: '省市县级联',
                // 对应当前框架中的名称
                name: 'yd-city-select',
                // 官方文档中的名称
                realname: 'yd-city-select',
                props: this.baseProps,
                // 默认内容
                // #normal#text: 'city-select',
                type: 'el',
                // #normal#children: [],
                children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
