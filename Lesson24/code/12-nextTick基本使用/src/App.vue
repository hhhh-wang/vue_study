<template>
    <div>nextTick:{{count}}</div>
    <div>nextTick:{{userName}}</div>
    <button @click="changeNum">count+1</button>
</template>
<script setup lang="ts">
import {onBeforeUpdate, onUpdated, ref,nextTick} from "vue";

const count = ref(1);
const userName = ref("zhangsan");
const changeNum = async function(){
    count.value++;
    userName.value+="!";
    // 1- 回调函数
    // nextTick(function(){
    //     // 可以获取更新以后的视图信息
    //     console.log("nextTick->回调函数",(document.querySelector("div") as  HTMLDivElement).innerText)
    // })

    // 2- Promise
    // nextTick().then(()=>{
    //     console.log("nextTick->回调函数",(document.querySelector("div") as  HTMLDivElement).innerText)
    // })

    await nextTick();
    console.log("nextTick->回调函数",(document.querySelector("div") as  HTMLDivElement).innerText)



    // console.log("changeNum",(document.querySelector("div") as  HTMLDivElement).innerText)

}
// onBeforeUpdate(function(){
//     console.log("onBeforeUpdate")
// })
// onUpdated(function(){
//     console.log("onUpdated",(document.querySelector("div") as  HTMLDivElement).innerText);
// })
</script>