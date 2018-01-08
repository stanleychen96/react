
export default {
  namespace: 'content',

  state: {
    contentInfo: [
      {
        key: 'index0',
        labelA: 'LIFESTYLE',
        labelB: 'FASHION',
        title: 'Best coffee in town',
        author: 'Lisbeth',
        commentsNum: 7,
        firstword: 'T',
        content: 'o be successful, a home office needs to be both functional and efficient. You are going to be working in this environment for several hours each day so it is important that you make it as comfortable as possible. You can design a practical and comfortable home office by taking a few steps towards finding the right space, furnishing it, and making it attractive and efficient.',
      },
    ],
  },

  effects: {
    * fetchImg(_, { put }) {
      // const img = yield call();
      yield put({
        type: 'saveInstagram',
        payload: [],
      });
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
