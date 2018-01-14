/**
 * 2018-1-10 StanleyChen
 */
import request from '../utils/request';

export async function AdminLogin(params) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: params,
  });
}

// import axios from 'axios';

// export async function AdminLogin(payload) {
//   const response = await axios.post('http://192.168.0.113:8080/admin/login', {
//     name: payload.name,
//     password: payload.password,
//   })
//   return response.data
// }
