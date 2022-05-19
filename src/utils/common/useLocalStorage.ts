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
   *
   * @param key
   * @param value
   */
  function setItem(key: string, value: any) {
    value = stringify(value)
    window.localStorage.setItem(key, value)
  }

  /**
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

  return {
    setItem,
    getItem,
  }
}
