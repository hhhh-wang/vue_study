<template>
    <h3>我是父组件App{{count}}</h3>
    <hr/>
    <Child @click="fn" a="1" b="2" c="3" :count="count"/>
</template>

<script lang="ts" setup>
import Child from "@/components/Child.vue";
import {ref} from "vue";
const count = ref(100);
const fn = function(a,b,c,d){
    console.log("fn",a,b,c,d);
    count.value = a+b+c+d+count.value;
}
</script>

<style scoped>
</style>