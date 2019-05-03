import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/filminfo/list',
    method: 'get',
    params: query
  })
}

export function fetchfilmOrderList(query) {
  return request({
    url: '/filminfo/order/list',
    method: 'get',
    params: query
  })
}

export function getFilmDetail(id) {
  return request({
    url: '/filminfo/' + id + '/detail',
    method: 'get'
  })
}
