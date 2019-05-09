import request from '@/utils/request'

export function requestLogin(param) {
	return request({
		url: '/login/loginCheck',
		method: 'post',
		params: param
	})
}

export function getLogin(data) {
  return request({
    url: '/diy/login',
    method: 'post',
    data
  })
}
