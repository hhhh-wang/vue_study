<template>
    <div>
        <h3>获取Store中的数据状态</h3>
        <!-- 未简化： -->
<!--        <button @click="$store.commit('CHANGE_LIU_DE_HUA',{a:3})">刘德华：{{ $store.state.liuDeHua }}</button>-->
<!--        <button @click="$store.commit('CHANGE_GUO_FU_CHENG',3)">郭富城：{{ $store.state.guoFuCheng }}</button>-->
<!--        <button @click="$store.commit('CHANGE_ZHANG_XUE_YOU')">张学友：{{ $store.state.zhangXueYou }}</button>-->
<!--        <button @click="$store.commit('CHANGE_LI_MING')">黎明：{{ $store.state.liMing }}</button>-->

        <!-- 简化方案一：借助methods -->
<!--        <button @click="changeLiuDeHua">刘德华：{{ $store.state.liuDeHua }}</button>-->
<!--        <button @click="changeGuoFuCheng(3)">郭富城：{{ $store.state.guoFuCheng }}</button>-->
<!--        <button @click="changeZhangXueYou">张学友：{{ $store.state.zhangXueYou }}</button>-->
<!--        <button @click="changeLiMing">黎明：{{ $store.state.liMing }}</button>-->

        <!-- 简化方案二：官方 -->
<!--        <button @click="CHANGE_LIU_DE_HUA({a:1})">刘德华：{{ $store.state.liuDeHua }}</button>-->
<!--        <button @click="CHANGE_GUO_FU_CHENG(3)">郭富城：{{ $store.state.guoFuCheng }}</button>-->
<!--        <button @click="CHANGE_ZHANG_XUE_YOU">张学友：{{ $store.state.zhangXueYou }}</button>-->
<!--        <button @click="CHANGE_LI_MING">黎明：{{ $store.state.liMing }}</button>-->

        <!-- 简化方案三：官方二 -->
        <button @click="liu({a:1})">刘德华：{{ $store.state.liuDeHua }}</button>
        <button @click="guo(3)">郭富城：{{ $store.state.guoFuCheng }}</button>
        <button @click="zhang">张学友：{{ $store.state.zhangXueYou }}</button>
        <button @click="li">黎明：{{ $store.state.liMing }}</button>
    </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    name: "App",
    methods: {
        // 数据的元素名对应着store->index.js->mutations->属性名
        ...mapMutations(["CHANGE_LI_MING","CHANGE_LIU_DE_HUA","CHANGE_GUO_FU_CHENG","CHANGE_ZHANG_XUE_YOU"]),
        // 对象的属性名可以自定义。属性的的值对应store->index.js->mutations->属性名
        ...mapMutations({
           liu:"CHANGE_LIU_DE_HUA",
           zhang:"CHANGE_ZHANG_XUE_YOU",
           guo:"CHANGE_GUO_FU_CHENG",
           li:"CHANGE_LI_MING",
        }),
        changeLiuDeHua() {
            this.$store.commit("CHANGE_LIU_DE_HUA",{
                a:2,
                b:2,
                c:3,
                d:4
            });
        },
        changeGuoFuCheng(voteNum){
            this.$store.commit('CHANGE_GUO_FU_CHENG',voteNum)
        },
        changeZhangXueYou(){
            this.$store.commit('CHANGE_ZHANG_XUE_YOU')
        },
        changeLiMing(){
            this.$store.commit('CHANGE_LI_MING')
        }
    }
}
</script>

<style scoped>

</style>