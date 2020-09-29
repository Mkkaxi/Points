import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/pins',
    name: 'Pins',
    component: () => import('@/views/Pins.vue')
  },
  {
    path: '/topics',
    name: 'Topic',
    component: () => import('@/views/Topic.vue')
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('@/views/Books.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/views/Events.vue')
  },
  {
    path: '/recommended',
    name: 'Recommended',
    component: () => import('@/views/Recommended.vue')
  },
  {
    path: '/following',
    name: 'Following',
    component: () => import('@/views/Following.vue')
  },
  {
    path: '/android',
    name: 'Android',
    component: () => import('@/views/Android.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
