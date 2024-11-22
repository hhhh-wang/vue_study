<template>
    <h3>我是父组件App</h3>
    <p>我是父亲，我现在的资产有：{{money}}</p>
    <button  @click="borrowByChild">向儿子借10元</button>
    <hr/>
    <Child ref="son"/>
</template>

<script lang="ts" setup>
// 在vue3中没有$children,但是在模块中有$parent.
import Child from "@/components/Child.vue";
import {ref} from "vue";
const money = ref(200);
const son = ref();
const borrowByChild = function(){
    // 让儿子的资产减少10元
    son.value.money -= 10;
    // 老子的资产资产加10元
    money.value+=10;

}
defineExpose({money})
</script>

<style scoped>
</style>