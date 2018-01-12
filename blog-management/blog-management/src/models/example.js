/**
 * 2018-01-12 StanleyChen
 */

import request from '../utils/request';

export function query(data) {
  return request('/api/users', {
    method: 'get', // post
    body: JSON.stringify(data),
  });
}

export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
