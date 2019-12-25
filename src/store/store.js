import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /* headerState: true */
        changeDayNight: false,

    },
    mutations: {

        // 组件渐变效果
        /* headerUp(state) {
            state.headerState = false;
        },
        headerDown(state) {
            state.headerState = true;
        } */
    },
    actions: {},
    modules: {}
})