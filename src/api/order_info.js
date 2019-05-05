import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/list',
    method: 'get',
    params: query
  })
}

export function fetchfilmOrderList(query) {
  return request({
    url: '/order/film/list',
    method: 'get',
    params: query
  })
}

export function confirmSeatSelected(data) {
  return request({
    url: '/order/confirm/seat',
    method: 'post',
    data
  })
}
