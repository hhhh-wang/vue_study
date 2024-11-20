<template>
<div>Child->{{num}}</div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref, watchEffect} from "vue";
const num = ref(1);
// 应用
watchEffect(function(onInvalidate){
    console.log("watchEffect回调函数");
    const timer = setInterval(function(){
        console.log(1111);
        num.value++;
    },1000)
    onInvalidate(function(){
        console.log("onInvalidate");
        clearInterval(timer);
    })
})


// let timer = -1;
// onBeforeUnmount(function(){
//     clearInterval(timer);
// })
// onMounted(function(){
//     timer = setInterval(()=>{
//         num.value++;
//         console.log(11111)
//     },1000)
// })

</script>

<style scoped>

</style>