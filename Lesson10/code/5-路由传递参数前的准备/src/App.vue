<template>
    <div class="container">
        <nav>
            <router-link exact to="/">首页</router-link>
            <router-link to="/one">one</router-link>
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