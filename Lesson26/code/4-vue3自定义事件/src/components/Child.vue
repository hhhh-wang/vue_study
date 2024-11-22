<template>
    <h3 @click="onSetCount(5)">子组件Child</h3>
    <button @click="setCount(3)">{{count}}</button>
    <button @click="$emits('setCount',100)">{{count}}</button>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
// 通过调用defineEmits可以实现vue2中的this.$emit
const props = defineProps(["count","setCount","onClick","onSetCount"]);
const $emits = defineEmits(["setCount"]);
onMounted(()=>{
    // props.onClick(4);
    $emits("setCount",2)
})
</script>

<style scoped>

</style>
 