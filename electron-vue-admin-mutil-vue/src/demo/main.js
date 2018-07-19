import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import VueI18n from 'vue-i18n'
import * as i18nConfig from './i18n'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
// import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(YDUI);

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
    routes
});

const i18n = new VueI18n({
    locale: 'ZH',
    messages: i18nConfig.i18n
});

//路由跳转前判定
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token');
    if (token) {
        next();
    } else {
        if (to.path == '/' || to.path.substring(0,5) == '/home') {
            next();
        } else {
            next({ path: '/home/user' });
        }
    }
});

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
    //el: '#app',
    //template: '<App/>',
    i18n,
    store,
    router,
    //components: { App }
    render: h => h(App)
}).$mount('#app')

