import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/member/list',
    method: 'get',
    params: query
  })
}

export function getDetail(id) {
  return request({
    url: '/member/' + id + '/detail',
    method: 'get'
  })
}

export function addMember(data) {
  return request({
    url: '/member/add',
    method: 'post',
    data
  })
}
