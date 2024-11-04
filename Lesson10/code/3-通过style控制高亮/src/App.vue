<template>
    <div id="app">
        <!--实现跳转1：值是一个字符串-->
        <!-- exact:请求地址与to指定的地址精确匹配才会使用router-link-active样式
             如果不使用exact属性，那么地址精确匹配以及非精确匹配都会有router-link-active
            -->
        <nav>
            <router-link exact to="/">首页</router-link>
            |
            <router-link exact to="/newsList">新闻列表页</router-link>
            |
            <router-link to="/goodsList">商品列表页</router-link>
            |
            <router-link to="/my">个人中心</router-link>
        </nav>
        <!--实现跳转2：值是一个对象，通过path进行跳转-->
        <nav>
            <router-link exact :to="{path:'/'}">首页</router-link>
            |
            <router-link exact :to="{path:'/newsList'}">新闻列表页</router-link>
            |
            <router-link :to="{path:'/goodsList'}">商品列表页</router-link>
            |
            <router-link :to="{path:'/my'}">个人中心</router-link>
        </nav>
        <!--实现跳转2：值是一个对象，通过name进行跳转-->
        <nav>
            <router-link exact :to="{name:'index'}">首页</router-link>
            |
            <router-link exact :to="{name:'newsList'}">新闻列表页</router-link>
            |
            <router-link :to="{name:'goodsList'}">商品列表页</router-link>
            |
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

    //a.router-link-exact-active {
    //    color:red;
    //}

    a.router-link-active{
        color:red;
    }
}
</style>