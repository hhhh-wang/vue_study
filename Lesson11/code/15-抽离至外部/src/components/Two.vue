<template>
    <div>
        <h3>Two:{{$store.state.num}}</h3>
    </div>
</template>

<script>
export default {
    name: "Two",
    mounted(){
        console.log("two",this.$store.state.num);
    }
}
</script>

<style scoped>

</style>