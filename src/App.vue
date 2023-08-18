<template>
  <el-config-provider>
    <router-view v-show="true" />
    <LockScreen v-show="false" />
  </el-config-provider>
</template>
<script setup lang="ts">
import {
  createApp,
  reactive,
  defineAsyncComponent,
  onMounted,
  onUnmounted,
  toRefs,
  ref,
  watchEffect,
  watch,
  computed,
} from 'vue'

// 引入组件
const LockScreen = defineAsyncComponent(() => import('@/layout/lockScreen/index.vue'))

// 定义变量内容

// 监听路由变化
// watch()
</script>

<style lang="less" scoped></style>
