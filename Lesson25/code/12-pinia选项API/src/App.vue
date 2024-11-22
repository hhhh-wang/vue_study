<template>
    <h3>练习Pinia</h3>
    <p>counter:{{counter}}</p>
    <p>模块的标识->counter.$id:{{counter.$id}}</p>
    <hr/>
    <h3>数据状态</h3>
    <p>num:{{counter.num}}</p>
    <p>arr:{{counter.arr}}</p>
    <hr/>
    <h3>是否使用了组合式API</h3>
    <p>_isOptionsAPI:{{counter._isOptionsAPI}}</p>
    <hr/>
    <h3>支持双向绑定</h3>
    <input type="text" v-model.number="counter.num">
    <hr/>
    <h3>更改数据状态方案一：直接修改</h3>
    <button @click="counter.num++">{{counter.num}}</button>
    <hr/>
    <h3>更改数据状态方案二：借助counter.$patch</h3>
    <button @click="setNum">{{counter.num}}</button>
    <hr/>
    <h3>更改数据状态方案三：actions</h3>
    <button @click="counter.addOne">{{counter.num}}</button>
    <button @click="counter.addOne(1,2,3,4)">{{counter.num}}</button>
    <button @click="actionAddOne">{{counter.num}}</button>
    <button @click="counter.delaySet">异步更新{{counter.num}}</button>
    <hr/>
    <p @click="counter.changeArr">getters->sum:{{counter.sum}}</p>
</template>

<script lang="ts" setup>
import useCounterStore from "@/store/modules/counter";
const counter:any = useCounterStore();
// 输出counter模块中的数据状态num
// console.log(counter.num);
// console.log(counter)
const setNum = function(){
    // counter.num+=2;

    // counter.$patch({
    //     num:counter.num+3
    // })

    const num = counter.num+3;
    // $patch接收一个对象，对象的属性名即是要修改的状态名，对应的属性值即是要修改的状态值。
    counter.$patch({
        num
    })
}
const actionAddOne = function(){
    counter.addOne(10,11,12,13);
}
</script>

<style scoped>

</style>
 