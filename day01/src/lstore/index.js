import Vue from 'vue'
import Vuex from './vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state, num = 1) {
      state.count+=num;
    }
  },
  actions: {
    add(context) {
      setTimeout(() => {
        context.commit('add');
      }, 1000)
    }
  },
  getters: {
    doubleCount() {
      console.log(this.state.count)
      return this.state.count*2;
    }
  },
  modules: {
  }
})
