<template>
    <h3>One</h3>
    <button @click="changeNum">{{num}}</button>
</template>

<script setup lang="ts">
defineProps(["num"]);
const $emit = defineEmits(["setNum"]);
const changeNum = function(){
    $emit("setNum",2)
}
</script>

<style scoped>

</style>