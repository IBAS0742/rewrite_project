import NotFound from './views/404.vue'
import window from './views/window/route'
import home from './views/home/route'
import test from './views/test/test'

let routers = [
    home,
    window,
    {
        path : '/',
        redirect: { path: '/home' }
    },
    {
        path : '/test',
        component: test
    },
    {
        path: '/404',
        component: NotFound
    },
    {
        path: '*',
        redirect: {path: '/404'}
    }
];

export default routers;