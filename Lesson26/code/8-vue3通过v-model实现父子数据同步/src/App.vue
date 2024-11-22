<template>
    <h3>v-model数据的双向绑定</h3>
    <input v-model="userName" type="text"><span>{{userName}}</span>
    <hr/>
    <h3>vue3中实现父子组件数据同步</h3>
    <Child :value="userName" @input="setUserName"/>
    <hr/>
    <h3>v-model实现父子组件数据同步</h3>
    <!-- 1- 向子组件传递了两个属性：modelValue  onUpdate:modelValue -->
    <!-- 2- 向子组件传递了自定义事件：update:model-value -->
    <Child2 v-model="userName"/>

</template>

<script lang="ts" setup>
 import {ref} from "vue";
 import Child from "@/components/Child.vue"
 import Child2 from "@/components/Child2.vue"
 let userName = ref("zhangsan");
 const setUserName = function(info:string){
     console.log("setUserName",info);
     userName.value = info;
 }
</script>

<style scoped>
</style>