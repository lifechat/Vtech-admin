<template>
  <el-header v-show="!isTagsViewCurrenFull" class="layout-header">
    <NavBarsIndex />
    <div>头部</div>
  </el-header>
</template>

<script setup lang="ts" name="layoutHeader">
import { defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useTagsViewRoutes } from '@/store/tagsViewRoutes'
import { useI18n } from 'vue-i18n'
// 引入对应组件
const NavBarsIndex = defineAsyncComponent(() => import('@/layout/navBars/index.vue'))

// 定义变量内容
const storesTagsViewRoutes = useTagsViewRoutes()
const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes)
</script>
