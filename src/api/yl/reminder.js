import request from '@/utils/request'

// 查询消息表列表
export function listReminder(query) {
  return request({
    url: '/yl/reminder/list',
    method: 'get',
    params: query
  })
}

// 查询消息表详细
export function getReminder(id) {
  return request({
    url: '/yl/reminder/' + id,
    method: 'get'
  })
}

// 新增消息表
export function addReminder(data) {
  return request({
    url: '/yl/reminder',
    method: 'post',
    data: data
  })
}

// 修改消息表
export function updateReminder(data) {
  return request({
    url: '/yl/reminder',
    method: 'put',
    data: data
  })
}

// 删除消息表
export function delReminder(id) {
  return request({
    url: '/yl/reminder/' + id,
    method: 'delete'
  })
}
