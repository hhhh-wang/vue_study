<template>
    <ul>
        <li v-for="item in state.films" :key="item.filmId">
            <a href="/home/message/1">{{item.name}}</a> &nbsp;&nbsp;
            <button>push</button> &nbsp;
            <button>replace</button>
        </li>
    </ul>
    <button>前进</button>
    <button>后退</button>
    <hr/>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import {onMounted, reactive} from "vue";
import axios from "axios";
let state = reactive({
    films:[]
})
onMounted(function(){
    // https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=6086743
    axios.get('https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=3&type=1&k=6086743',{
        headers:{
            "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16923264631851757969801217","bc":"310100"}',
            "X-Host":"mall.film-ticket.film.list"
        }
    }).then(value=>{
        // console.log(value.data.data.films);
        state.films = value.data.data.films;
    })

})
</script>

<style scoped>

</style>
 