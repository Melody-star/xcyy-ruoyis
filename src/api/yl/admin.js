import request from '@/utils/request'

// 查询管理员表列表
export function listAdmin(query) {
  return request({
    url: '/yl/admin/list',
    method: 'get',
    params: query
  })
}

// 查询管理员表详细
export function getAdmin(id) {
  return request({
    url: '/yl/admin/' + id,
    method: 'get'
  })
}

// 新增管理员表
export function addAdmin(data) {
  return request({
    url: '/yl/admin',
    method: 'post',
    data: data
  })
}

// 修改管理员表
export function updateAdmin(data) {
  return request({
    url: '/yl/admin',
    method: 'put',
    data: data
  })
}

// 删除管理员表
export function delAdmin(id) {
  return request({
    url: '/yl/admin/' + id,
    method: 'delete'
  })
}
