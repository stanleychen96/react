
export default {
  namespace: 'headerbar',

  state: {
    src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/lisbeth-logo-new-second.png',
    alt: 'csf blog',
  },

  effects: {
    * fetchImg(_, { put }) {
      // const img = yield call();
      yield put({
        type: 'changeLogo',
        payload: [],
      });
    },
  },

  reducers: {
    changeLogo(state, action) {
      return {
        ...state,
        src: action.payload.src,
        alt: action.payload.alt,
      };
    },
  },

};
