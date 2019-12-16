import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/index.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/entry',
        name: 'entry',
        component: () =>
            import ("../views/entry.vue")
    },
    {
        path: '/manager',
        name: 'manager',
        component: () =>
            import ("../views/manager.vue")
    },
    {
        path: '/analytics',
        name: 'analytics',
        component: () =>
            import ("../views/analytics.vue")
    },
    {
        path: '/wangEditor2',
        name: 'wangEditor2',
        component: () =>
            import ("../views/wangEditor2.vue")
    },
    {
        path: '/mavonEditor',
        name: 'mavonEditor',
        component: () =>
            import ("../views/mavonEditor.vue")
    },
    {
        path: '/writing',
        name: 'writing',
        component: () =>
            import ("../views/writing.vue")
    },
    {
        path: '/test',
        name: 'test',
        component: () =>
            import ("../views/test.vue")
    },
    {
        path: '/member_centre',
        name: 'memberCentre',
        component: () =>
            import ("../views/memberCentre.vue")
    },
    {
        path: '/account',
        name: 'account',
        component: () =>
            import ("../views/account.vue")
    },
    {
        path: '/writeArticle',
        name: 'writeArticle',
        component: () =>
            import ("../views/writeArticle.vue")
    },
    {
        path: '/myarticle',
        name: 'MyArticle',
        component: () =>
            import ("../views/myArticle.vue")
    },
    {
        path: '/forget_password',
        name: 'forget_password',
        component: () =>
            import ("../views/forgetPassword.vue")
    },
    {
        path: '/article',
        name: 'article',
        component: () =>
            import ("../views/article.vue")
    },
    {
        path: '/plate',
        name: 'plate',
        component: () =>
            import ("../views/plate.vue")
    },
    {
        path: '/follow_page',
        name: 'followPage',
        component: () =>
            import ("../views/followPage.vue")
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router