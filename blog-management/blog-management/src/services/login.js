/**
 * 2018-01-12 StanleyChen
 */

import request from '../utils/request';

export async function createAdmin(params) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: params,
  })
}
