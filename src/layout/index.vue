<template>
  <component :is="layouts[themeConfig.layout]"></component>
</template>

<script lang="ts" setup name="layout">
import { onBeforeMount, onUnmounted, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { Storage } from '@/utils/common/storage'
import { useThemeConfig } from '@/store/themeConfig'
import { onMounted } from 'vue'
import mittBus from '@/utils/common/mitt'

// 引入对应的组件
const layouts: any = {
  defaults: defineAsyncComponent(() => import('@/layout/main/defaults.vue')),
  classic: defineAsyncComponent(() => import('@/layout/main/classic.vue')),
  columns: defineAsyncComponent(() => import('@/layout/main/columns.vue')),
}

// 定义变量内容
const storesThemeConfig = useThemeConfig()
const { themeConfig } = storeToRefs(storesThemeConfig)

// 窗口大小改变时(适配移动端)
const onLayoutResize = () => {
  if (!Storage.get('oldLayout')) Storage.set('oldLayout', themeConfig.value.layout)
  const clientWidth = document.body.clientWidth
  if (clientWidth < 1000) {
    themeConfig.value.isCollapse = false
    mittBus.emit('layoutMobileResize', {
      layout: 'defaults',
      clientWidth,
    })
  } else {
    mittBus.emit('layoutMobileResize', {
      layout: Storage.get('oldLayout') ? Storage.get('oldLayout') : themeConfig.value.layout,
      clientWidth,
    })
  }
}

// 页面加载前
onBeforeMount(() => {
  onLayoutResize()
  window.addEventListener('resize', onLayoutResize)
})

//页面卸载时
onMounted(() => {
  window.removeEventListener('resize', onLayoutResize)
})
</script>
