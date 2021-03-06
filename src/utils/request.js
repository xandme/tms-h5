import axios from 'axios'
import {Toast} from 'vant'
import {Dialog} from 'vant'
import store from '@/store'


const baseurl = "http://localhost:8099";
// const baseurl = "http://129.204.230.203:8099";
const userInfo = JSON.parse(sessionStorage.getItem("user"))

// 创建axios实例
const service = axios.create({
  baseURL: baseurl,
  timeout: 5000 // 超时时间
})

service.interceptors.request.use(
  config => {
    if (store.getters.userInfo) {
      const user = store.getters.userInfo
      console.log(user)
      config.headers['user_id'] = user.userId
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    console.log(response)
    // error_code 不为1000抛错
    const res = response.data
    if (res.error_code === 1001) {
      Toast.fail(res.error_msg)
      return Promise.reject(res.error_msg)
    } else if (res.error_code === 1000){
      return response.data
    } else {
      Toast.fail('请求失败')
      return Promise.reject('error')
    }
  },
  error => {
    console.log(error)
    console.log("系统繁忙")
    Toast.fail("系统繁忙")
  }
)

export default service
