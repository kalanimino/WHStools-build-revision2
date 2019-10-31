import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/academic',
      name:'academic',
      component: () => import('./views/AcademicHonors.vue')
    },
    {
      path:'/languages',
      name:'language',
      component: () => import('./views/ForeignLang.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/cte',
      name: 'cte',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CTEreq.vue')
    },
    {
    path: '/math',
    name: 'math',
    component: () => import('./views/Math.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('./views/More.vue'),
      props: (route) => ({
        user: userData,
        ...route.params
    })
    }
  ]
})
