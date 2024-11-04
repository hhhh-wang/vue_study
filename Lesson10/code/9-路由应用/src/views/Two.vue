<template>
    <div>
        <h3>params接收参数</h3>
        <p>a:{{this.$route.params.a}}</p>
        <p>b:{{this.$route.params.b}}</p>
    </div>
</template>

<script>
export default {
    name: "Two",
    mounted(){
        console.log(this.$route);
    }
}
</script>

<style scoped>

</style>