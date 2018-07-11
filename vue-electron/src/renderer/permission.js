import router from './router'
// import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'

// 动态设置头部
router.beforeEach((to, from, next) => {
  const head = document.getElementsByTagName('head')[0]
  const meta = to.meta.meta
  const metas = document.getElementsByTagName('meta')
  for (var i = 0; i < metas.length; i++) {
    head.removeChild(metas[i])
  }
  if (meta) {
    for (var j in meta) {
      const meta_ = document.createElement('meta')
      meta_.name = j
      meta_.content = meta[j]
      head.appendChild(meta_)
    }
  }
  const meta__ = document.createElement('meta')
  meta__.name = 'charset'
  meta__.content = 'utf-8'
  head.appendChild(meta__)
  next()
})

// todo 不需要登陆
// const whiteList = ['/login'] // 不重定向白名单
// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   if (store.getters.token) {
//     if (to.path === '/login') {
//       next({ path: '/' })
//       NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
//     } else {
//       if (store.getters.roles.length === 0) {
//         store.dispatch('GetInfo').then(res => { // 拉取用户信息
//           next()
//         }).catch((err) => {
//           store.dispatch('FedLogOut').then(() => {
//             Message.error(err || 'Verification failed, please login again')
//             next({ path: '/' })
//           })
//         })
//       } else {
//         next()
//       }
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next('/login')
//       NProgress.done()
//     }
//   }
// })

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
