<template>
    <h3>{{state.film.name}}</h3>
    <p>{{state.film.synopsis}}</p>
</template>

<script lang="ts" setup>
// 1- 在模板中可以直接使用$route
// 2- 在script标签中无法使用$route，如何解决？
// 方案一
// import $router from "@/router";
// console.log($router.currentRoute.value.params.filmId);

// 方案二
// import {useRouter} from "vue-router";
// import router from "@/router"
// const $router = useRouter();
// console.log($router===router);// true
// console.log($router.currentRoute.value.params.filmId)

// 方案三
// import {useRoute} from "vue-router";
// const $route = useRoute();
// console.log($route.params.filmId)

import {onMounted, reactive, watch} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import axios from "axios";
const $route = useRoute();
const state = reactive({
    film:{}
})
// 获取数据方案一
// const getway = async function(filmId:string){
//     const {data:{data:{film}}} =await axios.get("https://m.maizuo.com/gateway?filmId="+filmId+"&k=7345366",{
//         headers:{
//             "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16923264631851757969801217","bc":"310100"}',
//             "X-Host":"mall.film-ticket.film.info"
//         }
//     })
//     state.film = film;
// }
// onBeforeRouteUpdate(async function(to,from,next){
//     await getway(to.params.filmId as string)
//     next();
// })
// onMounted(function(){
//     getway($route.params.filmId as string)
// })

// 获取数据方案二- watch
watch(()=>$route.params.filmId,async (filmId)=>{
    const {data:{data:{film}}} =await axios.get("https://m.maizuo.com/gateway?filmId="+filmId+"&k=7345366",{
        headers:{
            "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16923264631851757969801217","bc":"310100"}',
            "X-Host":"mall.film-ticket.film.info"
        }
    })
    state.film = film;
},{
    immediate:true
})
</script>

<style scoped>

</style>
 