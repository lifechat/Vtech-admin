<template>
  <div class="h100">
    <el-aside>
      <Logo />
      <el-scrollbar
        ref="layoutAsideScrollbarRef"
        class="flex-auto"
        @mouseenter="onAsideEnterLeave(true)"
        @mouseleave="onAsideEnterLeave(false)"
      >
        侧边栏组件
      </el-scrollbar>
    </el-aside>
  </div>
</template>
<script setup lang="ts" name="layoutAside">
import { defineAsyncComponent, reactive, computed, watch, onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import mittBus from '@/utils/common/mitt'
import { useRoutesList } from '@/store/routeList'
import { useThemeConfig } from '@/store/themeConfig'
import { useTagsViewRoutes } from '@/store/tagsViewRoutes'

// 引入组件
const Logo = defineAsyncComponent(() => import('@/layout/logo/index.vue'))

// 定义变量内容
const layoutAsideScrollbarRef = ref()
const stores = useRoutesList()
const storesThemeConfig = useThemeConfig()
const storesTagsViewRoutes = useTagsViewRoutes()

const { themeConfig } = storeToRefs(storesThemeConfig)

const state = reactive<AsideState>({
  menuList: [],
  clientWidth: 0,
})
// const setShowLogo = computed(() => {
//   let {} = useThemeConfig
// })

// 鼠标移入、移出
const onAsideEnterLeave = (bool: boolean) => {
  let { layout } = themeConfig.value
  if (layout !== 'columns') return false
  if (!bool) mittBus.emit('restoreDefault')
  // 开启 `分栏菜单鼠标悬停预加载` 才设置，防止 columnsAside.vue 监听 pinia.state
  if (themeConfig.value.isColumnsMenuHoverPreload) stores.setColumnsMenuHover(bool)
}
</script>
