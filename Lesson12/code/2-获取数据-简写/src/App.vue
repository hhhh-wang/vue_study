<template>
    <div>
        <h3>获取Store中的数据状态</h3>
        <button>刘德华：{{$store.state.liuDeHua}}|{{liuDeHua}}|{{liu}}</button>
        <button>郭富城：{{$store.state.guoFuCheng}}|{{guoFuCheng}}|{{guo}}</button>
        <button>张学友：{{$store.state.zhangXueYou}}|{{zhangXueYou}}|{{zhang}}</button>
        <button>黎明：{{$store.state.liMing}}|{{liMing}}|{{li}}</button>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name: "App",
    computed:{
        ...mapState(["liuDeHua","guoFuCheng","zhangXueYou","liMing"]),
        ...mapState({
            liu(state){
                return state.liuDeHua
            },
            guo:state=>state.guoFuCheng,
            zhang:({zhangXueYou})=>zhangXueYou,
            li(state){
                return state.liMing
            },
        })
    },
    mounted(){
        console.log(this.$store)
    }
}
</script>

<style scoped>

</style>