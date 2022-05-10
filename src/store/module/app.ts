import { defineStore } from 'pinia'
import { store } from '@/store'

interface AppState {
  darkMode?: unknown
  // Page loading status
  pageLoading: boolean
}
export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    darkMode: undefined,
    pageLoading: false,
  }),
  getters: {},
  actions: {},
})

export function useAppStoreExport() {
  return useAppStore(store)
}
