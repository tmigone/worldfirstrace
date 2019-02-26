import Vue from 'vue'
import Router from 'vue-router'
import Raw from './views/Raw.vue'
import ByExpansion from './views/ByExpansion.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ByExpansion
    }, {
      path: '/raw',
      name: 'raw',
      component: Raw
    }
  ]
})
