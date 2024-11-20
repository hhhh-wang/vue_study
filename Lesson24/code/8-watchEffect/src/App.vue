<template>
    <h3>watchEffect</h3>
    <p @click="count++">count-->{{count}}</p>
    <p @click="obj.age++">obj.age-->{{obj.age}}</p>
    <hr/>
    <button @click="isRender=!isRender">显示与隐藏</button>
    <Child v-if="isRender"/>
</template>
<script setup lang="ts">
import Child from "./components/Child.vue";
// 1- watchEffect是组合API
// 2- watchEffect是一个函数
// 3- watchEffect，接收一个回调函数，且该函数会被立即调用
import {onMounted, reactive, ref, watchEffect} from "vue";
const isRender = ref(true);
// 一- 立即调用
// watchEffect(function(){
//     console.log("over");
// })

// 二- 回调函数中所依赖的数据发生改变，会执行回调函数。
const count = ref(1);
const obj = reactive({
    age:12
})
// 当count发生改变那么会执行
// watchEffect(()=>{
//     console.log(count.value);
// })

// 当count或obj.age发生改变，会执行回调函数。
// watchEffect(()=>{
//     console.log(count.value,obj.age);
// })

// 三- 清除副作用函数
// 当所依赖的数据发生改变会执行清除副作用函数。
// 当停止时执行。
// 当组件被销毁时执行。
// 不需要指定侦听的数据（不知道）
// const stop =  watchEffect(function(onInvalidate){
//     console.log(count.value,obj.age);
//     onInvalidate(function(){
//         console.log("清理副作用！")
//     })
// })
// setTimeout(()=>{
//     stop();
// },5000)

// 总结：watch与watchEffect有何不同？
// 1- watchEffect与watch的初次执行时机不同。
// 2- watchEffect回调函数所依赖的数据发生改变会调用，watch是指定的侦听数据发生改变才会执行。
// 3- watchEffect无法获取修改前的值。watch可以。
// 4- watchEffect拥有清理副作用函数。

</script>