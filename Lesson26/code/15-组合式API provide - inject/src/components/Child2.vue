<template>
    <h3>我是组件Child2:{{age}}</h3>
</template>

<script lang="ts" setup>
import {inject} from "vue";
const age = inject("age");
</script>

<style scoped>

</style>
 