<template>
    <h3>练习Pinia</h3>
    <p>counter:{{counter}}</p>
    <p>counter.$id:{{counter.$id}}</p>
    <p>num:{{counter.num}}</p>
    <p>arr:{{counter.arr}}</p>
    <p>_isOptionsAPI:{{counter._isOptionsAPI}}</p>
</template>

<script lang="ts" setup>
import useCounterStore from "@/store/modules/counter";
const counter = useCounterStore();
// 输出counter模块中的数据状态num
// console.log(counter.num);
console.log(counter)
</script>

<style scoped>

</style>
 