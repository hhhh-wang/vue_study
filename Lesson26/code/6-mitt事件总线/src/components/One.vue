<template>
    <h3>One:{{num}}</h3>

</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {bus} from "@/utils";

defineProps(["num"]);
onMounted(function(){
    bus.on("changenum",()=>{
        console.log("ONE->changenum");
        // bus.off("changenum");
    })
})
</script>

<style scoped>

</style>