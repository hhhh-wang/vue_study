<template>
    <div>
        <h3>投票</h3>
        <button>刘德华:{{$store.state.liuDeHua}}</button>
        <button>黎明:{{$store.state.liMing}}</button>
        <button>郭富城:{{$store.state.guoFuCheng}}</button>
        <button>张学友:{{$store.state.zhangXueYou}}</button>
    </div>
</template>

<script>
export default {
    name: "App.vue"
}
</script>

<style scoped>

</style>