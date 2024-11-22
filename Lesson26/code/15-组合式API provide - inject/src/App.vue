<template>
    <h3>我是父组件App(爷爷):{{token}}</h3>
    <p>age:{{age}}</p>
    <hr/>
    <Child/>
    <hr/>
    <Child2/>
</template>

<script lang="ts" setup>
import Child from "@/components/Child.vue";
import Child2 from "@/components/Child2.vue";
import {ref, provide, inject} from "vue";
const token = ref("appToken");
// 第一个参数是标识，第二个参数是数据状态
provide("t",token);// 提供数据，让自己所包裹的组件（可以隔代）使用。
const age = inject("age");
</script>

<style scoped>
</style>