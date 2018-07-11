import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/i18n',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'i18n',
        component: () => import('@/views/i18n/index'),
        meta: { title: 'i18n', icon: 'form' }
      }
    ]
  },
  {
    path: '/vue-editor',
    redirect: '/vue-editor/list',
    component: Layout,
    meta: { title: '模板定制', icon: 'form' },
    children: [
      {
        path: 'list',
        meta: { title: 'list', icon: 'form' },
        // 不知道为什么在 elm 中使用 elm 的 modal 出现问题，但是使用 iview 的却可以正常显示
        component: () => import('@/views/vue-editor/list-iview')
      },
      {
        path: 'make',
        meta: { title: 'make', icon: 'form' },
        component: () => import('@/views/vue-editor/index'),
        children: [
          {
            path: 'element',
            name: 'vue-editor-element',
            component: () => import('@/views/vue-editor/element/index'),
            meta: { title: 'element', icon: 'form' }
          },
          {
            path: 'iview',
            name: 'vue-editor-iview',
            component: () => import('@/views/vue-editor/iview/index'),
            meta: {
              title: 'iview',
              icon: 'form'
            }
          },
          {
            path: 'ydui',
            name: 'vue-editor-ydui',
            component: () => import('@/views/vue-editor/ydui/index'),
            meta: {
              title: 'ydui',
              icon: 'form',
              meta: {
                viewport: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0',
                'apple-mobile-web-app-capable': 'yes',
                'apple-mobile-web-app-status-bar-style': 'black'
              }
            }
          }
        ]
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

