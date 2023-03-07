<template>
  <div class="layout-menu">
    <Menu :is-close="isClose"></Menu>
  </div>
  <div ref="headBar" class="layout-content">
    <Content :is-close="isClose" @change="change"></Content>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Menu from './Menu.vue'
import Content from './Content.vue'

// 定义变量
let isClose = ref(false)

let headBar = ref()
// 修改变量
const change = () => {
  isClose.value = !isClose.value
  let headBarProxy = headBar.value

  if (isClose.value) {
    headBarProxy.style.paddingLeft = '64px'
    headBarProxy.style.transition = 'all .4s'
  } else {
    headBarProxy.style.paddingLeft = '200px'
    headBarProxy.style.transition = 'all .4s'
  }
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
