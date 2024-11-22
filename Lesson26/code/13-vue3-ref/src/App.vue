<template>
    <h3>我是父组件App</h3>
    <p>{{childRef.age}}</p>
    <button @click="getChildInfo">获取子组件中的数据</button>
    <hr/>
    <Child ref="childRef"/>
</template>

<script lang="ts" setup>
import Child from "@/components/Child.vue";
import {ref} from "vue";
let childRef = ref<any>({});
const getChildInfo = function(){
    console.log(childRef.value.age+=1)
}
</script>

<style scoped>
</style>