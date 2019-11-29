import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        headerState: false
    },
    mutations: {
        headerUp(state) {
            state.headerState = true;
        },
        headerDown(state) {
            state.headerState = false;
        }
    },
    actions: {},
    modules: {}
})