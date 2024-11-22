<template>
    <h3>Vue3父向子通过属性进行参数的传递</h3>
    <h3>父组件App</h3>
    <p>userName:{{userName}}</p>
    <p>age:{{age}}</p>
    <hr/>
    <Child :userName="userName" :age="age" hobby="学习"/>
    <hr/>
    <Child v-bind="{userName,age,hobby:'学习'}"/>
</template>

<script lang="ts" setup>
import Child from "@/components/Child.vue";
import {ref} from "vue";
const userName = ref("vue3");
const age = ref(12);
</script>

<style scoped>
</style>