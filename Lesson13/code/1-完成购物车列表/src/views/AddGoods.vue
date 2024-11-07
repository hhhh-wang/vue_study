<template>
    <div>
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
        ...mapMutations(["ADD_GOODS"]),
        addGoods(){
            // 收集商品名称以及商品价格
            const goodsName = this.$refs.goodsNameRef.value.trim();
            const goodsPrice = this.$refs.goodsPriceRef.value.trim();
            if(goodsName.length === 0 || goodsPrice.length === 0){
                alert("商品名称或价格不允许为空！");
                return;
            }
            // 如果在未使用命名空间的情况下，通过commit可以调用任意模块中的mutation方法
            // 如果多个模块有相同名字的mutation方法均会被调用。
            // 非简写：
            // this.$store.commit("ADD_GOODS",{
            //     goodsName,
            //     goodsPrice
            // });
            // 简写：
            this.ADD_GOODS({goodsName,goodsPrice});
            // 跳转至商品列表路由
            this.$router.push("/goodsList");

        }
    }
}
</script>

<style scoped>

</style>