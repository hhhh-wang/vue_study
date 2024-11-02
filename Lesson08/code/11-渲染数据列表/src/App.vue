<template>
    <div>
        <h3>App</h3>
        <div v-for="item in items" :key="item.id">
            <p>{{item.full_name}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    data(){
        return {
            items:[]
        }
    },
    async mounted(){
        const {data} = await  axios.get("https://api.github.com/search/repositories",{
            params: {
                q: "r",
                sort: "stars"
            }
        });
        this.items = data.items;
    }
}
</script>

<style scoped>

</style>