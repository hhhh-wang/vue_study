<template>
    <div>
        <h3>获取Store中的数据状态</h3>
        <button>刘德华：{{$store.state.liuDeHua}}</button>
        <button>郭富城：{{$store.state.guoFuCheng}}</button>
        <button>张学友：{{$store.state.zhangXueYou}}</button>
        <button>黎明：{{$store.state.liMing}}</button>
    </div>
</template>

<script>
export default {
    name: "App",
    mounted(){
        console.log(this.$store)
    }
}
</script>

<style scoped>

</style>