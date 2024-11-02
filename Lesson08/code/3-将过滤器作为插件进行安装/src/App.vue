<template>
    <div>
        <div v-for="item in goodsList" :key="item.id">
            <p>商品名称：{{item.goodsName}}</p>
            <p>商品价格：{{item.goodsPrice | currency(3)}}</p>
            <p>上架时间：{{item.addTime | date}}</p>
            <hr/>
        </div>
        <hr/>
        <Child/>
    </div>
</template>

<script>
import Child from "@/components/Child";
export default {
    name: "App",
    components: {Child},
    data(){
        return {
            goodsList:[
                {
                    id:1,
                    goodsName:"app->1",
                    goodsPrice:19.123,
                    addTime:Date.now()
                },
                {
                    id:2,
                    goodsName:"app->2",
                    goodsPrice:34.456,
                    addTime:Date.now()-99999999
                }
            ]
        }
    },
    // 局部过滤器：在哪个组中注册的，只允许在哪个组件中使用
    // filters:{
    //     date(t){
    //         const timer = new Date(t);
    //         return timer.getFullYear() + "-" +
    //                 (timer.getMonth() + 1).toString().padStart(2, 0) + "-" +
    //                 timer.getDate().toString().padStart(2, 0) + " " +
    //                 timer.getHours().toString().padStart(2, 0) + ":" +
    //                 timer.getMinutes().toString().padStart(2, 0) + ":" +
    //                 timer.getSeconds().toString().padStart(2, 0);
    //     },
    //     currency(v,n=2,type="$"){
    //         return type+v.toFixed(n);
    //     }
    // }
}
</script>

<style scoped>

</style>