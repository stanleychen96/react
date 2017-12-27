import imgTry from './imgTry';

export default {

  namespace: 'instagram',

  state: {
    imgSource: [
      { src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/10/lisbeth-demo1-16.3.jpg', key: 'index0', alt: 'index0' },
      { src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/08/lisbeth-demo1-14.jpg', key: 'index1', alt: 'index1' },
      { src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2016/09/lisbeth-demo1-16.1.jpg', key: 'index2', alt: 'index2' },
    ],
  },

  effects: {
    * fetchImg({ payload }, { call, put }) {  // eslint-disable-line
      const img = yield call(imgTry);
      yield put({
        type: 'saveInstagram',
        payload: img,
      });
      console.log('....');
    },
  },

  reducers: {
    saveInstagram(state, action) {
      return {
        ...state,
        imgSource: action.payload,
      };
    },
  },

};
