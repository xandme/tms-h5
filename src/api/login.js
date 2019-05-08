import request from '@/utils/request'

export function requestLogin(param) {
	return request({
		url: '/login/loginCheck',
		method: 'post',
		params: param
	})
}
