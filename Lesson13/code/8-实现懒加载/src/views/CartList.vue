<template>
    <div>
        <template v-if="$store.state.cart.cartList.length>0">
            <h3>合计1：{{$store.getters["cart/sumPrice"] | currency}}</h3>
            <h3>合计2：{{sumPrice | currency}}</h3>
            <div v-for="item in $store.state.cart.cartList" :key="item.id">
                <p>商品名称：{{item.goodsName}}</p>
                <p>商品价格：{{item.goodsPrice | currency}}</p>
                <p>购买数量：{{item.buyNum}}</p>
                <hr/>
            </div>
        </template>
        <h3 v-else>购物车空空如也！</h3>

    </div>
</template>

<script>
// 总结：
// 1- state--->this.$store.state.模块名.数据
// 2- dispatch--->this.$store.dispatch('action的名字')
// 3- commit---->this.$store.commit('mutation的名字')
// 4- getters--->this.$store.getters.名字
import {mapGetters} from "vuex"
export default {
    name: "CartList",
    computed:mapGetters("cart",["sumPrice"]),
    mounted(){
        console.log("cartList->mounted")
    }
}
</script>

<style scoped>

</style>