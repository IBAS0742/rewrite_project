# 说明关于 YDUI 组件的定义

> 以下以 yd-button 来说明，其他组件类似

* 组件定义的构造
```javascript
import { buildYduiProps } from "../buildDefaultObject";

export const ydButton = {
    // 这个是在 dom 树中显示可以用的
    name: 'ydButton',
    // 这个是方便阅读定义的
    label: '按钮',
    // 这里从 ydui 中获取 props 的定义
    props: Object.assign({}, Vue.temp.ydui.Button.props, {
        type: buildYduiProps(['primary', 'danger', 'warning', 'hollow', 'disabled'], 'primary'),
        size: buildYduiProps(['small', 'large'], 'small'),
        bgcolor: buildYduiProps('string'),
        color: buildYduiProps('string'),
        disable: buildYduiProps([true, false], false, 'boolean'),
        shape: buildYduiProps(['square', 'circle'], 'square'),
        'action-type': buildYduiProps(['button', 'submit', 'reset'], 'button')
    }),
    // 生成基础的 props 对象
    baseProps: (() => {
        let p = {}
        for (let i in this.props) {
            p[i] = this.props[i].default
        }
        return p
    })(),
    // 生成一个基础的 yd-button 对象的节点
    create() {
        return {
            // 对应当前框架中的名称
            name: 'yd-button',
            // 官方文档中的名称
            realname: 'yd-button',
            props: this.props,
            // 默认内容
            text: 'button',
            type: 'el',
            children: []
        }
    }
}
```