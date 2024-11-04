<template>
    <div>
        <div v-for="item in films" :key="item.filmId">
            <img height="200" :src="item.poster"/>
            <p>{{item.name}}</p>
            <p>主演：{{item.actors.map(item=>item.name).join(" ")}}</p>
            <p>主演：{{item.actors | actors}}</p>
            <hr/>
        </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "NowPlaying",
    data(){
        return {
            films:[]
        }
    },
    mounted(){
        axios.get("https://m.maizuo.com/gateway",{
            params:{
                cityId:310100,
                pageNum:1,
                pageSize:2,
                type:1,
                k:Date.now()
            },
            headers:{
                "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16905280922820767016288257","bc":"310100"}',
                "X-Host":"mall.film-ticket.film.list"
            }
        }).then(value=>{
            console.log(value.data);
            this.films = value.data.data.films;
        })
    },
    filters:{
        actors(v){
            return v.map(item=>item.name).join(" ")
        }
    }
}
</script>

<style scoped>

</style>