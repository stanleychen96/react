/**
 * 2018-1-10 StanleyChen
 */

import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { AdminLogin } from '../services/login';

export default {
  namespace: 'login',

  state: {},

  effects: {
    *adminLogin({ payload }, { call, put, select}) {
      console.log('adminLogin argunment:', payload)
      const result = yield call(AdminLogin, payload);
      console.log('result', result.status)
      if (result.status === 'Succeed') {
        yield put(routerRedux.push('/'))
      } else if (result.status === 'not found user'){
        message.error('用户名不存在！')
      } else {
        message.error('密码错误！')
      }
    }

  },

  reducers: {},
}
