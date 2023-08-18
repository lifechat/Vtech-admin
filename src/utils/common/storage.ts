import Cookies from 'js-cookie'

/**
 * window.localStorage 浏览器永久缓存
 *
 * @function set 设置永久缓存
 * @function get 获取永久缓存
 * @function remove 移除永久缓存
 * @function clear 移除全部永久缓存
 */

export const Storage = {
  setKey(key: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return `${__TECH_NAME__}:${key}`
  },
  // 设置永久缓存
  set<T>(key: string, val: T) {
    window.localStorage.setItem(Storage.setKey(key), JSON.stringify(val))
  },
  // 获取永久缓存
  get(key: string) {
    const json = <string>window.localStorage.getItem(Storage.setKey(key))
    return JSON.parse(json)
  },
  // 移除永久缓存
  remove(key: string) {
    window.localStorage.removeItem(Storage.setKey(key))
  },
  // 移除全部永久缓存
  clear() {
    window.localStorage.clear()
  },
}

/**
 * window.sessionStorage 浏览器临时缓存
 *
 * @function set 设置临时缓存
 * @function get 获取临时缓存
 * @function remove 移除临时缓存
 * @function clear 移除全部临时缓存
 */
export const Session = {
  // 设置临时缓存
  set<T>(key: string, val: T) {
    if (key === 'token') return Cookies.set(key, val as any)
    window.sessionStorage.setItem(Storage.setKey(key), JSON.stringify(val))
  },
  // 获取临时缓存
  get(key: string) {
    if (key === 'token') return Cookies.get(key)
    const json = <string>window.sessionStorage.getItem(Storage.setKey(key))
    return JSON.parse(json)
  },
  // 移除临时缓存
  remove(key: string) {
    if (key === 'token') return Cookies.remove(key)
    window.sessionStorage.removeItem(Storage.setKey(key))
  },
  // 移除全部临时缓存
  clear() {
    Cookies.remove('token')
    window.sessionStorage.clear()
  },
}
