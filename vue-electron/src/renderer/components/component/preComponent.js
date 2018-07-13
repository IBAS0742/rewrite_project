export default {
    name: 'preComponent',
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
                    if (child.slot) {
                        comps.push(h('preComponent', {
                            props: {
                                code: child
                            },
                            slot: child.slot
                        }))
                    } else {
                        comps.push(h('preComponent', {
                            props: {
                                code: child
                            }
                        }))
                    }
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
                socpedSlots: this.code.scopedSlots
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
