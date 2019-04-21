import axios from 'axios'

const baseurl = "https://localhost:8099"

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
    if(res.error_code !== 1000) {
      console.log('请求失败')
      this.$toast.fail("请求失败")
    }
  },
  error => {
    console.log(error)
    console.log("系统繁忙")
    this.$toast.fail("系统繁忙")
  }
)

export default service
