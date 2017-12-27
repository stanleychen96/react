import request from '../utils/request';

export function query(data) {
  return request('/api/users', {
    method: 'get', // post
    body: JSON.stringify(data),
  });
}
