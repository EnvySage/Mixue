import { createRouter, createWebHistory } from 'vue-router'
import MainViewLayout from '../layout/MainViewLayout.vue'
import OrderViewLayout from '../layout/OrderViewLayout.vue'
import ListViewLayout from '../layout/ListViewLayout.vue'
import OwnViewLayout from '../layout/OwnViewLayout.vue'
import DetailsViewLayout from '../layout/DetailsViewLayout.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainViewLayout,
      meta: { title: '首页', id: 0 },
    },
    {
      path: '/red',
      name: 'red',
      component: () => import('../views/MainView/RedView.vue'),
      meta: { title: '红包' },
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('../views/MainView/DailyView.vue'),
      meta: { title: '每日任务' },
    },
    {
      path: '/gift',
      name: 'gift',
      component: () => import('../views/MainView/CardView.vue'),
      meta: { title: '卡片' },
    },
    {
      path: '/Order',
      name: 'OrderView',
      component: OrderViewLayout,
      meta: { id: 1 },
      redirect: '/Order/ClassicMenu',
      children: [
        {
          path: 'ClassicMenu',
          name: 'classicMenu',
          component: () => import('../views/OrderView/classicMenu.vue'),
          meta: { title: '经典菜单' },
        },
        {
          path: 'zeroExchange',
          name: 'zeroExchange',
          component: () => import('../views/OrderView/zeroExchange.vue'),
          meta: { title: '零元兑换' },
        },
        {
          path: 'double99',
          name: 'double99',
          component: () => import('../views/OrderView/double99.vue'),
          meta: { title: '双99特惠' },
        },
        {
          path: 'commonOrder',
          name: 'commonOrder',
          component: () => import('../views/OrderView/commonOrder.vue'),
          meta: { title: '常规订单' },
        }
      ]
    },
    {
      path: '/List',
      name: 'ListView',
      component: ListViewLayout,
      meta: { id: 2 },
      redirect: '/List/listall',
      children: [
        {
          path: 'listall',
          name: 'listall',
          component: () => import('../components/ListComponents/listall.vue'),
          meta: { title: '全部列表' },
        }, 
        {
          path: 'listhistory',
          name: 'listhistory',
          component: () => import('../components/ListComponents/listhistory.vue'),
          meta: { title: '历史记录' },
        },   
      ]
    },
    {
      path: '/listdetail/:id',
      name: 'listdetail',
      component: () => import('../components/ListComponents/listdetail.vue'),
      meta: { title: '列表详情' },
    },
    {
      path: '/Own',
      name: 'OwnView',
      component: OwnViewLayout,
      meta: { title: '个人中心', id: 3 },
    },
    {
      path: '/power',
      name: 'power',
      component: () => import('../views/MainView/rankView.vue'),
      meta: { title: '排行榜' },
    },
    {
      path: '/money',
      name: 'moneyView',
      component: () => import('../views/MainView/moneyView.vue'),
      meta: { title: '资金管理' },
    },
    {
      path: '/vouchers',
      name: 'vouchers',
      component: () => import('../views/MainView/vouchers.vue'),
      meta: { title: '优惠券' },
    },
    {
      path: '/giftcard',
      name: 'giftcard',
      component: () => import('../views/MainView/giftcardView.vue'),
      meta: { title: '礼品卡' },
    },
    {
      path: '/Details/:id',
      name: 'DetailsView',
      component: DetailsViewLayout,
      meta: { title: '详情页' },
    },
    {
      path: '/snackDetail/:id',
      name: 'snackDetail',
      component: () => import('../components/DetailsComponents/snackDetail.vue'),
      meta: { title: '零食详情' },
    },
    {
      path: '/doubleDetail/:id',
      name: 'doubleDetail',
      component: () => import('../components/DetailsComponents/doubleDetail.vue'),
      meta: { title: '双倍详情' },
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
      meta: { title: '404 - 页面未找到' },
    },
    {
      path: '/:catchAll(.*)*', // 使用带有自定义正则表达式的参数来捕获所有未定义的路由
      redirect: '/404',
    }
  ],
})

// 全局守卫，每次跳转都会执行
router.beforeEach((to, from, next) => {
  // 如果存在meta信息且meta.title存在，则更新页面标题
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next() // 确保导航能继续
})

export default router
