import { request } from '@/utils/http/index'

/**
 * 用户登录
 *
 * @param data
 */
export function requestLogin(data: any) {
  return request.post({
    url: '/passport/login',
    data,
  })
}
/**
 * 用户注册
 *
 * @param data
 */
export function requestRegister(data: any) {
  return request.post({
    url: '/passport/regist',
    data,
  })
}

/**
 * 用户名是否存在
 *
 * @param username
 */
export function requestPassport(username: string) {
  return request.get({
    url: `/passport/usernameIsExist?username=${username}`,
  })
}
