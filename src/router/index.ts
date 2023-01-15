import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/modules/auth/SignIn/index.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/modules/auth/Register/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/dashboard/Home/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
