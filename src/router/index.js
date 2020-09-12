import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{
      title: 'NTPU Tool - Code',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{
      title: 'NTPU Tool - About',
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta:{
      title: 'NTPU Tool - Admin',
    },
  },
  {
    path: '/dorm',
    name: 'Dorm',
    component: () => import('../views/Dorm.vue'),
    meta:{
      title: 'NTPU Tool - Dorm',
    },
  },
  {
    path: '/cdc/:id?',
    name: 'Real-Name System',
    component: () => import('../views/cdc.vue'),
    meta:{
      title: 'NTPU Tool - Real-Name System',
    },
  }
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

