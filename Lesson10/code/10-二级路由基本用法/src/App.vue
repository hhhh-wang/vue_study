<template>
    <div class="container">
        <nav>
            <router-link exact to="/">首页</router-link>|
            <router-link to="/newsList">新闻列表</router-link>|
            <router-link to="/goodsList">商品列表</router-link>|
            <router-link to="/my">我的</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style lang="less">
    .container{
        text-align: center;
        a{
            margin:5px;
            color:skyblue;
        }
        a.active{
            color:red;
        }
    }
</style>