<template>
    <h3 @click="$my('input','lisi')">我是一个子组件-Child:{{value}}</h3>
</template>

<script lang="ts" setup>
defineProps(["value"]);
const $my = defineEmits(["input"]);
</script>

<style scoped>

</style>
 