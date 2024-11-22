<template>
    <h3>我是子组件Child</h3>
    <div v-for="item in info" :key="item.id">
        <p :style="{
            color:item.done?'green':'red'
        }">{{item.do}}</p>
    </div>
</template>

<script lang="ts" setup>
defineProps(["info"]);
</script>

<style scoped>
</style>