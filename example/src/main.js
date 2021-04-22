import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont.css'
import create from './utils/create'
import Loading from './components/Loading'
import router from './router'
Vue.config.productionTip = false
Vue.prototype.$loading = (() => {
  const vm = create(Loading);
  if(vm.$el.parentNode === document.body) {
    vm.$el.style.position = 'fixed';
  } else {
    vm.$el.parentNode.style.position = 'relative';
  }
  return vm;
})()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
