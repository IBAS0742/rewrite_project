export const resultRoute = {
    path: '/result',
    component: () => import('@/views/vue-editor/result/main'),
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
