/**
 * 2018-01-12 StanleyChen
 */

import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { createAdmin } from '../services/login';

export default {
  namespace: 'login',

  state: {},

  effects: {
    *adminLogin( payload, { call, put }) {
      const params = {
        name: payload.payload.username,
        password: payload.payload.password,
      }
      const result = yield call(createAdmin, params);
      console.log('result.status', result.status)
      if (result.status === 'Succeed') {
        yield put(routerRedux.push('/editor'))
      } else if (result.status === 'not found user'){
        message.error('用户名不存在！')
      } else {
        message.error('密码错误！')
      }
    }
  },

  reducers: {},

};
