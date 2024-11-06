<template>
    <div>
        <h3>One:{{$store.state.num}}</h3>
    </div>
</template>

<script>
export default {
    name: "One",
    mounted(){
        console.log("one",this.$store.state.num);
    }
}
</script>

<style scoped>

</style>