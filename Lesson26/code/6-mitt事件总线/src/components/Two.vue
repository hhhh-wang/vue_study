<template>
    <h3 @click="changeNum">Two1:{{num}}</h3>
    <h3 @click="bus.emit('changenum',300)">Two2:{{num}}</h3>
</template>

<script setup lang="ts">
import {bus} from "@/utils";

defineProps(["num"]);
const changeNum = function(){
    bus.emit("changenum",200);
}
</script>

<style scoped>

</style>