<template>
    <div>
        <h3>父组件App：{{userName}}</h3>
        <button @click="getChildInfo">点我获取子组件信息</button>
        <hr/>
        <Child ref="child"/>
    </div>

</template>

<script>
import Child from "@/components/Child";
// 获取子组件实例方案有两种：
// 1-$refs:可以借助ref与$refs获取真实的DOM,与组件结合使用可以获取组件实例。
// 2-$children:获取当前组件下使用的子组件列表（数组）
export default {
    name:"App",
    components: {Child},
    data(){
       return {
           userName:"张三"
       }
    },
    methods:{
        getChildInfo(){
            // this.$refs.child 即是子组件Child的实例。
            // console.log("getChildInfo",this.$refs.child);
            // 获取子组件数据状态
            // console.log("getChildInfo",this.$refs.child.userName)
            // 调用 子组件的方法
            // this.$refs.child.changeUserName("lisi");

            // console.log(this.$children[0]);
            this.$children[0].changeUserName("wangwu");
        }
    }
}
</script>

<style scoped>
</style>