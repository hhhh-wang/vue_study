<template>
    <div>
        <div v-for="item in $store.state.items" :key="item.id">
            {{item.full_name}}
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App.vue",
    mounted(){
        axios.get("https://api.github.com/search/repositories?q=r&sort=stars").then(value=>{
            console.log(value.data.items);
            this.$store.commit("UP_ITEMS",value.data.items);
        })
    }
}
</script>

<style scoped>



/*app*/
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}



</style>