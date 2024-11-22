<template>
    <h3>我是父组件App{{userName}}</h3>
    <!--  将数据userName的值绑定在value属性上，但更改value的值不会影响数据。（不会响应）  -->
    <input type="text" :value="userName">
    <input type="text" v-model="userName">
    <input type="text" v-model="age">
    <hr/>
    <Child v-model:userName="userName" v-model:age="age"/>
</template>

<script lang="ts" setup>
import Child from "@/components/Child.vue";
import {ref} from "vue";
let userName = ref("zhangsan");
let age = ref(100)
</script>

<style scoped>
</style>