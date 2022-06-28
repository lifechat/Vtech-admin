<script setup lang="ts">
import { createApp, ref } from 'vue'

const useMousePosition = () => {
  const x = ref(0)
  const y = ref(0)

  return {
    x,
    y,
  }
}
const app = createApp({
  setup() {
    const position = useMousePosition()
    const { x, y } = useMousePosition()
    return {
      x,
      y,
    }
  },
})

const count = ref(0)
</script>

<template>
  <div>
    x:{{ x }}
    <br />
    y:{{ y }}
  </div>
</template>

<style scoped lang="scss"></style>
