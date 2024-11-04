<template>
    <div>
        <h3>params+path接收参数</h3>
    </div>
</template>

<script>
export default {
    name: "Three",
    mounted(){
        console.log(this.$route.params)
    }
}
</script>

<style scoped>

</style>