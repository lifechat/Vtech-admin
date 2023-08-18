/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createI18n } from 'vue-i18n'
import apinia from '@/store/index'
import { storeToRefs } from 'pinia'
import { App } from 'vue'
import zh from './lang/zh-cn'
import en from './lang/en'
import { useThemeConfig } from '@/store/themeConfig'

// 定义变量内容
const messages: any = {
  zh,
  en,
}
const itemize = { en: [], 'zh-cn': [] } as any

// 读取 pinia 默认语言
const stores = useThemeConfig(apinia)
const { themeConfig } = storeToRefs(stores)

// 导出语言国际化
// https://vue-i18n.intlify.dev/guide/essentials/fallback.html#explicit-fallback-with-one-locale
export const i18n = createI18n({
  legacy: false,
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false,
  locale: themeConfig.value.globalI18n,
  messages,
})

/**
 * @param app
 * @description config router
 */
export function setupLanguage(app: App<Element>) {
  app.use(i18n)
}
