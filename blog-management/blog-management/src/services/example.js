/**
 * 2018-01-12 StanleyChen
 */

import request from '../utils/request';

export function query() {
  return request('/api/users');
}
