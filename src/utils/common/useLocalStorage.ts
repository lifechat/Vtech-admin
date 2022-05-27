const parse = (str: string) => {
  let value
  try {
    value = JSON.parse(str)
  } catch (error) {
    value = null
  }
  return value
}

const stringify = (obj: any) => {
  let value
  try {
    value = JSON.stringify(obj)
  } catch {
    value = null
  }
  return value
}

/**
 *
 */
export default function useLocalStorage() {
  /**
   * 设置localstorage纪录
   *
   * @param key
   * @param value
   */
  function setItem(key: string, value: any) {
    value = stringify(value)
    window.localStorage.setItem(key, value)
  }

  /**
   * 获取某个字段的value
   *
   * @param key
   */
  function getItem(key: string) {
    let value = window.localStorage.getItem(key)
    if (value) {
      value = parse(value)
    }
    return value
  }

  /**
   * 清除所有localstorage字段
   */
  function clear() {
    window.localStorage.clear()
  }

  /**
   * @param key
   * 移除某个字段纪录
   */
  function remove(key: string) {
    localStorage.removeItem(key)
  }

  /**
   * 获取所有字段
   */
  function getAll() {
    const ret = {}
    forEach((key: any, val: any) => {
      ret[key] = val
    })
    return ret
  }

  /**
   * 遍历所有的字段
   *
   * @param callback
   */
  function forEach(callback: any) {
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i)
      callback(key, getItem(key as string))
    }
  }

  return {
    setItem,
    getItem,
    clear,
    remove,
    getAll,
  }
}
