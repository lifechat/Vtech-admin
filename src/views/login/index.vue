<template>
  <div>
    登录界面
    {{ isRepeatUsername }}
    <button @click="handleClickLogin()">修改</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { loginStore } from '@/store/login'
import { onMounted } from 'vue'

const stores = loginStore()
const { isRepeatUsername } = storeToRefs(stores)

const handleClickLogin = () => {
  isRepeatUsername.value = !isRepeatUsername.value
}
const getRequestPassport = async () => {
  try {
    await stores.getRequestPassport('immoc')
  } catch (error) {}
}

onMounted(() => {
  getRequestPassport()
})
</script>
<style scoped></style>
