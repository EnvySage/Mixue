import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: () => import('../layout/MainViewLayout.vue'),
      meta: { id: 0 },
    },
    {
      path: '/red',
      name: 'red',
      component: () => import('../views/MainView/RedView.vue'),
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('../views/MainView/DailyView.vue'),
    },
    {
      path: '/gift',
      name: 'gift',
      component: () => import('../views/MainView/CardView.vue'),
    },
    {
      path: '/Order',
      name: 'OrderView',
      component: () => import('../layout/OrderViewLayout.vue'),
      meta: { id: 1 },
      redirect: '/Order/ClassicMenu',
      children: [
        {
          path: 'ClassicMenu',
          name: 'classicMenu',
          component: () => import('../views/OrderView/classicMenu.vue'),
          meta: { id: 1 },
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
          component: () => import('../views/OrderView/commonOrder.vue')
        }
      ]
    },
    {
      path: '/List',
      name: 'ListView',
      component: () => import('../layout/ListViewLayout.vue'),
      meta: { id: 2 },
      redirect:'/List/listall',
      children:[
        {
          path:'listall',
          name:'listall',
          component:()=> import('../components/ListComponents/listall.vue'),
        }, 
        {
          path:'listhistory',
          name:'listhistory',
          component:()=> import('../components/ListComponents/listhistory.vue'),
        },   
        {
          path:'listchargeback',
          name:'listchargeback',
          component:()=> import('../components/ListComponents/listchargeback.vue'),
         
        },  
      ]
    },
    
    {
      path: '/listdetail',
      name: 'listdetail',
      component: () => import('../components/ListComponents/listdetail.vue'),
    },
    {
      path: '/Own',
      name: 'OwnView',
      component: () => import('../layout/OwnViewLayout.vue'),

      meta: { id: 3 },
    },
    {
      path: '/power',
      name: 'power',
      component:()=>import('../views/MainView/rankView.vue')
    },
    {
      path: '/money',
      name: 'moneyView',
      component: () => import('../views/MainView/moneyView.vue'),
    },
    {
      path: '/vouchers',
      name: 'vouchers',
      component: () => import('../views/MainView/vouchers.vue'),
    },
    {
      path:'/giftcard',
      name:'giftcard',
      component:()=>import('../views/MainView/giftcardView.vue')
    },
    {
      path: '/Details/:id',
      name: 'DetailsView',
      component: () => import('../layout/DetailsViewLayout.vue'),
    },
    {
      path: '/snackDetail/:id',
      name:'snackDetail',
      component: () => import('../components/DetailsComponents/snackDetail.vue'),
    },
    {
      path: '/doubleDetail/:id',
      name: 'doubleDetail',
      component: () => import('../components/DetailsComponents/doubleDetail.vue'),
    },
  ],
})

export default router
