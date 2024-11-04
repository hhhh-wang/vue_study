<template>
    <div>
        <h3>新闻列表界面</h3>
    </div>
</template>

<script>
export default {
    name: "NewsList.vue",
    beforeCreate() {
        console.log("5-NewsList->beforeCreate");
    },
    created(){
        console.log("6-NewsList->created");
    },
    beforeMount() {
        console.log("7-NewsList->beforeMount");
    },
    mounted(){
        console.log("10-NewsList->mounted")
    },
    beforeDestroy() {
        console.log("NewsList->beforeDestroy");
    },
    destroyed() {
        console.log("NewsList->destroyed");
    }
}
</script>

<style scoped>

</style>