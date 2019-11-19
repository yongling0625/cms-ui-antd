import request from '@/utils/request';

export async function login(payload) {
  return request.post('/login', {
    data: {
      username: payload.username,
      password: payload.password,
      captcha: payload.captcha,
    },
  });
}
