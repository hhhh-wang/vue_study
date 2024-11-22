<template>
    <h3>我是子组件Child</h3>
    <p>我还小，还是个孩子，现在的资产共{{money}}</p>
    <button @click="sendFather($parent)">给父亲100元</button>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const money = ref(2000);
const sendFather = function(parent:any){
    // 儿子减少100
    money.value-=100;
    // 父亲增加100
    parent.money+=100;

}
defineExpose({money})
</script>

<style scoped>
</style>