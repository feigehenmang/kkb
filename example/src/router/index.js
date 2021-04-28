import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import child1Vue from '../views/child1.vue'
import child2Vue from '../views/child2.vue'
import List from '../views/List.vue'
import ActiveComponent from '../views/ActiveComponent.vue'
import Temp from '../components/Temp'

Vue.use(VueRouter)

const routes = [
  {
    path: 'child1',
    component: child1Vue
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
      deepth: 1 // 层级
    },
    children: [
      {
        path: 'child1',
        component: child1Vue,
        meta: {
          keepAlive: true,
          deepth: 1 // 层级
        },
      },
      {
        path: 'child2',
        component: child2Vue,
        meta: {
          keepAlive: true,
          deepth: 1 // 层级
        },
      }
    ]
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
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
