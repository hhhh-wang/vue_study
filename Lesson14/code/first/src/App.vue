<template>
    <!-- 项目的最外层 -->
    <div class="outer">
        <!--  头部 -->
        <Header></Header>

           <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
    name: "App",
    components: {Footer, Header, Home}
}
</script>

<style lang="less" scoped>

</style>