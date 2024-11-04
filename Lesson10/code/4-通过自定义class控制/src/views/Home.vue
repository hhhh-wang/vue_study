<template>
    <div>
        <h3>首页界面</h3>
    </div>
</template>

<script>
export default {
    name: "Home",
    beforeCreate() {
        console.log("1-Home->beforeCreate");
    },
    created(){
        console.log("2-Home->created");
    },
    beforeMount() {
        console.log("3-Home->beforeMount");
    },
    mounted(){
        console.log("4-Home->mounted");
    },
    beforeDestroy() {
        console.log("8-Home->beforeDestroy");
    },
    destroyed() {
        console.log("9-Home->destroyed");
    }
}
</script>

<style scoped>

</style>