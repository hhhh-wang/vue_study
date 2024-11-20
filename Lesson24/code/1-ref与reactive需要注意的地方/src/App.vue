<template>
    <h3>App</h3>
    <p @click="num++">num:{{ num }}</p>
    <p @click="count++">ref->count:{{ count }}</p>
    <p @click="setCount(2)">ref->count:{{ count }}</p>
    <p @click="obj.age++">reactive->obj.age:{{ obj.age }}</p>
    <p @click="upObjAge">reactive->obj.age:{{ obj.age }}</p>
    <p @click="upInfoAge">ref->info.age:{{ info.age }}</p>
</template>

<script setup lang="ts">
// 注意1：如果通过reactive创建了一个引用类型的数据，那么如果在使用时，
//       直接更改其引用地址，那么不会进行响应。
// 注意2：如果通过ref创建了数据状态，只要将其value值设置为引用类型，那么在使用时其value的数据类型均是proxy实例。
// 可以通过ref,以及reactive实现响应式。
import {ref,reactive} from "vue";
// 可以渲染，但不支持响应式
let num = 100;
// ref
let count = ref<number>(1);
let info = ref({
    age:90
})
// reactive
let obj = reactive({
    age:100
});
const setCount = (n:number)=> {
    count.value += n;
}
const upObjAge = function(){
    // 如果通过reactive创建了一个引用类型的数据，那么如果在使用时，
    // 直接更改其引用地址，那么不会进行响应。
    // obj = {
    //     age:200
    // };

    // obj = reactive({
    //     age:200
    // })


    console.log(obj);
}
function upInfoAge(){
    // info.value.age++;

    info.value = {
        age:87
    };

    // 如果通过ref创建了数据状态，只要将其value值设置为引用类型，那么在使用时其value的数据类型均是proxy实例。
    console.log(info)
}
</script>

<style scoped>

</style>