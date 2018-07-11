import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import App from './App'
import router from './router'
import store from './store'
import { constantRouterMap } from './router'
import VueI18n from 'vue-i18n'
import * as i18nConfig from './i18n'

import '@/icons' // icon
import '@/permission' // permission control

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'CN', // set locale
  messages: i18nConfig.i18n // set locale messages
})

import preComponentElement from './components/component/preComponentElement'
Vue.component('preComponentElement', preComponentElement)
import preComponentIView from './components/component/preComponentIView'
Vue.component('preComponentIView', preComponentIView)
import preComponentYdui from './components/component/preComponentYdui'
Vue.component('preComponentYdui', preComponentYdui)
// Vue.use(ElementUI, {
//   i18n: (key, value) => {
//     console.log(key, value)
//     i18n.t(key, value)
//   }
// })

store.state.router = constantRouterMap

new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
