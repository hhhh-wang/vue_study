<template>
    <h3>我是子组件Child2:{{modelValue}}</h3>
    <button @click="test">onUpdate:modelValue</button>
    <button @click="test2">update:model-value</button>
</template>

<script lang="ts" setup>
const props = defineProps(["modelValue","onUpdate:modelValue"]);
const emit = defineEmits(["update:model-value"]);
const test = function(){
    props["onUpdate:modelValue"]("lisi");
}
const test2 = function(){
    emit("update:model-value","wangwu")
}
</script>

<style scoped>

</style>
 