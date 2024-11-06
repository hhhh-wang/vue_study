<template>
    <div>
        <div v-for="item in $store.state.cart.cartList" :key="item.id">
            <p>商品名称：{{item.goodsName}}</p>
            <p>商品价格：{{item.goodsPrice | currency}}</p>
            <p>购买数量：{{item.buyNum}}</p>
            <hr/>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartList"
}
</script>

<style scoped>

</style>