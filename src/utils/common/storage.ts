/**
 *
 * @author lifechat
 * @description 本地存储实现,封装localStorage和sessionStorage
 * @useage store.set(),store.get(),store.has(),store.remove()
 */

const store: any = {
  storage: window.localStorage,
  session: {
    storage: window.sessionStorage,
  },
}

const api: any = {
  set(key: any, val: any) {
    if (this.disabled) {
      return
    }

    if (val === undefined) {
      this.remove(key)
    }

    this.storage.setItem(key, serialize(val))
  },

  get(key: any, def: any) {
    if (this.disabled) {
      return def
    }
    const val = deserialize(this.storage.getItem(key))
    return val === undefined ? def : val
  },
  has(key: any) {
    return this.get(key) !== undefined
  },
  remove(key: any) {
    if (this.disabled) {
      return
    }
    this.storage.removeItem(key)
  },
  clear() {
    if (this.disabled) {
      return
    }
    this.storage.clear()
  },
  getAll() {
    if (this.disabled) {
      return null
    }
    const ret = {}
    this.forEach((key: any, val: any) => {
      ret[key] = val
    })
    return ret
  },
  forEach(callback: any) {
    if (this.disabled) {
      return
    }
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i)
      callback(key, this.get(key))
    }
  },
}

/**
 * @description 序列化
 * @param val
 */
function serialize(val: any) {
  return JSON.stringify(val)
}

/**
 *
 * @param val
 */
function deserialize(val: any) {
  if (typeof val !== 'string') {
    return undefined
  }

  try {
    return JSON.parse(val)
  } catch (error) {
    return val || undefined
  }
}
Object.assign(store, api)
Object.assign(store.session, api)

export { store }
