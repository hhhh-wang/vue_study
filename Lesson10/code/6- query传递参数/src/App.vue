<template>
    <div class="container">
        <nav>
            <router-link exact to="/">首页</router-link>
            <!-- 1-query-->
            <router-link to="/one?id=1&type=2&obj={a:1,b:2}">one1</router-link>
            <router-link :to="{
                path:'/one?id=11&type=12&obj={a:1,b:2}'
            }">one2</router-link>
            <router-link :to="{
                path:'/one',
                // query的值是一个对象，会将对象转为查询字符串与path进行拼接
                query:{
                    id:21,
                    type:22,
                    obj:{
                        a:100,
                        b:200
                    }
                }
            }">one3</router-link>
            <router-link :to="{
                name:'suibian',
                // query的值是一个对象，会将对象转为查询字符串与path进行拼接
                query:{
                    id:21,
                    type:222,
                    obj:{
                        a:100,
                        b:200
                    }
                }
            }">one4</router-link>|


            <router-link to="/two">two</router-link>
            <router-link to="/three">three</router-link>
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
    .container{
        text-align: center;
        a{
            margin: 5px;
            color:skyblue;
        }
        a.active{
            color:red;
        }
    }
</style>