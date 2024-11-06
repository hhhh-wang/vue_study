<template>
    <div>
        <ul>
            <li v-for="item in films" :key="item.filmId">
                <a href="/home/message/1">{{item.name}}</a> &nbsp;&nbsp;
                <button>push</button> &nbsp;
                <button>replace</button>
            </li>
        </ul>
        <button>前进</button>
        <button>后退</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ComingSoon",
    data(){
        return {
            films:[]
        }
    },
    mounted(){
        axios({
            url:"https://m.maizuo.com/gateway",
            params:{
                cityId:310100,
                pageNum:1,
                pageSize:3,
                type:2,
                v:Date.now()
            },
            headers:{
                "X-Client-Info":JSON.stringify({"a":"3000","ch":"1002","v":"5.2.1","e":"16905280922820767016288257","bc":"310100"}),
                "X-Host":"mall.film-ticket.film.list"
            }
        }).then(value=>{
            this.films = value.data.data.films;
        })
    }
}
</script>

<style scoped>

</style>