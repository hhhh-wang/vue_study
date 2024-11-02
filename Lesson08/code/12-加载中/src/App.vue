<template>
    <div>
        <h3>App</h3>
        <h3 v-if="isLoading">正在拼命加载中……</h3>
        <h3 v-else-if="isError">产生异常，请稍后再试……</h3>
        <template v-else>
            <div v-for="item in items" :key="item.id">
                <p>{{item.full_name}}</p>
            </div>
        </template>

    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    data(){
        return {
            items:[],
            isLoading:true,
            isError:false,// 是否有异常
        }
    },
    async mounted(){
        try{
            const {data} = await  axios.get("https://api.github.com/search/repositories",{
                params: {
                    q: "r",
                    sort: "stars"
                }
            });
            this.items = data.items;
            this.isLoading = false;
        }catch (err){
            this.isLoading = false;
            this.isError= true;
        }

    }
}
</script>

<style scoped>

</style>