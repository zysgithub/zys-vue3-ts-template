import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/index'
      },
      {
        path: '/index',
        component: () => import('@/views/index/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
