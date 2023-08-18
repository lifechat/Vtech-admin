import { request } from '@/utils/http/index'

export interface IpropsLogin {
  code: string
  username: string
  password: string
  uuid: string
}

/**
 * 用户登录
 *
 * @param data
 */
export function requestLogin(data: IpropsLogin) {
  return request.post({
    url: '/login',
    headers: {
      withToken: false,
    },
    method: 'post',
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

/**
 * 退出系统
 */
export function requestLogout() {
  return request.post({
    url: '/logout',
  })
}

/**
 * 获取验证码
 */
export function requestCodeImg() {
  return request.get({
    url: '/captchaImage',
    headers: {
      withToken: false,
    },
    timeout: 20000,
  })
}
