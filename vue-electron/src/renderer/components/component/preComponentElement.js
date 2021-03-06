import 'element-ui/lib/theme-chalk/index.css'

export default {
    name: 'preComponentElement',
    props: {
        code: {
            type: Object,
            required: true
        }
    },
    render(h) {
        const comps = []
        if (this.code.children) {
            if (this.code.children instanceof Array) {
                this.code.children.forEach(child => {
                    comps.push(h('preComponentElement', {
                        props: {
                            code: child
                        }
                    }))
                })
            }
        }
        console.log(comps)
        if (this.code.text) {
            return h(this.code.name, this.code.text, {
                class: this.code.class,
                style: this.code.style,
                attrs: this.code.attrs,
                props: this.code.props,
                domProps: this.code.domProps,
                on: this.code.on,
                nativeOn: this.code.nativeOn,
                socpedSlots: this.code.scopedSlots,
                slot: this.code.slot
            }, comps)
        } else {
            return h(this.code.name, {
                class: this.code.class,
                style: this.code.style,
                attrs: this.code.attrs,
                props: this.code.props,
                domProps: this.code.domProps,
                on: this.code.on,
                nativeOn: this.code.nativeOn,
                socpedSlots: this.code.scopedSlots,
                slot: this.code.slot
            }, comps)
        }
    }
}
