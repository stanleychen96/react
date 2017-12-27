import imgTry from './Img';

export default {

  namespace: 'instagram',

  state: {
    imgSource: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const img = yield call(imgTry);
      yield put({
        type: 'saveInstagram',
        payload: img,
      });
    },
  },

  reducers: {
    saveInstagram(state, { payload }) {
      return {
        ...state,
        imgSource: payload,
      };
    },
  },

};
