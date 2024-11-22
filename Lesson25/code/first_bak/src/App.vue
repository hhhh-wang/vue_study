<template>
    <h3>组合式API</h3>
    <p>{{todos}}</p>
    <p>taskList:{{todos.taskList}}</p>
    <p>sum:{{todos.sum}}</p>
    <button @click="todos.addTaskList(todos.taskList.length+1)">增加元素</button>
</template>

<script lang="ts" setup>
import useTodosStore from "@/store/modules/todos";
const todos = useTodosStore();
</script>

<style scoped>
</style>