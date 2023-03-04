import { requestPassport } from '@/api/login'
import { defineStore } from 'pinia'

export const loginStore = defineStore('loginStore', {
  state: () => {
    return {
      isRepeatUsername: false,
    }
  },
  getters: {
    isRepeatUsername: (state) => state.isRepeatUsername,
  },
  actions: {
    async getRequestPassport(username: string) {
      try {
        const res = await requestPassport(username)
        const { status } = res
        if (status == 200) {
          return true
        } else {
          return false
        }
      } catch (error) {
        ElMessage({
          message: '接口错误',
          type: 'error',
        })
      }
    },
  },
})
