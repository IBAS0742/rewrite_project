import Vue from 'vue'
import Vuex from 'vuex'
import {baseUrl} from "../config";
// import * as actions from './actions'
// import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    windowTitle : '',
    userInfo : {},
    logined : false,
    baseUrl,
    cms : {
        list : [],
        more : true,
        init : false,
        page : 0
    }
}

// 定义所需的 mutations
const mutations = {
}

// 创建 store 实例
export default new Vuex.Store({
    // actions,
    // getters,
    state,
    mutations
})