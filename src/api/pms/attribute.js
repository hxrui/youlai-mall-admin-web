import request from '@/utils/request'



export function list(params) {
  return request({
    url: '/mall-pms/api/v1/attributes',
    method: 'get',
    params: params
  })
}

export function saveBatch(data) {
  return request({
    url: '/mall-pms/api/v1/attributes',
    method: 'post',
    data: data
  })
}


