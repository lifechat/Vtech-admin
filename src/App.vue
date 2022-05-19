<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { createApp, reactive, onMounted, onUnmounted, toRefs, ref, watchEffect, watch, computed } from 'vue'
// import store from '@/utils/common/storage'

const useMousePosition = () => {
  const position = reactive({
    x: 0,
    y: 0,
  })

  const update = (e: any) => {
    position.x = e.pageX
    position.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.addEventListener('mousemove', update)
  })

  return toRefs(position)
}

const useCount = () => {
  const count = ref(0)
  const stop = watchEffect(() => {
    console.log(count.value)
  })
  return {
    count,
    stop,
    increase: () => {
      count.value++
    },
  }
}

const useTodo = () => {
  const data = [
    { text: '看书', completed: false },
    { text: '敲代码', completed: false },
    { text: '约会', completed: true },
  ]

  const todos = reactive(data)

  const activeCount = computed(() => {
    return todos.filter((item) => !item.completed).length
  })

  return {
    activeCount,
    push: () => {
      todos.push({
        text: '开会',
        completed: false,
      })
    },
  }
}

const useWatch = () => {
  const question = ref('')
  const answer = ref('')
  const image = ref('')

  watch(question, async (newValue, oldValue) => {
    const response = await fetch('https://www.yesno.wtf/api')
    const data = await response.json()
    answer.value = data.answer
    image.value = data.image
  })

  return {
    question,
    answer,
    image,
  }
}

// try {
//   const testKey = '__storetest__'
//   store.set(testKey, testKey)
//   if (store.get(testKey) !== testKey) {
//     store.disabled = true
//   }
//   store.remove(testKey)
// } catch (e) {
//   store.disabled = true
// }
const { activeCount, push } = useTodo()

const { x, y } = useMousePosition()
const { count, increase, stop } = useCount()
const { question, answer, image } = useWatch()
</script>

<template>
  <router-view />
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <h1>vue3-typescript-vite</h1>
  <hr />
  <h1>watch</h1>
  <div id="app">
    <p>
      请问一个 yes/no 的问题:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <img :src="image" />
  </div>
  <hr />
  <h1>computed</h1>
  <button @click="push">按钮</button>
  未完成：{{ activeCount }}
  <hr />
  <h1>watchEffect</h1>
  <button @click="increase">increase</button>
  <button @click="stop">stop</button>
  {{ count }}
  <hr />
  <h1>ref</h1>
  <div>
    <button @click="increase">增加</button>
    <div>{{ count }}</div>
  </div>

  <hr />
  <h1>响应式数据</h1>
  <div>
    x:{{ x }}
    <br />
    y:{{ y }}
  </div> -->
</template>

<style lang="less" scoped>
body {
  background: skyblue;
}
</style>
