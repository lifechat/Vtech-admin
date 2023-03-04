import { requestPassport } from '@/api/login'
import { defineStore, mapState } from 'pinia'

export const loginStore = defineStore('loginStore', {
  state: () => {
    return {
      isRepeatUsername: false,
    }
  },
  getters: {},
  actions: {
    async getRequestPassport(username: string) {
      try {
        const res = await requestPassport(username)
        const { status } = res
        if (status == 200) {
          this.isRepeatUsername = !this.isRepeatUsername
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
