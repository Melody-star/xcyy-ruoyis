import request from '@/utils/request'

// 查询科室表列表
export function listDepartment(query) {
  return request({
    url: '/yl/department/list',
    method: 'get',
    params: query
  })
}

// 查询科室表详细
export function getDepartment(id) {
  return request({
    url: '/yl/department/' + id,
    method: 'get'
  })
}

// 新增科室表
export function addDepartment(data) {
  return request({
    url: '/yl/department',
    method: 'post',
    data: data
  })
}

// 修改科室表
export function updateDepartment(data) {
  return request({
    url: '/yl/department',
    method: 'put',
    data: data
  })
}

// 删除科室表
export function delDepartment(id) {
  return request({
    url: '/yl/department/' + id,
    method: 'delete'
  })
}
