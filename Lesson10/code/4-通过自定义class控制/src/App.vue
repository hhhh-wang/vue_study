<template>
    <div id="app">
<!--        <nav>-->
<!--            &lt;!&ndash;   active-class:不管是否为精确匹配，只要匹配上了即使用样式active         &ndash;&gt;-->
<!--            <router-link exact active-class="active"  to="/">首页</router-link>|-->
<!--            <router-link  active-class="active" to="/newsList">新闻列表页</router-link>|-->
<!--            <router-link  active-class="active" to="/goodsList">商品列表页</router-link>|-->
<!--            <router-link  active-class="active" to="/my">个人中心</router-link>-->
<!--        </nav>-->

        <nav>
            <!--   exact-active-class:只有精确匹配才会使用样式active
                   相当于：使用active-class与exact的结合。

                   -->
            <router-link  exact-active-class="active"  to="/">首页</router-link>|
            <router-link  exact-active-class="active" to="/newsList">新闻列表页</router-link>|
            <router-link  active-class="active" to="/goodsList">商品列表页</router-link>|
            <router-link  active-class="active" to="/my">个人中心</router-link>
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


// 比如路由的配置地址： /my
// 假如在浏览器中请求的地址为：/my 说明精确匹配。  router-link-exact-active  router-link-active  如果精确匹配也属于非精确匹配项。
// 假如在浏览器中请求的地址为：/my/a 说明非精确匹配。 router-link-active
// 假如在浏览器中请求的地址为：/mya 说明不匹配

// 精确匹配：浏览器地址与路由设置地址完全一致
// 非精确匹配：浏览器地址是路由设置地址开头的部分。 /my      /my



// router-link-exact-active:（精确匹配）当前路由地址与router-view匹配成功，则增加该样式
// router-link-active:（非精确匹配）当前路由地址与router-view匹配成功，则增加该样式
#app {
    text-align: center;

    a {
        padding: 5px;
        color: skyblue;
    }
    a.active{
        color:red;
    }
}
</style>