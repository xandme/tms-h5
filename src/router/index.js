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
      path: '/theaterList',
      name: 'theaterList',
      component: () => import('@/components/common/theaterList')
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
      path: '/order',
      name: 'order',
      component: () => import('@/components/personal/order')
    }
  ]
})
