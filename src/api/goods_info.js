import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/goodsinfo/list',
    method: 'get',
    params: query
  })
}

export function checkOut(data) {
  return request({
      url: '/goodsinfo/order/checkout',
    method: 'post',
    data
  })
}
