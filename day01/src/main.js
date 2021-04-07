import Vue from 'vue'
import App from './App.vue'
import router from './lrouter'
import store from './lstore'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
