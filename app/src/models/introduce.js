/**
 * 2018-01-01 StanleyChen
 */

export default {
  namespace: 'introduce',

  state: {
    src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/avatar2.jpg',
    name: 'Libeth',
    myWord: 'I am a blogger living in New York. This is my blog, I am a blogger living in New York. Never miss out on new food stuff & healthy recipes.',
  },

  effects: {
    * fetchImg(_, { put }) {  // eslint-disable-line
      // const img = yield call();
      yield put({
        type: 'saveInstagram',
        payload: [],
      });
      console.log('payload');
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
