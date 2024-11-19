<template>
    <!-- Vue3中可以拥有多个根元素   -->
    <h3>App组件1</h3>
    <h3>App组件2</h3>
    <h3>App组件3</h3>
</template>

<script>
import {defineComponent} from "vue";
// defineComponent作用对类型的推断辅助。由于ts拥有推断机制，所以也可以省略。
export default defineComponent({
    name:"App"
})
</script>

<style scoped>

</style>