<template>
    <div>
        <h3>getters</h3>
        <button @click="num++">{{num}}</button>
        <button @click="$store.commit('CHANGE_LIU_DE_HUA',{a:2})">刘德华：{{ $store.state.liuDeHua }}</button>
        <button @click="$store.commit('CHANGE_GUO_FU_CHENG',3)">郭富城：{{ $store.state.guoFuCheng }}</button>
        <button @click="$store.commit('CHANGE_ZHANG_XUE_YOU')">张学友：{{ $store.state.zhangXueYou }}</button>
        <button @click="$store.commit('CHANGE_LI_MING')">黎明：{{ $store.state.liMing }}</button>
        <p>总票数1-插值表达式:{{$store.state.liuDeHua+$store.state.liMing+$store.state.guoFuCheng+$store.state.zhangXueYou}}</p>
        <p>总票数2-methods:{{sum()}}</p>
        <p>总票数3-computed:{{sum3}}</p>
        <p>总票数4-getters:{{$store.getters.sumVote}}</p>
        <p>总票数5-getters简写1:{{sumVote}}</p>
        <p>总票数6-getters简写2:{{s}}</p>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: "App",
    data(){
        return {
            num:1
        }
    },
    methods:{
        sum(){
            console.log("methods->sum");
            return this.$store.state.liuDeHua+this.$store.state.liMing+this.$store.state.guoFuCheng+this.$store.state.zhangXueYou
        }
    },
    computed:{
        ...mapGetters(["sumVote"]),
        // sumVote(){
        //     console.log("computed->sum3");
        //     return this.$store.state.liuDeHua+this.$store.state.liMing+this.$store.state.guoFuCheng+this.$store.state.zhangXueYou
        // },
        ...mapGetters({
            s:"sumVote"
        }),
        // s(){
        //     console.log("computed->sum3");
        //     return this.$store.state.liuDeHua+this.$store.state.liMing+this.$store.state.guoFuCheng+this.$store.state.zhangXueYou
        // },
        sum3(){
            console.log("computed->sum3");
            return this.$store.state.liuDeHua+this.$store.state.liMing+this.$store.state.guoFuCheng+this.$store.state.zhangXueYou
        }
    },
    mounted(){
        console.log(this.$store);
    }
}
</script>

<style scoped>

</style>