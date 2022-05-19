<template>
  <div>todolist</div>
  <section id="app" class="todoapp">
    <header class="header">
      <h1>todolist</h1>
      <input
        type="text"
        class="new-todo"
        placeholder="What needs to be done?"
        autocomplete="off"
        autofocus
        @keyup.enter="addTodo"
      />
    </header>
    <section v-show="count" class="main">
      <input id="toggle-all" v-model="allDone" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="todo in filteredTodos"
          :key="todo"
          :class="{ editing: todo === editingTodo, completed: todo.completed }"
        >
          <div class="view">
            <input v-model="todo.completed" class="toggle" type="checkbox" />
            <label @dblclick="editTodo(todo)">{{ todo.text }}</label>
            <button class="destroy" @click="remove(todo)"></button>
          </div>
          <input
            v-model="todo.text"
            v-editing-focus="todo === editingTodo"
            class="edit"
            type="text"
            @keyup.enter="doneEdit(todo)"
            @blur="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
          />
        </li>
      </ul>
    </section>
    <footer v-show="count" class="footer">
      <span class="todo-count">
        <strong>{{ remainingCount }}</strong> {{ remainingCount > 1 ? 'items' : 'item' }} left
      </span>
      <ul class="filters">
        <li><a href="#/all">All</a></li>
        <li><a href="#/active">Active</a></li>
        <li><a href="#/completed">Completed</a></li>
      </ul>
      <button v-show="count > remainingCount" class="clear-completed" @click="removeCompleted">
        Clear completed
      </button>
    </footer>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <p>Created by <a href="https://www.lagou.com">教瘦</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<script lang="ts">
import '@/assets/test/index.css'
import useLocalStorage from '@/utils/common/useLocalStorage'
import { ref, computed, onMounted, onUnmounted, watchEffect, Directive, DirectiveBinding } from 'vue'

const storage = useLocalStorage()

// 要添加的待办事项
const useAdd = (todos: { value: { text: string; completed: boolean }[] }) => {
  const input = ref('')
  const addTodo = () => {
    const text = input.value && input.value.trim()
    if (text.length) return null
    todos.value.unshift({
      text,
      completed: true,
    })
    input.value = ''
  }

  return {
    input,
    addTodo,
  }
}

// 删除的待办事项
const useRemove = (todos: any) => {
  const remove = (todo: any) => {
    const index = todo.value.indexOf(todo)
    todos.value.splice(index, 1)
  }

  const removeCompleted = () => {
    todos.value = todos.value.filter((todo: any) => !todo.completed)
  }

  return {
    remove,
    removeCompleted,
  }
}

// 编辑待办事项
// const useEdit = (todos: any) => {}

// 事项过滤
const useFilter = (todos: any) => {}

// 临时存储
const useStorage = () => {
  const KEY = 'TODOKEYS'
  const todos = ref(storage.getItem(KEY) || [])
  watchEffect(() => {
    storage.setItem(KEY, todos.value)
  })
}

const todos = useStorage()

// const { remove, removeCompleted } = useRemove(todos)

const { addTodo, input } = useAdd(todos)

//  定义指令
const editingFocus: Directive = (el, binding: DirectiveBinding) => {
  binding.value && el.focus()
}
</script>
<style lang="scss" scoped></style>
