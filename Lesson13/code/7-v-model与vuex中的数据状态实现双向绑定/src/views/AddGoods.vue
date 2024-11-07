<template>
    <div>
        <input v-model.number="liu" type="text">
        <button @click="$store.commit('ADD_LIUDEHUA')">{{$store.state.liuDeHua}}</button>
        <p>商品名称：<input ref="goodsNameRef" type="text"></p>
        <p>商品价格：<input ref="goodsPriceRef" type="text"></p>
        <button @click="addGoods">提交</button>
    </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: "AddGoods",
    methods:{
        ...mapMutations("goods",["ADD_GOODS"]),
        ...mapMutations("goods",{
           a:"ADD_GOODS"
        }),
        addGoods(){
            if(this.$store.state.user.token){
                // 收集商品名称以及商品价格
                const goodsName = this.$refs.goodsNameRef.value.trim();
                const goodsPrice = this.$refs.goodsPriceRef.value.trim();
                if(goodsName.length === 0 || goodsPrice.length === 0){
                    alert("商品名称或价格不允许为空！");
                    return;
                }
                // 调用store->goods->mutations->ADD_GOODS,如果开启了命名空间,以下方式调用
                // 模块的名字/mutation的名字
                // 未简写：
                // this.$store.commit("goods/ADD_GOODS",{goodsName,goodsPrice})
                // 简写1：
                // this.ADD_GOODS({goodsName,goodsPrice});
                // 简写2：
                this.a({goodsName,goodsPrice});
                // 跳转至商品列表路由
                this.$router.push("/goodsList");
            }else{
                this.$router.push({
                    path:"/login",
                    query:{
                        cb:this.$route.path
                    }
                })
            }


        },
    },
    computed:{
        liu:{
            get(){
               return this.$store.state.liuDeHua;
            },
            set(v){
                this.$store.commit("UP_LIUDEHUA",v)
            }
        }
    }
}
</script>

<style scoped>

</style>