<template>
    <h3>Child</h3>
</template>

<script>
export default {
    name: "Child",
    beforeDestroy() {
        console.log("1-beforeDestroy");
    },
    destroyed() {
        console.log("2-destroyed");
    }
}
</script>

<style scoped>

</style>