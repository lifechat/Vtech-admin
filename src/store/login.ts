import { requestLogin, IpropsLogin } from '@/api/login'
import { setToken } from '@/utils/common/auth'
import { errorMsg, messageTips } from '@/utils/common/common'
import { defineStore } from 'pinia'

export const loginStore = defineStore('loginStore', {
  state: () => {
    return {
      isRepeatUsername: false,
    }
  },
  getters: {},
  actions: {
    async getLoginInfo(data: IpropsLogin) {
      const res = await requestLogin(data)
      const { code, token, msg } = res
      if (code === 200) {
        setToken(token)
        messageTips('success', msg, '进入后台管理系统')
      }
    },
  },
})
