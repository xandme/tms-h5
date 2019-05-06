import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/components/common/search')
    },
    {
      path: '/theater',
      name: 'theater',
      component: () => import('@/components/common/theater')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/components/common/payment')
    },
    {
      path: '/arrangementList',
      name: 'arrangementList',
      component: () => import('@/components/common/arrangementList')
    },
    {
      path: '/seatArea',
      name: 'seatArea',
      component: () => import('@/components/common/seatArea')
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('@/components/market/market')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('@/components/personal/personal')
    },
    {
      path: '/personal/info',
      name: 'personalInfo',
      component: () => import('@/components/personal/personalInfo')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/components/personal/setting')
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: () => import('@/components/personal/coupon')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('@/components/personal/member')
    },
    {
      path: '/member/detail',
      name: 'memberDetail',
      component: () => import('@/components/personal/memberDetail')
    },
    {
      path: '/order/all',
      name: 'orderAll',
      component: () => import('@/components/personal/orderAll')
    }
  ]
})
