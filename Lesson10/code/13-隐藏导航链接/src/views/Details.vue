<template>
    <div>
        <h3>{{film.name}}</h3>
        <img height="400" :src="film.poster" alt="">
        <p>{{film.synopsis}}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Details",
    data(){
        return {
            film:{}
        }
    },
    mounted(){
        axios.get("https://m.maizuo.com/gateway",{
            params:{
                filmId:this.$route.params.filmId,
                k:Date.now()
            },
            headers:{
                "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16905280922820767016288257","bc":"310100"}',
                "X-Host":"mall.film-ticket.film.info"
            }
        }).then(value=>{
            console.log(value.data);
            this.film = value.data.data.film;
        })
    }
}
</script>

<style scoped>

</style>