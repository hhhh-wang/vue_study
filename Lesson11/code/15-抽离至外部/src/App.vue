<template>
    <div>
        <h3>App:{{$store.state.num}}</h3>
        <hr/>
        <Child/>
    </div>
</template>

<script>
import Child from "@/components/Child";
export default {
    name: "App.vue",
    components: {Child},
    mounted(){
        console.log("app",this.$store.state.num);
    }
}
</script>

<style scoped>

</style>