import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/goodsinfo/list',
    method: 'get',
    params: query
  })
}
