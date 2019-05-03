import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/list',
    method: 'get',
    params: query
  })
}
