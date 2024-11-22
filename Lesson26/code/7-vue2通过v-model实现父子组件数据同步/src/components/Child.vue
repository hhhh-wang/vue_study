<template>
    <div>
        <h3>子组件：child->{{value}}</h3>
        <button @click="fn">点我</button>
    </div>
</template>

<script>
export default {
    name:"Child",
    props:["value"],
    methods:{
        fn(){
            // console.log("fn")
            this.$emit("input",100)
        }
    },
    mounted(){
        console.log(this)
    }
}
</script>

<style scoped>
</style>