import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: () => import('../layout/MainViewLayout.vue'),
    },
    {
      path: '/Order',
      name: 'OrderView',
      component: () => import('../layout/OrderViewLayout.vue'),
    },
    {
      path: '/List',
      name: 'ListView',
      component: () => import('../layout/ListViewLayout.vue'),
    },
    {
      path: '/Own',
      name: 'OwnView',
      component: () => import('../layout/OwnViewLayout.vue'),
    },
    {
      path: '/Details',
      name: 'DetailsView',
      component: () => import('../layout/DetailsViewLayout.vue'),
    }
    
  ],
})

export default router
