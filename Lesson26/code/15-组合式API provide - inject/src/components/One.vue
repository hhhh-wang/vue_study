<template>
    <h3 @click="t+='?'">One组件--孙子:{{t}}</h3>
    <p>来自于child的age:{{age}}</p>
</template>

<script lang="ts" setup>
import {inject} from "vue";
const t = inject("t");
const age = inject("age");
</script>

<style scoped>

</style>
 