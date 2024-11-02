<template>
    <div>
        <h3>App</h3>
    </div>
</template>

<script>
// 正在热映：https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9925800
// 即将上映：https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=9925800
import axios from 'axios';
export default {
    name: "App",
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
                console.log(type,value.data);
            }).catch(err=>{
                console.log("失败",err);
            })
        }
    },
    mounted(){
        // 1- 正在热映
        this.maizuoGateway();
        // 2- 即将上映
        this.maizuoGateway(2);
    }
}
</script>

<style scoped>

</style>