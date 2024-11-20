<template>
    <h3>watch</h3>
    <p>ref->count->{{ count }}</p>
    <p>reactive->info->{{ info }}</p>
    <button @click="count++">更改ref->count</button>
    <br/>
    <button @click="info.age++">更改reactive->info->age</button>
    <button @click="info.userName+='!'">更改reactive->info->userName</button>
    <button @click="info.arr.push(info.arr.length+1)">更改reactive->info->arr</button>
    <button @click="info.arr[1]=90">更改reactive->info->arr->下标</button>
    <button @click="stopWatch">停止侦听</button>
</template>
<script setup lang="ts">
// watch:可以针听一个或多个数据，如果侦听的数据发生变化，会执行指定的函数。
import {reactive, ref, watch} from "vue";
// count可以被称为：响应式ref对象|ref对象|ref
const count = ref(1);
// info可以被称为：响应式代理对象|响应式reactive对象|数据源代理对象
const info = reactive({
    userName: "zhangsan",
    age: 12,
    arr: [1, 2, 3, 4]
})


// 1- 侦听ref
// 第一个参数是侦听的数据。第二个参数是回调函数。第三个参数是一个配置对象。
// 当侦听的数据发生改变，那么会执行回调函数。
// watch的返回值是一个函数，通过调用该函数可以停止侦听(当数据发生改变，那么不会再次执行回调函数)。

// const stopWatch = watch(count,(newValue,oldValue)=> {
//     console.log("watch", newValue, oldValue)
// },{
//     // 立即调用，如果立即调用那么oldValue的值是undefined.
//     immediate:true
// })

// 2- 侦听数据代理对象
// const stopWatch = watch(info,(newValue,oldValue)=>{
//     console.log("侦听数据代理对象",newValue===oldValue)
// },{
//     immediate:true
// });

// 3- 侦听一个函数，该函数返回一个数据
// 函数要有一个返回值，返回值可以依赖一个或多个数据，当返回值发生改变以后会被侦听到。
// const stopWatch = watch(()=>count.value+info.age,(newValue,oldValue)=>{
//     console.log("侦听一个函数",newValue,oldValue)
// },{
//     immediate:true
// })

// 主要应用于侦听代理对象中的某个属性的变化
// 如果返回的是一个引用类型，引用类型的地址没有发生改变不会被侦听，如果被侦听需要增加deep:true
// const stopWatch = watch(()=>info.age,(newValue,oldValue)=>{
//     console.log("侦听一个函数",newValue,oldValue)
// },{
//     // deep:true,
//     immediate:true
// })

// 4- 侦听数组，数组内可以是所有的响应式数据
// newValue是更改后的数据，oldValue是更改前的数据。
// newValue以及oldValue类型是数组。数组中分别为对应数组的更改前以及更改后的值
// const stopWatch = watch([info,count],(newValue,oldValue)=>{
//     // newValue:[info更改后的值，count更改后的值]
//     // oldValue:[info更改前的值，count更改前的值]
//     console.log("侦听数组",newValue,oldValue)
// },{
//     immediate:true
// })

</script>