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

import { Loading, MessageBox, Notification, Message } from 'element-ui'
export const installElmAction = (Vue) => {
    Vue.prototype.elm = {
        $loading: Loading.service,
        $msgbox: MessageBox,
        $alert: MessageBox.alert,
        $confirm: MessageBox.confirm,
        $notify: Notification,
        $message: Message
    }
}

export const installIviewAction = (IviewMessage, IviewNotice, Vue) => {
    Vue.prototype.iview = {
        $Message: IviewMessage,
        $Notice: IviewNotice
    }
}
