<script setup lang="ts">
import { createApp, reactive, onMounted, onUnmounted, toRefs, ref, watchEffect, watch, computed } from 'vue'
</script>

<template>
  <div>初始化界面</div>
  <router-view />
</template>

<style lang="less" scoped>
body {
  background: skyblue;
}
</style>
