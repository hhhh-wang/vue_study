<template>
    <h3>与组件结合使用</h3>
    <button @click="childRef.setCount(200)">更改子组件中的count</button>
    <hr/>
    <child ref="childRef"/>

</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import Child from "./components/Child.vue";
// ref与组件结合使用，可以获取组件proxy实例。
const childRef = ref();

onMounted(function(){
    console.log(childRef.value)
})
</script>