import { buildYduiProps } from "../buildDefaultObject";

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签

export const ydSlider = (function () {
    const props = Object.assign({}, Vue.temp.ydui.Slider.props, {
		"index": buildYduiProps(null, "1", "number", "初始打开第n张图片"),
		"speed": buildYduiProps(null, "300", "number", "切换速度（单位毫秒）"),
		"autoplay": buildYduiProps(null, "0", "number", "自动播放时间（单位毫秒）"),
		"direction": buildYduiProps([ "horizontal", "vertical" ], "horizontal", "string", "切换方向"),
		"show-pagination": buildYduiProps(null, "true", "boolean", "是否显示分页标记"),
		"callback": buildYduiProps(null, null, "function", "切换后回调（返回当前页码）"),
		"loop": buildYduiProps(null, "true", "boolean", "是否循环")
    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydSlider',
        // 这个是方便阅读定义的
        label: '图片轮播',
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
        // 生成一个基础的 yd-slider 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'slider-' + (new Date()).getTime()
            return {
                id: 'slider-' + (new Date()).getTime(),
                // #slot#id,
                title: '图片轮播',
                // 对应当前框架中的名称
                name: 'yd-slider',
                // 官方文档中的名称
                realname: 'yd-slider',
                props: this.baseProps,
                // 默认内容
                text: 'slider',
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

export const ydSliderItem = (function () {
    const props = Object.assign({}, Vue.temp.ydui.SliderItem.props, {

    })
    return {
        // 这个是在 dom 树中显示可以用的
        name: 'ydSliderItem',
        // 这个是方便阅读定义的
        label: '图片轮播项',
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
        // 生成一个基础的 yd-slider-item 对象的节点
        createElementNode() {
            console.log(this.baseProps)
            // #slot#let id = 'sliderItem-' + (new Date()).getTime()
            return {
                id: 'sliderItem-' + (new Date()).getTime(),
                // #slot#id,
                title: '图片轮播项',
                // 对应当前框架中的名称
                name: 'yd-slider-item',
                // 官方文档中的名称
                realname: 'yd-slider-item',
                props: this.baseProps,
                // 默认内容
                text: 'slider-item',
                type: 'el',
                children: [],
                // #slot#children: buildYduiSlot(this.slots, id),
                style: {}
            }
        }
    }
})()
