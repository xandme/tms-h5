import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/theaterinfo/list',
    method: 'get',
    params: query
  })
}
