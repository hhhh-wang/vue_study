<template>
    <div>
        <p ref="pRef" v-for="item in arr" :key="item">{{item}}</p>
    </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
// ref与v-for结合使用得到的是一个数组，数组内的元素是真实的DOM
let arr = [1, 2, 3, 4, 5, 6];
let pRef = ref();
console.log(pRef.value);
onMounted(function(){
    // console.log("mounted",pRef.value)
    for(let index = 0;index<pRef.value.length;index++){
        if(index % 2 === 1){
            pRef.value[index].style.color="red";
        }else  pRef.value[index].style.color="green";
    }
})
</script>