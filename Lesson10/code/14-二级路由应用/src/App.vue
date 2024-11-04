<template>
    <div class="container">
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

<style lang="less">
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