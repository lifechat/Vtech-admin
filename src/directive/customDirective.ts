import type { App } from 'vue'

/**
 * 用户权限指令
 *
 * @param app
 * @directive 单个权限验证（v-auth="xxx"）
 * @directive 多个权限验证，满足一个则显示（v-auths="[xxx,xxx]"）
 * @directive 多个权限验证，全部满足则显示（v-auth-all="[xxx,xxx]"）
 */
export function authDirective(app: App) {
  // 单个权限验证(v-auth="")
  app.directive('auth', {
    // mounted(el, binding) {},
  })

  // 多个权限验证,满足一个则显示（v-auths="[xxx,xxx]")
  app.directive('auths', {
    // mounted(el, binding) {},
  })
  // 多个权限验证，全部满足则显示（v-auth-all="[xxx,xxx]"）
  app.directive('auth-all', {
    // mounted(el, binding) {},
  })
}
