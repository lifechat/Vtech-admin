<template>
  <el-breadcrumb separator="/" class="bread">
    <el-breadcrumb-item v-for="item in navs" :key="item.path" :to="{ path: item.path }">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup script="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const useroutes = useRoute()
let routes = useroutes.matched
routes[0].path = '/'

const navs = computed(() => {
  return routes
})
</script>
<style scoped lang="scss">
.bread {
  margin-bottom: 10px;
}
</style>
