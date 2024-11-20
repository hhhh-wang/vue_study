<template>
    <button @click="changeIsRender">点我</button>
    <div ref="divRef" v-if="isRender"></div>
</template>
<script setup lang="ts">
import {ref,nextTick} from "vue";
const isRender = ref(false);
const divRef = ref();
const changeIsRender = async function(){
    isRender.value = !isRender.value;
    if(isRender.value){
        await nextTick();
        divRef.value.style.width="300px";
        divRef.value.style.height="300px";
        divRef.value.style.background = "red";
    }

}
</script>