<template>
  <div class="layout-navbars-container">
    <BreadcrumbIndex />
    <TagsView />
  </div>
</template>
<script lang="ts" setup name="layoutNavBars">
import { defineAsyncComponent, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeConfig } from '@/store/themeConfig'
</script>

<style scoped lang="scss">
.layout-navbars-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
