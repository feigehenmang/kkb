import Vue from 'vue'
import App from './App.vue'
import router from './lrouter'
import store from './lstore'
import './plugins/element.js'
import axios from 'axios';
import './directives/load'
Vue.config.productionTip = false
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
