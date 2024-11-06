<template>
    <div>
        <!--未简写-->
<!--        <div v-for="item in $store.state.goods.goodsList" :key="item.id">-->
<!--            <p>商品名称：{{item.goodsName}}</p>-->
<!--            <p>商品价格：{{item.goodsPrice | currency}}</p>-->
<!--            <p>上架时间：{{item.addTime | date}}</p>-->
<!--            <button @click="$store.commit('JOIN_CART',item);$router.push('/cartList')">加入购物车</button>-->
<!--            <hr/>-->
<!--        </div>-->


        <!-- 简写：-->
        <div v-for="item in goodsList" :key="item.id">
            <p>商品名称：{{item.goodsName}}</p>
            <p>商品价格：{{item.goodsPrice | currency}}</p>
            <p>上架时间：{{item.addTime | date}}</p>
            <button @click="JOIN_CART(item);$router.push('/cartList')">加入购物车</button>
            <hr/>
        </div>
    </div>
</template>

<script>
import {mapMutations,mapState} from "vuex";

export default {
    name: "GoodsList",
    computed:mapState({
        goodsList(state){
            return state.goods.goodsList;
        }
    }),
    methods:mapMutations(["JOIN_CART"])
}
</script>

<style scoped>

</style>