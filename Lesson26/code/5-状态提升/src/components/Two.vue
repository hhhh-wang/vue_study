<template>
    <h3>Two</h3>
    <button @click="changeNum">{{num}}</button>
</template>

<script setup lang="ts">
defineProps(["num"])
const $emit = defineEmits(["setNum"]);
const changeNum = function(){
    $emit("setNum",3)
}
</script>

<style scoped>

</style>