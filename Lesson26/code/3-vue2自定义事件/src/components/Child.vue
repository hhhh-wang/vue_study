<template>
    <div>
        <h3>子组件Child</h3>
        <p>count:{{count}}</p>
        <!--   子组件接收父组件传递过来的函数。当点击按钮时调用。     -->
        <button @click="changeCount(3)">调用的是接收的函数：{{count}}</button>
        <button @click="$emit('changeCount',5)">调用自定义事件：{{count}}</button>
        <button @click="fn">调用自定义事件2：{{count}}</button>
    </div>
</template>

<script>
export default {
    name: "Child",

    props:["count","changeCount"],
    methods:{
        fn(){
            this.$emit("changeCount",6)
        }
    },
    mounted(){
        console.log(this)
    }
}
</script>

<style scoped>

</style>