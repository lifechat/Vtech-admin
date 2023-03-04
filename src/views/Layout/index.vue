<template>
  <div class="layout-menu">
    <Menu :is-close="isClose"></Menu>
  </div>
  <div class="layout-content">
    <Content :is-close="isClose" @change="change"></Content>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Menu from './Menu.vue'
import Content from './Content.vue'

// 定义变量
let isClose = ref(false)
// 修改变量
const change = () => {
  isClose.value = !isClose.value
}
</script>

<style lang="less" scoped>
.layout {
  &-menu {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #112f50;
  }

  &-content {
    padding-left: 200px;
  }
}
</style>
