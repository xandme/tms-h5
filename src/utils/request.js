import axios from 'axios'
import {Toast} from 'vant'

const baseurl = "http://localhost:8099"

// 创建axios实例
const service = axios.create({
  baseURL: baseurl,
  timeout: 5000 // 超时时间
})

service.interceptors.response.use(
  response => {
    console.log(response)
    // error_code 不为1000抛错
    const res = response.data
    if (res.error_code !== 1000) {
      console.log('请求失败')
      Toast.fail("请求失败")
    } else {
      return response.data
    }
  },
  error => {
    console.log(error)
    console.log("系统繁忙")
    Toast.fail("系统繁忙")
  }
)

export default service
