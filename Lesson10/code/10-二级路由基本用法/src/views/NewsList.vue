<template>
    <div>
        <!-- 解决默认不显示体育新闻的方案一：将体育新闻的地址设置与上一级路由的地址相同 -->
<!--        <nav>-->
<!--            <router-link exact to="/newsList">体育新闻</router-link>|-->
<!--            <router-link to="/newsList/yule">娱乐新闻</router-link>|-->
<!--            <router-link to="/newsList/caijing">财经新闻</router-link>-->
<!--        </nav>-->

        <!-- 解决默认不显示体育新闻的方案二：设置重定向 -->
<!--        <nav>-->
<!--            <router-link to="/newsList/tiyu">体育新闻</router-link>|-->
<!--            <router-link to="/newsList/yule">娱乐新闻</router-link>|-->
<!--            <router-link to="/newsList/caijing">财经新闻</router-link>-->
<!--        </nav>-->

        <!-- to的写法：一级路由的地址可以省略（省略/newsList）-->
<!--        <nav>-->
<!--            <router-link to="tiyu">体育新闻</router-link>|-->
<!--            <router-link to="yule">娱乐新闻</router-link>|-->
<!--            <router-link to="caijing">财经新闻</router-link>-->
<!--        </nav>-->

        <!--to的写法：相对地址(不建议)-->
<!--        <nav>-->
<!--            <router-link to="./tiyu">体育新闻</router-link>|-->
<!--            <router-link to="./yule">娱乐新闻</router-link>|-->
<!--            <router-link to="./caijing">财经新闻</router-link>-->
<!--        </nav>-->


        <!-- to的写法：对象path-->
<!--        <nav>-->
<!--            <router-link :to="{path:'/newsList/tiyu'}">体育新闻</router-link>|-->
<!--            <router-link :to="{path:'/newsList/yule'}">娱乐新闻</router-link>|-->
<!--            <router-link :to="{path:'/newsList/caijing'}">财经新闻</router-link>-->
<!--        </nav>-->


        <!-- to的写法：对象name-->
        <nav>
            <router-link :to="{name:'tiyu'}">体育新闻</router-link>|
            <router-link :to="{name:'yule'}">娱乐新闻</router-link>|
            <router-link :to="{name:'caijing'}">财经新闻</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "NewsList.vue"
}
</script>

<style scoped>

</style>