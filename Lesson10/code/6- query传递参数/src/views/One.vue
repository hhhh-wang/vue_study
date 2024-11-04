<template>
    <div>
        <h3>query接收参数</h3>
        <p>id:{{$route.query.id}}</p>
        <p>type:{{$route.query.type}}</p>
    </div>
</template>

<script>
export default {
    // 如果只是查询字符串不同，那么路由组件不会重新挂载。
    // 比如从地址为：/one?id=1 切换至 /one?id=2 时，不会重新挂载
    name: "One",
    // 当传递的query参数发生改变会运行钩子updated.
    updated(){
        console.log("updated",this.$route.query);
    },
    mounted(){
        // 可以通过this.$route获取路由基本信息
        // console.log(this.$route);
        // 可以通过this.$route.query获取查询字符串中的数据
        console.log("mounted",this.$route.query);
    },
    watch:{
        "$route.query":{
            handler(){
                console.log("watch",this.$route.query)
            },
            immediate:true
        }
    }
}
</script>

<style scoped>

</style>