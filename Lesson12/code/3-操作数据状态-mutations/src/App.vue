<template>
    <div>
        <h3>获取Store中的数据状态</h3>
        <button @click="changeLiuDeHua">刘德华：{{ $store.state.liuDeHua }}</button>
        <button @click="$store.commit('CHANGE_GUO_FU_CHENG',3)">郭富城：{{ $store.state.guoFuCheng }}</button>
        <button @click="$store.commit('CHANGE_ZHANG_XUE_YOU')">张学友：{{ $store.state.zhangXueYou }}</button>
        <button @click="$store.commit('CHANGE_LI_MING')">黎明：{{ $store.state.liMing }}</button>
    </div>
</template>

<script>
export default {
    name: "App",
    methods: {
        changeLiuDeHua() {
            // 不要这么干，因为不是正规途径（视图会实现响应式，但数据已经不是仓库中了）
            // this.$store.state.liuDeHua++;

            // 修改数据状态唯一的正途是通过this.$store.commit调用store->mutations提供的方法。在该方法中对数据状态进行更改。
            // 接收的第一个参数是store->index->mutations下的方法名,
            // store->index->mutaions->CHANGE_LIU_DE_HUA会被调用
            // 第二个参数是传递的参数（payload）
            this.$store.commit("CHANGE_LIU_DE_HUA",{
                a:2,
                b:2,
                c:3,
                d:4
            });
        }
    }
}
</script>

<style scoped>

</style>