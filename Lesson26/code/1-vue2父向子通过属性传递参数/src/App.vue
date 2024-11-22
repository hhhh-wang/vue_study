<template>
<div>
    <h3>vue2->父向子传递参数通过属性进行参数的传递</h3>
    <h3>父组件</h3>
    <p>userName:{{userName}}</p>
    <p>age:{{age}}</p>
    <hr/>
    <Child :userName="userName" :age="age" hobby="1"/>
    <hr/>
    <!--  上面使用子组件的语法糖，效果相同  -->
    <Child v-bind="{userName,age,hobby:'1'}" />
</div>
</template>

<script>
import Child from "@/components/Child";
export default {
    name: "App",
    components: {Child},
    data(){
        return {
            userName:"zhangsan",
            age:10
        }
    }
}
</script>

<style scoped>

</style>