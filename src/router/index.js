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
      redirect: '/Order/ClassicMenu',
      children: [
        {
          path: 'ClassicMenu',
          name: 'classicMenu',
          component: () => import('../views/OrderView/classicMenu.vue'),
        },
        {
          path: 'zeroExchange',
          name: 'zeroExchange',
          component: () => import('../views/OrderView/zeroExchange.vue'),
        },
        {
          path: 'double99',
          name: 'double99',
          component: () => import('../views/OrderView/double99.vue'),
        },
        {
          path: 'commonOrder',
          name: 'commonOrder',
          component: ()=>import('../views/OrderView/commonOrder.vue')
        }
      ]
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
      path: '/Details/:id',
      name: 'DetailsView',
      component: () => import('../layout/DetailsViewLayout.vue'),
    }
    
  ],
})

export default router
