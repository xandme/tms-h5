import request from '@/utils/request'

export function seatsArea(query) {
    return request({
        url: '/seats/area',
        method: 'get',
        params: query
    })
}
