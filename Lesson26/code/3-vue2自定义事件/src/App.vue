<template>
<div>
    <h3>vue2->自定义事件</h3>
    <h3>父组件</h3>
    <button @click="changeCount(2)">{{count}}</button>
    <hr/>
    <!--  如果为在父组件中对子组件增加原生事件，子组件是无法获取到事件信息的。点击子组件无效。可以通过增加修饰符.native  -->
<!--    <Child @click.native="changeCount(4)" :count="count" :changeCount="changeCount"/>-->
    <Child @changeCount="changeCount" :count="count" :changeCount="changeCount"/>
</div>
</template>

<script>
import Child from "@/components/Child";
export default {
    name: "App",
    components: {Child},
    data(){
        return {
            count:100
        }
    },
    methods:{
        changeCount(count){
            this.count+=count;
        }
    }
}
</script>

<style scoped>

</style>