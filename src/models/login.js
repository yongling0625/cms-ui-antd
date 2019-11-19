import { message } from 'antd';
import { router } from 'umi';
import Cookies from 'js-cookie';
import { login } from '@/services/login';

export default {
  namespace: 'login',

  state: {
    token: null,
  },

  effects: {
    * login({ payload }, { call, put }) {
      const res = yield call(login, payload);
      if (res.success) {
        Cookies.set('token', res.data.token); // 放置token到Cookie
        sessionStorage.setItem('user', payload.account); // 保存用户到本地会话
        sessionStorage.setItem('userId', res.data.token.userId); // 保存用户ID到本地会话
        router.push('/');
      } else {
        message.info(res.msg);
      }
    },
  },

  reducers: {
    saveToken(state, action) {
      return { ...state, token: action.payload };
    },
  },
};
