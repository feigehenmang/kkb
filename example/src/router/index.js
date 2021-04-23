import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ActiveComponent from '../views/ActiveComponent.vue'
import Temp from '../components/Temp'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
      deepth: 1 // 层级
    }
  },
  {
    path: '/active-component',
    name: 'ActiveComponent',
    component: ActiveComponent,
    meta: {
      keepAlive: true,
      deepth: 0.5
    }
  },
  {
    path: '/about/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      keepAlive: true,
      deepth: 2
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      keepAlive: true,
      deepth: 2
    }
  },
  {
    path: '/temp',
    name: 'Temp',
    component: Temp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
