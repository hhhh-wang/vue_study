<template>
    <div>
        <h3>父组件</h3>
        <hr/>
        <h3>双向绑定</h3>
        <input type="text" v-model="num">{{num}}
        <hr/>
        <h3>v-model双向绑定的本质</h3>
<!--        <input type="text" :value="num" @input="num=$event.target.value">-->
        <input type="text" :value="num" @input="handler($event.target.value)">
        <hr/>
        <h3>vu2-通过v-model实现父子组件数据同步</h3>
        <!--
        1-向下传递了属性名为value,值为1的属性
        2- 向下传递了一个名字为input的自定义事件
        3- 自定义事件一旦触发会执行事件处理函数（事件处理函数会将接收的值作为当前状态num的值。）

             -->
<!--        <Child :value="num" @input="handler"/>-->
        <hr/>
        <Child v-model="num"/>
    </div>

</template>

<script>
import Child from "@/components/Child";
export default {
    name:"App",
    components: {Child},
    data(){
        return {
            num:1
        }
    },
    methods:{
        handler(v){
            console.log("handler",v);
            this.num = v;
        }
    }
}
</script>

<style scoped>
</style>