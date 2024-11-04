<template>
    <div id="app">
        <!--实现跳转1：值是一个字符串-->
        <nav>
            <router-link to="/">首页</router-link>|
            <router-link to="/newsList">新闻列表页</router-link>|
            <router-link to="/goodsList">商品列表页</router-link>|
            <router-link to="/my">个人中心</router-link>
        </nav>
        <!--实现跳转2：值是一个对象，通过path进行跳转-->
        <nav>
            <router-link :to="{path:'/'}">首页</router-link>|
            <router-link :to="{path:'/newsList'}">新闻列表页</router-link>|
            <router-link :to="{path:'/goodsList'}">商品列表页</router-link>|
            <router-link :to="{path:'/my'}">个人中心</router-link>
        </nav>
        <!--实现跳转2：值是一个对象，通过name进行跳转-->
        <nav>
            <router-link :to="{name:'index'}">首页</router-link>|
            <router-link :to="{name:'newsList'}">新闻列表页</router-link>|
            <router-link :to="{name:'goodsList'}">商品列表页</router-link>|
            <router-link :to="{name:'my'}">个人中心</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style lang="less" scoped>
    #app{
        text-align: center;
        a{
            padding:5px;
        }
    }
</style>