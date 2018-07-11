import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
const dialog = require('electron').remote.dialog
const ipc = require('electron').ipcRenderer
const clipboard = require('electron').clipboard

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dialog,
    ipc,
    clipboard
  },
  modules: {
    app,
    user
  },
  getters
})

export default store
