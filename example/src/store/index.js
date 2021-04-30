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
          // console.log('getter', this);
          return state.count*2
        }
      },
      mutations: {
        inc(state) {
          console.log('mutation', this);
          state.count++;
        }
      },
      actions: {
        inc(store) {
          console.log('action', this)
          store.commit('inc');
        }
      }
    }
  }
})
