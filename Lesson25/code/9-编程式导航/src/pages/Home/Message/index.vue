<template>
    <ul>
        <li v-for="item in state.films" :key="item.filmId">
            <router-link :to="{
                path:'/home/message/'+item.filmId
            }">{{item.name}}</router-link> &nbsp;&nbsp;
            <button @click="goDetail(item.filmId)">push</button> &nbsp;
            <button @click="$router.replace('/home/message/'+item.filmId)">replace</button>
        </li>
    </ul>
    <button @click="$router.forward()">前进</button>
    <button @click="$router.back()">后退</button>
    <hr/>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import {onMounted, reactive} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
const $router = useRouter();
const goDetail=(filmId:string)=>{
    $router.push('/home/message/'+filmId)
}
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
 