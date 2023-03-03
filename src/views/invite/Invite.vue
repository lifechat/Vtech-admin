<template>
  <div>{{ count }}</div>
</template>

<script setup lang="ts">
import { toRefs, ref, onMounted } from 'vue'

// onMounted(() => {
//   return count
// })
const count = ref(5)
</script>

<style></style>
