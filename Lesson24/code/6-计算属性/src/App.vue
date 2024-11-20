<template>
    <h3>计算属性-只读</h3>
    <p @click="count++">count--->{{count}}</p>
    <p>userName--->{{userName}}</p>
    <p>age--->{{age}}</p>
    <p>方案一：函数-->{{getInfo()}}</p>
    <p>方案二：拼接-->{{"今年"+userName+","+age+"岁了"}}</p>
    <p>方案三：计算属性-->{{getInfoCom}}</p>
    <p>方案三：计算属性-->{{getInfoCom}}</p>
    <p>方案三：计算属性-->{{getInfoCom}}</p>
    <p>方案三：计算属性-->{{getInfoCom}}</p>
    <button @click="age++">点我更改age</button>
    <button @click="userName+='!'">点我更改userName</button>
    <hr/>
    <h3>计算属性-读写</h3>
    <p @click="count+=2">count-->{{count}}</p>
    <p>countCom->{{countCom}}</p>
    <button @click="countCom=300">修改计算属性的值</button>
</template>
<script setup lang="ts">
    import {ref,computed} from "vue";
    const count = ref(100);
    const age = ref(1);
    const userName = ref("zhangsan");

    // getInfo函数的返回结果，只受userName,以及age的影响，
    // 但是更新了数据count,由于模板中调用了该函数，所以该函数依然会被执行，哪怕结果没有任何变化。
    const getInfo = function(){
        console.log("getInfo");
        return "今年"+userName.value+","+age.value+"岁了"
    }
    // 计算属性：
    // 1- 引入组合API->computed
    // 2- computed接收一个回调函数
    // 3- 将computed函数的返回结果赋值给常量,变量
    // 4- 模板中可以直接渲染计算属性。
    // 5- 计算属性拥有缓存功能，只有所依赖的数据不发生改变，计算属性对应的函数不会再次执行。
    // 6- 模板中如果使用了计算属性，那么在初次渲染时，会执行。
    // 创建一个只读的计算属性（接收函数）
    const getInfoCom = computed(function(){
        console.log("getInfoCom")
        return "今年"+userName.value+","+age.value+"岁了"
    })
    // 创建一个读写的计算属性(对象)
    const countCom = computed({
        // 返回值即是计算属性的值
        get(){
            return count.value*2;
        },
        // 当设置计算属性值时调用。接收的参数是修改的值
        set(v:number){
           count.value = v/2;
        }
    })
</script>