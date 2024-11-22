<template>
    <h3>我是子组件Child</h3>
    <p @click="$emit('update:user-name',userName+'!')">userName:{{userName}}</p>
    <p @click="$emit('update:age',age+1)">age:{{age}}</p>
</template>

<script lang="ts" setup>
defineProps(["userName","age"]);
const $emit = defineEmits(["update:user-name","update:age"]);

</script>

<style scoped>
</style>