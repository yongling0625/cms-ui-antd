import request from '@/utils/request';

export async function fetchMenuData() {
  return request('/menu/findMenuTree');
}
