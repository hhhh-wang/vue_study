<template>
    <div class="container">
        <nav v-show="!$route.meta.isHide">
            <router-link active-class="active" to="/nowPlaying">正在热映</router-link>|
            <router-link active-class="active" to="/comingSoon">即将上映</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    updated(){
        console.log("updated",this.$route)
    },
    mounted(){
        console.log("mounted")
    }
}
</script>

<style lang="less" scoped>
    .container{
        text-align: center;
        a{
            color:skyblue;
            margin:5px;
        }
        a.active{
            color:red;
        }
    }
</style>