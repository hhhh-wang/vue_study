<template>
    <div>
        <h3>投票</h3>
        <button>刘德华:{{$store.state.liuDeHua}}|{{liuDeHua}}|{{liuDeHua2}}</button>
        <button>黎明:{{$store.state.liMing}}|{{liMing}}</button>
        <button>郭富城:{{$store.state.guoFuCheng}}|{{guoFuCheng}}|{{guoFuCheng2}}</button>
        <button>张学友:{{$store.state.zhangXueYou}}|{{zhangXueYou}}</button>
    </div>
</template>

<script>
import {mapState} from "@/zhangX";
export default {
    name: "App.vue",
    data(){
        return {
            liuDeHua:10
        }
    },
    computed:{
        ...mapState(["liMing","guoFuCheng","zhangXueYou"]),
        ...mapState({
            liuDeHua2(state){
                return state.liuDeHua
            },
            guoFuCheng2(state){
                return state.guoFuCheng
            }
        })
    }
    // computed:{
    //     liuDeHua(){
    //         return this.$store.state.liuDeHua
    //     },
    //     guoFuCheng(){
    //         return this.$store.state.guoFuCheng
    //     },
    //     zhangXueYou(){
    //         return this.$store.state.zhangXueYou
    //     },
    //     liMing(){
    //         return this.$store.state.liMing
    //     }
    // }
}
</script>

<style scoped>

</style>