import type { AppRouteRecordRaw } from '@/router/types'

// root
export const rootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Invite',
  component: () => import('@/pages/invite/Invite.vue'),
  meta: {
    title: '邀请',
  },
}
// todolist
export const todoRoute: AppRouteRecordRaw = {
  path: '/todo',
  name: '列表项',
  component: () => import('@/pages/todoList/todolist.vue'),
  meta: {
    title: 'tolist',
  },
}

// login
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/login/login.vue'),
  meta: {
    title: '登录',
  },
}

export const basicRoutes = [rootRoute, todoRoute, LoginRoute]
