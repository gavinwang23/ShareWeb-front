import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        headerState: true
    },
    mutations: {
        headerUp(state) {
            state.headerState = false;
        },
        headerDown(state) {
            state.headerState = true;
        }
    },
    actions: {},
    modules: {}
})