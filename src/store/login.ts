import { requestLogin, requestPassport } from '@/api/login'
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
    async getLoginInfo(data: any) {
      const res = await requestLogin(data)
      const { status } = res
      if (status === 200) {
        messageTips('success', '登录成功', '进入后台管理系统')
      }
    },
  },
})
