export const buildYduiProps = (range, defaultV, type, desc) => {
    type = type || 'string'
    if (defaultV) {} else {
        if (type == 'string') {
            defaultV = ''
        } else if (type == 'boolean') {
            type = false
        } else if (type == '') {} else {
            defaultV = ''
        }
    }
    return {
        type,
        range,
        default: defaultV,
        desc
    }
}

export const buildYduiSlot = (slots, id) => {
    let s = []
    for (let i  = 0; i < slots.length; i++) {
        s.push(Object.assign({}, slots[i], {
            id: id + slots[i].slot,
            type: 'slot',
            title: slots[i].desc || slots[i].slot,
        }))
    }
    return s
}

export const recoverYduiSlot = (node) => {
    return {
        desc: node.desc,
        have: false,
        id: node.id,
        slot: node.slot,
        title: node.title || node.slot,
        type: node.type
    }
}