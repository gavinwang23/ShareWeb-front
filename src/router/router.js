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
        path: '/entry',
        name: 'entry',
        component: () =>
            import ("../views/entry.vue")
    },
    {
        path: '/manager',
        name: 'manager',
        component: () =>
            import ("../views/userCenter/manager.vue")
    },
    {
        path: '/analytics',
        name: 'analytics',
        component: () =>
            import ("../views/userCenter/analytics.vue")
    },
    {
        path: '/wangEditor2',
        name: 'wangEditor2',
        component: () =>
            import ("../components/wangEditor.vue")
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
            import ("../views/userCenter/memberCentre.vue")
    },
    {
        path: '/account',
        name: 'account',
        component: () =>
            import ("../views/userCenter/account.vue")
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
        path: '/follow_page',
        name: 'followPage',
        component: () =>
            import ("../views/followPage.vue")
    },
    {
        path: '/loginMessage',
        name: 'loginMessage',
        component: () =>
            import ("../components/login/loginMessage")
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router