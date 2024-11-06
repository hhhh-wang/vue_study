<template>
    <div>
        <div :key="item.id" v-for="item in myList">
            <router-link :to="{
                path:'/my',
                query:{
                    id:item.id
                }
            }">{{item.newsTitle}}</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "MyList.vue",
    data(){
        return {
            myList:[]
        }
    },
    mounted(){
        axios.get("http://zhangpeiyue.com/newsList").then(value=>{
            console.log(value.data);
            this.myList = value.data;
        })
    }
}
</script>

<style scoped>

</style>