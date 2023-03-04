<template>
  <div>登录界面</div>
</template>

<script setup lang="ts">
import { requestPassport } from '@/api/login/index'
import { onMounted } from 'vue'

const getRequestPassport = async () => {
  try {
    const res = await requestPassport('immoc')
    console.log(res)
  } catch (error) {}
}
onMounted(() => {
  getRequestPassport()
})
</script>
<style scoped></style>
