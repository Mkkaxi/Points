import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/pins',
    name: 'Pins',
    component: () => import('@/views/Pins.vue')
  },
  {
    path: '/topic',
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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
