<template>
    <div>
        <ul>
            <li v-for="item in films" :key="item.filmId">
                <router-link :to="'/film/'+$route.params.type+'/'+item.filmId">{{item.name}}</router-link> &nbsp;&nbsp;
                <button @click="$router.push('/film/'+$route.params.type+'/'+item.filmId)">push</button> &nbsp;
                <button @click="$router.replace('/film/'+$route.params.type+'/'+item.filmId)">replace</button>
            </li>
        </ul>
        <button @click="$router.go(1)">前进</button>
        <button @click="$router.go(-1)">后退</button>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "FilmList",
    data(){
        return {
            films:[]
        }
    },
    watch:{
        "$route.params":{
            handler(){
                // console.log("handler",this.$route.params.type)
                const {type} = this.$route.params;
                axios({
                    url:"https://m.maizuo.com/gateway",
                    params:{
                        cityId:310100,
                        pageNum:1,
                        pageSize:3,
                        type,
                        v:Date.now()
                    },
                    headers:{
                        "X-Client-Info":JSON.stringify({"a":"3000","ch":"1002","v":"5.2.1","e":"16905280922820767016288257","bc":"310100"}),
                        "X-Host":"mall.film-ticket.film.list"
                    }
                }).then(value=>{
                    this.films = value.data.data.films;
                })
            },
            immediate:true,
            deep:true
        }
    }
}
</script>

<style scoped>

</style>