import Home from './Home.vue'
import homeMain from './main'
import homeList from './list'
import homeUser from './user'
import blank from './blank'

let home = {
    path: '/home',
    component: Home,
    children: [
        {
            path: '/home',
            component: homeMain,
            name: '主页'
        },
        {
            path: '/home/list',
            component: homeList,
            name: '列表'
        },
        {
            path: '/home/user',
            component: homeUser,
            name: '用户'
        },
        {
            path: '/home/blank',
            component: blank,
            name: '开发中'
        }
    ]
};

export default home;