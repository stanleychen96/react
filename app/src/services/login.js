/**
 * 2018-01-11 StanleyChen
 */

import request from '../utils/request';

export function loginAdmin(params) {
  return request('/api/users', {
    method: 'get', // post
    body: JSON.stringify(params),
  });
}
