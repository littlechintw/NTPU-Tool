import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta:{
      title: 'NTPU Tool - Code',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta:{
      title: 'NTPU Tool - About',
    },
  },
  {
    path: '/covid',
    name: 'Covid',
    component: () => import('../views/Covid.vue'),
    meta:{
      title: 'NTPU Tool - Covid-19',
    },
  },
  {
    path: '/TaiwanSocialDistancing',
    name: 'Taiwan Social Distancing',
    component: () => import('../views/TaiwanSocialDistancing.vue'),
    meta:{
      title: 'NTPU Tool - Taiwan Social Distancing',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
