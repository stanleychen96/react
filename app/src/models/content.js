/**
 * 2018-01-02 StanleyChen
 */

export default {
  namespace: 'content',

  state: {
    contentInfo: [
      {
        id: 0,
        key: 'index0',
        labelA: 'LIFESTYLE',
        labelB: 'FASHION',
        title: 'Best coffee in town',
        author: 'Lisbeth',
        commentsNum: 7,
        firstWord: 'T',
        src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/lisbeth-demo1-1.3-1500x720.jpg',
        words: 'o be successful, a home office needs to be both functional and efficient. You are going to be working in this environment for several hours each day so it is important that you make it as comfortable as possible. You can design a practical and comfortable home office by taking a few steps towards finding the right space, furnishing it, and making it attractive and efficient.',
      },
      {
        id: 1,
        key: 'index1',
        labelA: 'LIFESTYLE',
        labelB: 'FASHION',
        title: 'Best coffee in townq',
        author: 'Lih',
        commentsNum: 90,
        firstWord: 'X',
        src: 'http://lisbeth.premiumcoding.com/wp/wp-content/uploads/2017/09/lisbeth-demo1-1.3-1500x720.jpg',
        words: 'o be successful, a home office needs to be both functional and efficient. You are going to be working in this environment for several hours each day so it is important that you make it as comfortable as possible. You can design a practical and comfortable home office by taking a few steps towards finding the right space, furnishing it, and making it attractive and efficient.',
      },
    ],
  },

  effects: {
    * fetchContent(_, { put }) {
      // const content = yield call();
      yield put({
        type: 'fetchContentInfo',
        payload: '',
      });
    },
  },

  reducers: {
    fetchContentInfo(state, action) {
      return {
        ...state,
        contentInfo: action.payload,
      };
    },
  },

};
