const propsType = {
    "boolean":{
        "name":"boolean",
        cb(val,und) {
            if (val === und || val === null) {
                val = ''
            } else {
                val = val.toString()
            }
            if (val.toLowerCase() === 'false') {
                return false
            } else if (val.toLowerCase() === 'true') {
                return true
            } else {
                return false
            }
        }
    },
    "string":{
        "name":"string",
        cb(val) {
            if (!!val) {
                return val.toString ? val.toString() : val
            } else {
                return ''
            }
        }
    },
    "array":{
        "name":"array",
        cb(val) {
            if (!!val && val instanceof Array) {
                return val
            } else {
                return []
            }
        }
    },
    "number":{
        "name":"number",
        cb(val) {
            val = parseFloat(val)
            if (val.toString() === 'NaN') {
                return 0
            } else {
                return val
            }
        }
    },
    "string && 常规颜色值":{
        "name":"string && 常规颜色值",
        cb(val) {
            if (val) {
                if (/#[0-9a-fA-F]{6}/.test(val) || /#[0-9a-fA-F]{3}/.test(val)) {
                    return val
                } else {
                    return ''
                }
            } else {
                return ''
            }
        }
    },
    "string & 常规颜色值":{
        "name":"string & 常规颜色值",
        cb(val) {
            if (val) {
                if (/#[0-9a-fA-F]{6}/.test(val) || /#[0-9a-fA-F]{3}/.test(val)) {
                    return val
                } else {
                    return ''
                }
            } else {
                return ''
            }
        }
    },
    "string || object":{
        "name":"string || object",
        cb(val) {
            if (val) {
                return val
            } else {
                return ''
            }
        }
    },
    "string || number || boolean":{
        "name":"string || number || boolean",
        cb(val) {
            if (val) {
                return val
            } else {
                return ''
            }
        }
    },
    "function":{
        "name":"function",
        cb(val) {
            if (val instanceof Function) {
                return val
            } else {
                return () => {}
            }
        }
    },
    "string, number, boolean":{
        "name":"string, number, boolean",
        cb(val) {
            if (val) {
                return val
            } else {
                return ''
            }
        }
    },
    "boolean,string,number":{
        "name":"boolean,string,number",
        cb(val) {
            if (val) {
                return val
            } else {
                return ''
            }
        }
    },
    "string && (px或rem)":{
        "name":"string && (px或rem)",
        cb(val) {
            if (val) {
                return val
            } else {
                return ''
            }
        }
    },
    "string || number":{
        "name":"string || number",
        cb(val) {
            if (val) {
                return val
            } else {
                return ''
            }
        }
    },
    "float": {
        "name": "float",
        cb(val) {
            val = parseFloat(val)
            if (val.toString() === 'NaN') {
                return 0
            } else {
                return val
            }
        }
    }
}


export const buildYduiProps = (range, defaultV, type, desc) => {
    type = type || 'string'
    defaultV = propsType[type].cb(defaultV)
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