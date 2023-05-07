import request from '@/utils/request'

// 查询账户表列表
export function listAccount(query) {
  return request({
    url: '/yl/account/list',
    method: 'get',
    params: query
  })
}

// 查询账户表详细
export function getAccount(id) {
  return request({
    url: '/yl/account/' + id,
    method: 'get'
  })
}

// 新增账户表
export function addAccount(data) {
  return request({
    url: '/yl/account',
    method: 'post',
    data: data
  })
}

// 修改账户表
export function updateAccount(data) {
  return request({
    url: '/yl/account',
    method: 'put',
    data: data
  })
}

// 删除账户表
export function delAccount(id) {
  return request({
    url: '/yl/account/' + id,
    method: 'delete'
  })
}
