<template>
  <el-main class="layout-main">
    <el-scrollbar
      ref="layoutMainScrollbarRef"
      class="layout-main-scroll layout-backtop-header-fixed"
      wrap-class="layout-main-scroll"
      view-class="layout-main-scroll"
    >
      <div>内容部分</div>
    </el-scrollbar>
    <el-backtop :target="setBacktopClass"></el-backtop>
  </el-main>
</template>

<script lang="ts" setup name="layoutMain">
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useThemeConfig } from '@/store/themeConfig'
import { NextLoading } from '@/utils/common/loading'
import { useTagsViewRoutes } from '@/store/tagsViewRoutes'

// 定义变量内容
const route = useRoute()
const storesTagsViewRoutes = useTagsViewRoutes()
const storesThemeConfig = useThemeConfig()
const { themeConfig } = storeToRefs(storesThemeConfig)
const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes)

// 设置 Backtop 回到顶部
const setBacktopClass = computed(() => {
  if (themeConfig.value.isFixedHeader) return `.layout-backtop-header-fixed .el-scrollbar__wrap`
  else return `.layout-backtop .el-scrollbar__wrap`
})
</script>
