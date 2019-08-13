import Vue from 'vue'
import Router from 'vue-router'
import Projects from './views/Projects.vue'
import Dashboard from './views/Dashboard.vue'
import Team from './views/Team.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'project',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue')
    },
    {
      path:'/team',
      name:'team',
      component:Team
    }
  ]
})
