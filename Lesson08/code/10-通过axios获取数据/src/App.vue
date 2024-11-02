<template>
    <div>
        <h3>App</h3>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    async mounted(){
        // 1
        // axios.get("https://api.github.com/search/repositories",{
        //     // ?q=r&sort=stars
        //     params:{
        //         q:"r",
        //         sort:"stars"
        //     }
        // }).then(response=>{
        //     console.log(response.data);
        // })

        // 2
        // axios.get("https://api.github.com/search/repositories",{
        //     // ?q=r&sort=stars
        //     params:{
        //         q:"r",
        //         sort:"stars"
        //     }
        // }).then(({data})=>{
        //     console.log(data);
        // })

        // 3
        const {data} = await  axios.get("https://api.github.com/search/repositories",{
            params: {
                q: "r",
                sort: "stars"
            }
        });
        console.log(data);
    }
}
</script>

<style scoped>

</style>