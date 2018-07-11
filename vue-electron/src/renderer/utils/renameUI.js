export const renameUIUse = (element, name, Vue) => {
    for (const i in element) {
        if (element[i].name && !(element[i] instanceof Function)) {
            // console.log(element[i].name)
            element[i].name = name + element[i].name
            Vue.use(element[i])
        }
    }
}

export const renameUIComponent = (element, name, Vue) => {
    for (const i in element) {
        if (element[i].name && !(element[i] instanceof Function)) {
            // console.log(element[i].name)
            // element[i].name = name + element[i].name
            Vue.component(name + element[i].name, element[i])
        }
    }
}
