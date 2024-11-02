<template>
    <div>
        <div class="btn">
            <button :class="{active:type===1}" @click="type=1">正在热映</button>
            <button :class="{active:type===2}" @click="type=2">即将上映</button>
        </div>
        <div class="page">
            <a v-show="pageNum>1" @click.prevent="maizuoGateway(pageNum-1)">上一页</a>{{pageNum}}/{{pageSum}}<a v-show="pageNum<pageSum" @click="maizuoGateway(pageNum+1)">下一页</a>
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
import {getGateway} from "@/api/maizuo"

export default {
    name: "App",
    data(){
        return {
            filmsList:[],
            type:1,
            isLoading:false,
            pageNum:1,// 当前页
            pageSum:1,// 总页数
            pageSize:2
        }
    },
    methods:{
        async maizuoGateway(pageNum=1){
            this.isLoading = true;
            const {data:{films,total}} = await getGateway(pageNum,this.pageSize,this.type)
            this.isLoading=false;
            this.filmsList = films;
            this.pageSum=Math.ceil(total/this.pageSize);
            this.pageNum = pageNum;
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
    .page{
        a{
            cursor: pointer;
        }
    }
</style>