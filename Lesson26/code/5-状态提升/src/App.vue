<template>
    <h3>App组件</h3>
    <button @click="num++">{{num}}</button>
    <hr/>
    <One @setNum="setNum" :num="num"/>
    <hr/>
    <Two  @setNum="setNum" :num="num"/>
</template>

<script lang="ts" setup>
import One from "@/components/One";
import Two from "@/components/Two";
import {ref} from "vue";
const num = ref(0);
const setNum = function(v:number=1){
    num.value += v;
}

</script>

<style scoped>

</style>
 