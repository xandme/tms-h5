import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/filminfo/list',
    method: 'get',
    params: query
  })
}
