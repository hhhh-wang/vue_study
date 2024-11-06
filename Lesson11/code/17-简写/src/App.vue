<template>
    <div>
        <h3>投票</h3>
        <button>刘德华:{{$store.state.liuDeHua}}|{{liuDeHua}}|{{liuDeHua2}}</button>
        <button>黎明:{{$store.state.liMing}}|{{liMing}}</button>
        <button>郭富城:{{$store.state.guoFuCheng}}|{{guoFuCheng}}</button>
        <button>张学友:{{$store.state.zhangXueYou}}|{{zhangXueYou}}</button>
        <p>合计:{{sum}}</p>
    </div>
</template>

<script>
// 简写方案三:使用官方提供的方法
// 官方步骤1 引入
import {mapState} from "vuex";
export default {
    name: "App.vue",
    data(){
        // 简写方案一:初始化没问题,但是如果仓库中的数据状态发生改变,那么不会state中的数据更新
        // const {liuDeHua,liMing,guoFuCheng,zhangXueYou} = this.$store.state;
        // return {
        //     liuDeHua,
        //     liMing,
        //     guoFuCheng,
        //     zhangXueYou
        // }
        return {
            liuDeHua:20
        }
    },

    // 简写方案二:计算属性,可以实现读取,仓库中的数据状态发生改变,计算属性会重新计算.
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
    // 官方步骤二:如果自定义计算属性不方便
    // computed:mapState(["liuDeHua","liMing","guoFuCheng","zhangXueYou"])
    // 官方步骤二:以下这种写法,可以额外增加自定义的计算属性,问题:名字有可能与其它属性冲突
    // computed:{
    //     ...mapState(["liuDeHua","liMing","guoFuCheng","zhangXueYou"]),
    //     sum(){
    //         return this.liuDeHua+this.liMing+this.guoFuCheng+this.zhangXueYou;
    //     }
    // }
    // 官方步骤三:
    computed:{
        // 简写一
        ...mapState(["liMing","guoFuCheng","zhangXueYou"]),
        // 简写二:可以避免冲突
        ...mapState({
            // liuDeHua2(state){
            //     return state.liuDeHua;
            // }
            // 对象的名字即是计算属性的名字,函数的返回值即是计算属性的值
            liuDeHua2:({liuDeHua})=>liuDeHua
        }),
        sum(){
            return this.liuDeHua+this.liMing+this.guoFuCheng+this.zhangXueYou;
        }
    }
}
</script>

<style scoped>

</style>