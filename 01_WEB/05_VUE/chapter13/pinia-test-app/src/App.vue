<template>
  <div>
    <h2>TodoList 테스트 (Composition API)</h2>
    <hr />
    할일추가:
    <input type="text" v-model="todo" />
    <button @click="addTodoHandler">추가</button>

    <hr />
    <ul>
      <li v-for="todoItem in todoList">
        <span style="cursor: pointer" @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }}</span
        >

        &nbsp; &nbsp; &nbsp;
        <button @click="deleteTodo(todoItem.id)">삭제</button>
      </li>
    </ul>
    <div>완료된 할일 수 : {{ doneCount }}</div>
  </div>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todoList.js';
import { ref, computed } from 'vue';

const todo = ref('');
const todoListStore = useTodoListStore();

// 반응성을 유지하기 위해 스토어에서 직접 참조
const todoList = computed(() => todoListStore.todoList);
const doneCount = computed(() => todoListStore.doneCount);

const { addTodo, deleteTodo, toggleDone } = todoListStore;

const addTodoHandler = () => {
  if (todo.value.trim() === '') return;
  addTodo(todo.value);
  todo.value = '';
};
</script>
