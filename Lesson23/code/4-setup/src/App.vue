<template>
    <h3>App</h3>
    <p>userName:{{userName}}</p>
    <p>age:{{age}}</p>
    <button @click="age++">{{age}}</button>
    <button @click="changeAge">changeAge{{age}}</button>
</template>
<script>
    import {defineComponent} from "vue";

    export default defineComponent({
        name:"App",
        beforeCreate() {
            console.log("beforeCreate");
        },
        // 1- setup是一个钩子函数。
        // 2- 在beforeCreate之前执行。
        // 3- this指向的undefined.
        // 4- setup如果要使用return进行返回，要求必须是一个对象
        // 5- setup不允许设置为async函数。
        // 6- 返回对象的属性可以直接被模板调用
        // 7- 如果data与setup拥有相同名的数据，那么以setup为准
        // 8- data中的数据是响应式的，而setup中的数据不是响应式。
        data(){
            return {
                age:100,
                userName:"lisi->data"
            }
        },
        setup(){
            return {
                age:10,
                userName:"zhangsan->setup",
                changeAge(){
                    this.age+=2;
                    console.log("changeAge",this.age)
                }
            }
        }
    })
</script>
<style>

</style>