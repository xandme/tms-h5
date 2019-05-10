import router from './router'
import store from '@/store'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
import {Dialog} from 'vant'
// import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/', '/login', '/device/list'] // 不重定向白名单
const blackList = ['/seatArea', '/personal', '/order'] //重定向名单
router.beforeEach((to, from, next) => {
  // NProgress.start()
  if (blackList.indexOf(to.path) !== -1) {
    if (store.getters.userInfo) {
      next()
    } else {
      Dialog.confirm({
        title: '提示',
        message: '你未登陆，前往登录'
      }).then(() => {
        console.log("跳转到登陆页面")
        next('/login')
      }).catch(() => {
        // on cancel
      });
    }
  } else {
    next()
  }
  //
  // if (false) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //     // NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
  //   } else {
  //     // if (store.getters.roles.length === 0) {
  //     //   store.dispatch('GetInfo').then(res => { // 拉取用户信息
  //     //     next()
  //     //   }).catch((err) => {
  //     //     store.dispatch('FedLogOut').then(() => {
  //     //       Toast(err || 'Verification failed, please login again')
  //     //       next({ path: '/' })
  //     //     })
  //     //   })
  //     // } else {
  //     //   next()
  //     // }
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
  //     // NProgress.done()
  //     // next()
  //   }
  // }
})

// router.afterEach(() => {
//   NProgress.done() // 结束Progress
// })
