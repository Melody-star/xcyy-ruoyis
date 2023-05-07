import request from '@/utils/request'

// 查询病人列表
export function listPatient(query) {
  return request({
    url: '/yl/patient/list',
    method: 'get',
    params: query
  })
}

// 查询病人详细
export function getPatient(id) {
  return request({
    url: '/yl/patient/' + id,
    method: 'get'
  })
}

// 新增病人
export function addPatient(data) {
  return request({
    url: '/yl/patient',
    method: 'post',
    data: data
  })
}

// 修改病人
export function updatePatient(data) {
  return request({
    url: '/yl/patient',
    method: 'put',
    data: data
  })
}

// 删除病人
export function delPatient(id) {
  return request({
    url: '/yl/patient/' + id,
    method: 'delete'
  })
}
