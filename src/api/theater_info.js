import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/theaterinfo/list',
    method: 'get',
    params: query
  })
}

export function getArrangementList(id) {
  return request({
    url: '/theaterinfo/arrangement/' + id + '/list',
    method: 'get'
  })
}

export function getTheaterDetail(id) {
  return request({
    url: '/theaterinfo/' + id + '/detail',
    method: 'get'
  })
}

export function getArrangementDate(id) {
  return request({
    url: '/theaterinfo/arrangement/' + id + '/date',
    method: 'get'
  })
}

export function getHallList(id) {
  return request({
    url: '/theaterinfo/hall/' + id + '/list',
    method: 'get'
  })
}
