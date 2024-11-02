<template>
    <div>
        <div class="btn">
            <button :class="{active:type===1}" @click="maizuoGateway(1)">正在热映</button>
            <button :class="{active:type===2}" @click="maizuoGateway(2)">即将上映</button>
        </div>

        <div v-for="item in filmsList" :key="item.filmId">
            <img height="200" :src="item.poster"/>
            <p>{{item.name}}</p>
            <hr/>
        </div>
    </div>
</template>

<script>
// 正在热映：https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9925800
// 即将上映：https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=9925800
import axios from 'axios';
export default {
    name: "App",
    data(){
        return {
            filmsList:[],
            type:1
        }
    },
    methods:{
        maizuoGateway(type=1){

            axios.get("https://m.maizuo.com/gateway",{
                params:{
                    cityId:310100,
                    pageNum:1,
                    pageSize:10,
                    type,
                    t:Date.now()
                },
                headers:{
                    "X-Host":"mall.film-ticket.film.list",
                    "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16903322302568072615428097"}'
                }
            }).then(value=>{
                this.type = type;
                console.log(type,value.data.data);
                this.filmsList = value.data.data.films;
            }).catch(err=>{
                console.log("失败",err);
            })
        }
    },
    mounted(){
        this.maizuoGateway();
    }
}
</script>

<style lang="less" scoped>
    .btn{
        button{
            padding:5px;
            margin:5px;
        }
        button.active{
            color:red;
        }

    }
</style>