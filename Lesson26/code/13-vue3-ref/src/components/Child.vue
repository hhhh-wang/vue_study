<template>
    <h3>我是子组件Child</h3>
    <p>age->{{age}}</p>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const age = ref(100);
defineExpose({age})
</script>

<style scoped>
</style>