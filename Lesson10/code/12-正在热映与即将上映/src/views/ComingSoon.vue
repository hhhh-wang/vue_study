<template>
    <div>
        <div v-for="item in films" :key="item.filmId">
            <img height="200" :src="item.poster"/>
            <p>{{item.name}}</p>
            <p>上映日期：{{item.premiereAt | date}}</p>
            <hr/>
        </div>
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
    filters:{
        date(v){
            const timer = new Date(v*1000);
            let arr = ["日","一","二","三","四","五","六"];
            return "周"+arr[timer.getDay()]+ " "
                    +(timer.getMonth()+1).toString().padStart(2,0)+"月"+
                    timer.getDate().toString().padStart(2,0)+"日"
        }
    },
    mounted(){
        axios.get("https://m.maizuo.com/gateway",{
            params:{
                cityId:310100,
                pageNum:1,
                pageSize:2,
                type:2,
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
    }
}
</script>

<style scoped>

</style>