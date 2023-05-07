import request from '@/utils/request'

// 查询二级科室表列表
export function listSecond(query) {
  return request({
    url: '/yl/second/list',
    method: 'get',
    params: query
  })
}

// 查询二级科室表详细
export function getSecond(id) {
  return request({
    url: '/yl/second/' + id,
    method: 'get'
  })
}

// 新增二级科室表
export function addSecond(data) {
  return request({
    url: '/yl/second',
    method: 'post',
    data: data
  })
}

// 修改二级科室表
export function updateSecond(data) {
  return request({
    url: '/yl/second',
    method: 'put',
    data: data
  })
}

// 删除二级科室表
export function delSecond(id) {
  return request({
    url: '/yl/second/' + id,
    method: 'delete'
  })
}
