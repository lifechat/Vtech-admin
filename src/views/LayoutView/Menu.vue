<template>
  <el-menu
    :default-active="route.path"
    class="el-menu-vertical-demo"
    :collapse="isClose"
    background-color="#112f50"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item>
      <template #title>
        <span>天天吃货后台系统</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/home">
      <el-icon><Briefcase /></el-icon>
      <span>系统首页</span>
    </el-menu-item>
    <el-sub-menu index="/goods">
      <template #title>
        <el-icon><Grid /></el-icon>
        <span>产品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/goods/list">产品列表</el-menu-item>
        <el-menu-item index="/goods/category">产品分类</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  props: ['isClose'],
  setup() {
    // 定义开关
    // 使用路由
    const route = useRoute()
    return {
      route,
    }
  },
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}
</style>
