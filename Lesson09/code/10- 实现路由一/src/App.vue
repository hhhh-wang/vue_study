<template>
    <div>
        <!--指定路由呈现的位置：为路由组件占位-->
        <!--  components->one->组件-->
        <router-view name="one"></router-view>
        <!--        components->main->组件-->
        <router-view name="main"></router-view>
        <!--        components->footer->组件-->
        <router-view name="footer"></router-view>
        <hr/>
<!--在单页面多路由中，router-view省略name，那么会使用components->default->组件-->
        <router-view></router-view>
        <router-view></router-view>
        <router-view></router-view>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App.vue"
}
</script>

<style scoped>

</style>