<template>
    <h3>我是父组件App</h3>
    <hr/>
    <Child :info="info"/>
</template>

<script lang="ts" setup>
import Child from "@/components/Child.vue";
import {ref} from "vue";

const info = ref([
    {
        id: 1,
        do: "吃了一个包子！",
        done: true
    }, {
        id: 2,
        do: "扶老太太过马路！",
        done: false
    }
    , {
        id: 3,
        do: "赚了1000万！",
        done: true
    }
]);
</script>

<style scoped>
</style>