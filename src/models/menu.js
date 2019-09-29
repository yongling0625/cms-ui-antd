import { fetchMenuData } from '@/services/menu';

export default {
  namespace: 'menu',

  state: {
    menuData: [],
    breadcrumbNameMap: {},
  },

  effects: {
    * fetchMenuData({ payload }, { call, put }) {
      const response = yield call(fetchMenuData);
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, menuData: action.payload };
    },
  },
};
