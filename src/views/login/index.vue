<template>
  <div>登录界面</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { loginStore } from '@/store/login'
import { requestPassport } from '@/api/login/index'
import { onMounted } from 'vue'

const stores = loginStore()

const { isRepeatUsername } = storeToRefs(stores)
console.log(isRepeatUsername)
const getRequestPassport = async () => {
  try {
    await stores.getRequestPassport('lifechat')
  } catch (error) {}
}
onMounted(() => {
  getRequestPassport()
})
</script>
<style scoped></style>
