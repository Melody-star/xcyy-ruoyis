import request from '@/utils/request'

// 查询病人医生中间表列表
export function listDocpat(query) {
  return request({
    url: '/yl/docpat/list',
    method: 'get',
    params: query
  })
}

// 查询病人医生中间表详细
export function getDocpat(id) {
  return request({
    url: '/yl/docpat/' + id,
    method: 'get'
  })
}

// 新增病人医生中间表
export function addDocpat(data) {
  return request({
    url: '/yl/docpat',
    method: 'post',
    data: data
  })
}

// 修改病人医生中间表
export function updateDocpat(data) {
  return request({
    url: '/yl/docpat',
    method: 'put',
    data: data
  })
}

// 删除病人医生中间表
export function delDocpat(id) {
  return request({
    url: '/yl/docpat/' + id,
    method: 'delete'
  })
}
