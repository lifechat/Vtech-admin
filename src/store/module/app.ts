import { defineStore } from 'pinia'
import { store } from '@/store'

interface AppState {}
export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({}),
  getters: {},
  actions: {},
})

export function useAppStoreExport() {
  return useAppStore(store)
}
