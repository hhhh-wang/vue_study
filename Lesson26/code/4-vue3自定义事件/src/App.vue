<template>
    <h3>Vue3父向子通过属性进行参数的传递</h3>
    <h3>父组件App</h3>
    <button @click="count++">{{count}}</button>
    <button @click="setCount(2)">{{count}}</button>
    <hr/>
    <Child @setCount="setCount" @click="setCount" :count="count" :setCount="setCount"/>
</template>

<script lang="ts" setup>
// 注意：在vue3中没有了修饰符.native
//      父组件向子组件设置的事件，对于子组件而言都会作为属性来处理。
//      父@click---->子onClick
//      父@setCount---->子onSetCount
import Child from "@/components/Child.vue";
import {ref} from "vue";
const count = ref(100);
const setCount = function(n:number){
    console.log(1)
    count.value += n;
}
</script>

<style scoped>
</style>