`
<template>
  <h3>我是子组件Child</h3>
  <div v-for="(item, index) in info" :key="item.id">
    <slot :suibian="item" :$index="index"></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps(["info"]);
</script>

<style scoped></style>
