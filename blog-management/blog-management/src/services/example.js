/**
 * 2018-01-12 StanleyChen
 */

import request from '../utils/request';

export async function AdminLogin(params) {
    return request({
      url: '/adminLogin',
      method: 'post',
      data: params,
    });
    console.log('params.....',params); // eslint-disable-line
  }
