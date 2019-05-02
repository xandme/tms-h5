import request from '@/utils/request'

export function arrangeList(query) {
    return request({
        url: '/arrangement/list',
        method: 'get',
        params: query
    })
}
