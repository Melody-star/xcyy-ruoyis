import request from '@/utils/request'

// 查询聊天列表
export function listChat(query) {
  return request({
    url: '/yl/chat/list',
    method: 'get',
    params: query
  })
}

// 查询聊天详细
export function getChat(id) {
  return request({
    url: '/yl/chat/' + id,
    method: 'get'
  })
}

// 新增聊天
export function addChat(data) {
  return request({
    url: '/yl/chat',
    method: 'post',
    data: data
  })
}

// 修改聊天
export function updateChat(data) {
  return request({
    url: '/yl/chat',
    method: 'put',
    data: data
  })
}

// 删除聊天
export function delChat(id) {
  return request({
    url: '/yl/chat/' + id,
    method: 'delete'
  })
}
