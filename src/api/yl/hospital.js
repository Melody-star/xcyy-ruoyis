import request from '@/utils/request'

// 查询医院表列表
export function listHospital(query) {
  return request({
    url: '/yl/hospital/list',
    method: 'get',
    params: query
  })
}

// 查询医院表详细
export function getHospital(id) {
  return request({
    url: '/yl/hospital/' + id,
    method: 'get'
  })
}

// 新增医院表
export function addHospital(data) {
  return request({
    url: '/yl/hospital',
    method: 'post',
    data: data
  })
}

// 修改医院表
export function updateHospital(data) {
  return request({
    url: '/yl/hospital',
    method: 'put',
    data: data
  })
}

// 删除医院表
export function delHospital(id) {
  return request({
    url: '/yl/hospital/' + id,
    method: 'delete'
  })
}
