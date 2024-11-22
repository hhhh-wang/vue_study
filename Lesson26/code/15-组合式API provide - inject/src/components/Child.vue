<template>
    <h3 @click="t+='!'">我是子组件Child（儿子）:{{t}}</h3>
    <hr/>
    <One/>
</template>

<script lang="ts" setup>
import One from "@/components/One.vue"
import {inject, provide, ref} from "vue";
const age = ref(100);
const t = inject("t");
provide("age",age);
</script>

<style scoped>
</style>