import element from './../../template/ydui/importAll'
import 'vue-ydui/dist/ydui.base.css'
// import * as yduiSail from './../../template/ydui/importMore'

export default {
    name: 'preComponentYdui',
    props: {
        code: {
            type: Object,
            required: true
        }
    },
    components: {
        // ...yduiSail,
        ...element
    },
    render(h) {
        const comps = []
        if (this.code.children) {
            if (this.code.children instanceof Array) {
                this.code.children.forEach(child => {
                    console.log(child)
                    if (child.slot) {
                        comps.push(h('preComponentYdui', {
                            props: {
                                code: child
                            },
                            slot: child.slot
                        }))
                    } else {
                        comps.push(h('preComponentYdui', {
                            props: {
                                code: child
                            }
                        }))
                    }
                })
            }
        }
        if (this.code.text) {
            const ret = h(this.code.name, this.code.text, {
                class: this.code.class,
                style: this.code.style,
                attrs: this.code.attrs,
                props: this.code.props,
                domProps: this.code.domProps,
                on: this.code.on,
                nativeOn: this.code.nativeOn,
                socpedSlots: this.code.scopedSlots
                // slot: this.code.slot
            }, comps)
            console.log(this.code, ret)
            return ret
        } else {
            const ret1 = h(this.code.name, {
                class: this.code.class,
                style: this.code.style,
                attrs: this.code.attrs,
                props: this.code.props,
                domProps: this.code.domProps,
                on: this.code.on,
                nativeOn: this.code.nativeOn,
                socpedSlots: this.code.scopedSlots
                // slot: this.code.slot
            }, comps)
            console.log(this.code, ret1)
            return ret1
        }
    }
}
