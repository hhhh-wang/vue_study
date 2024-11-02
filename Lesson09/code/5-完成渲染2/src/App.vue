<template>
    <div>
        <div class="btn">
            <button :class="{active:type===1}" @click="type=1">正在热映</button>
            <button :class="{active:type===2}" @click="type=2">即将上映</button>
        </div>
        <Loading v-if="isLoading"></Loading>
        <template v-else>
            <div v-for="item in filmsList" :key="item.filmId">
                <img height="200" :src="item.poster"/>
                <p>{{item.name}}</p>
                <hr/>
            </div>
        </template>

    </div>
</template>

<script>
// 引入模块顺序建议：首先内置模块，其次第三方模块，再次自定义模块，最后样式
import axios from 'axios';


export default {
    name: "App",
    data(){
        return {
            filmsList:[],
            type:1,
            isLoading:false
        }
    },
    methods:{
        maizuoGateway(){
            this.isLoading = true;
            axios.get("https://m.maizuo.com/gateway",{
                params:{
                    cityId:310100,
                    pageNum:1,
                    pageSize:10,
                    type:this.type,
                    t:Date.now()
                },
                headers:{
                    "X-Host":"mall.film-ticket.film.list",
                    "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16903322302568072615428097"}'
                }
            }).then(value=>{
                console.log(value.data.data);
                this.isLoading=false;
                this.filmsList = value.data.data.films;
            }).catch(err=>{
                console.log("失败",err);
            })
        }
    },
    watch:{
        type:{
            handler(){
                this.maizuoGateway();
            },
            immediate:true
        }
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