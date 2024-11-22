<template>
    <h3>App组件（父组件）{{num}}</h3>
    <hr/>
    <One :num="num"/>
    <hr/>
    <Two :num="num"/>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {bus} from "@/utils";
import One from "@/components/One.vue"
import Two from "@/components/Two.vue"
const num = ref(100);
onMounted(function(){
    bus.on("changenum",(v)=>{
        console.log("APP->changenum",v);
        num.value = v as number;
    })
})
</script>

<style scoped>
</style>