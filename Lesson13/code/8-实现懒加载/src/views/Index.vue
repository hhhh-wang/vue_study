<template>
    <div class="container">
        <nav>
            <router-link exact to="/">添加商品</router-link>|
            <router-link to="/goodsList">商品列表</router-link>|
            <router-link to="/cartList">购物车列表</router-link>|
            <router-link to="/my">个人中心</router-link>
        </nav>
        <!-- 将添加商品，商品列表，购物车列表，个人中心均进行了缓存-->
<!--        <keep-alive>-->
<!--            <router-view></router-view>-->
<!--        </keep-alive>-->

        <!-- 指定一个缓存的路由：缓存添加商品路由 -->
<!--        <keep-alive include="AddGoods">-->
<!--            <router-view></router-view>-->
<!--        </keep-alive>-->

        <!-- 缓存多个 -->
<!--        <keep-alive include="AddGoods,My">-->
<!--            <router-view></router-view>-->
<!--        </keep-alive>-->

        <!-- 排除缓存：My  -->
<!--        <keep-alive exclude="My">-->
<!--            <router-view></router-view>-->
<!--        </keep-alive>-->

        <!--   通过路由配置来指定是否使用keepAlive     -->
        <keep-alive>
            <router-view v-if="$route.meta.isKeep"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.isKeep"></router-view>


    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style lang="less" scoped>
nav {
    a{
        color:skyblue;
        margin:5px;
    }
    a.active{
        color:red;
    }
}
</style>