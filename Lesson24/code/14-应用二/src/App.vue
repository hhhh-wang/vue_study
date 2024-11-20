<template>
    <p ref="pRef" v-for="(item,index) in state.userList" :key="index">{{item}}</p>
</template>
<script setup lang="ts">
import {ref, nextTick, reactive} from "vue";
type TState = {
    userList:string[]
}
const state = reactive<TState>({
    userList: []
});
const pRef = ref();
setTimeout(() => {
    const data = ["张三", "李四", "王五", "赵六"];
    state.userList = data;
    nextTick(function(){
        pRef.value.forEach((item:HTMLParagraphElement ,index:number)=>{
            if(index % 2){
                item.style.background = "red";
            }else{
                item.style.background = "green";
            }
        })
    })

}, 3000)
</script>