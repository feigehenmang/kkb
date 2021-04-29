import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test: {
      namespaced: true,
      state: {
        count: 0
      },
      getters: {
        doubleCount(state) {
          return state.count*2
        }
      },
      mutations: {
        inc(state) {
          state.count++;
        }
      },
      actions: {
        inc(store) {
          store.commit('inc');
        }
      }
    }
  }
})
