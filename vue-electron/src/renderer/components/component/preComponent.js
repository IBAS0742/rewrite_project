export const recursionRender = (code, h) => {
    const comps = []
    if (code.children) {
        if (code.children instanceof Array) {
            code.children.forEach(child => {
                comps.push(recursionRender(child, h))
                // if (child.type === 'ul') {
                //     comps.push(recursionRender(child, h))
                // } else if (child.slot) {
                //     comps.push(h('preComponent', {
                //         props: {
                //             code: child
                //         },
                //         slot: child.slot
                //     }))
                // } else {
                //     comps.push(h('preComponent', {
                //         props: {
                //             code: child
                //         }
                //     }))
                // }
            })
        }
    }
    if (comps.length === 0 && code.text) {
        return h(code.name, code.text, {
            class: code.class,
            style: code.style,
            attrs: code.attrs,
            props: code.props,
            domProps: code.domProps,
            on: code.on,
            nativeOn: code.nativeOn,
            socpedSlots: code.scopedSlots
        })
    } else {
        return h(code.name, {
            class: code.class,
            style: code.style,
            attrs: code.attrs,
            props: code.props,
            domProps: code.domProps,
            on: code.on,
            nativeOn: code.nativeOn,
            socpedSlots: code.scopedSlots,
            slot: code.slot
        }, comps)
    }
}

export default {
    name: 'preComponent',
    props: {
        code: {
            type: Object,
            required: true
        }
    },
    render(h) {
        return recursionRender(this.code, h)
    }
}
