<template>
    <div>
        <h3>Child:{{$store.state.num}}</h3>
        <hr/>
        <One></One>
        <Two></Two>
    </div>
</template>

<script>
import One from "@/components/One";
import Two from "@/components/Two";
export default {
    name: "Child",
    components: {Two, One},
    mounted(){
        console.log("child",this.$store.state.num);
    }
}
</script>

<style scoped>

</style>