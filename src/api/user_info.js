import request from '@/utils/request'

export function getUserOne(userId) {
	return request({
		url: '/user/' + userId + '/detail',
		method: 'get'
	})
}
