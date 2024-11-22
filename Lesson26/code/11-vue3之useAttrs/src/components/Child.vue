<template>
    <h3>我是子组件Child</h3>
    <p>{{$attrs}}</p>
    <p>{{$attrs.onClick}}</p>
    <button @click="$attrs.onClick(1,2,3,4)">点我</button>
</template>

<script lang="ts" setup>
// 模板中可以使用$attrs
// 可以使用组合API->useAttrs
// props的优先级高于attrs(如果在props当中声明了一个数据状态，那么attrs中不会存在与其同名的。)
// 相较于vue2中的$attrs而言通过useAttrs获取到的不仅仅是属性也包含自定义的事件。
// 即：useAttrs运行的结果是vue2中的$attrs与$listeners的一个结合体。
import {useAttrs} from "vue";
const $attrs = useAttrs();
// const props = defineProps(["count"]);
console.log($attrs);
</script>

<style scoped>
</style>