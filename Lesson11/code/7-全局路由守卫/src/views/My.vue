<template>
    <div>
        <button @click="num++">{{num}}</button>
        <h3>欢迎<span :style="{color:'red'}">{{userName}}</span>的到来</h3>
        <button @click="outLogin">退出登陆</button>
        <hr/>
        <p>新闻标题：{{info.newsTitle}}</p>
        <p>新闻内容：{{info.content}}</p>
        <hr/>
        <MyList></MyList>
        <hr/>
        <input type="text">
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "My",
    data(){
        const userName = localStorage.getItem("userName");
        return {
            num:1,
            userName,
            info:{}
        }
    },
    methods:{
        outLogin(){
            localStorage.clear();
            this.$router.push({
                path:"login"
            });
        },
        getInfoById(id){
            if(!id) return;
            axios.get("http://zhangpeiyue.com/newsList/"+id).then(value=>{
                this.info = value.data;
            })
        }
    },
    beforeCreate() {
        console.log("1-beforeCreate");
    },
    created(){
        console.log("2-created");
    },
    beforeMount() {
        console.log("3-beforeMount");
    },
    mounted(){
        console.log("4-mounted");
        const {id} = this.$route.query;
        this.getInfoById(id);
        // if(id){
        //     axios.get("http://zhangpeiyue.com/newsList/"+id).then(value=>{
        //         this.info = value.data;
        //     })
        // }
    },
    beforeRouteEnter(to,from,next){
        console.log("beforeRouteEnter");
        if(localStorage.getItem("userName")) next();
        else{
            // 跳转至登陆界面
            next("/login");
        }
    },
    beforeRouteUpdate(to,from,next){
        console.log("beforeRouteUpdate");
        if(to.query.id !== from.query.id){
            // console.log(this.$route === from);//
            const {id} = to.query;
            this.getInfoById(id);
            next();
        }
    },
    beforeRouteLeave(to,from,next){
        console.log("beforeRouteLeave")
        // if(window.confirm("您确定要离开个人中心吗?"))
            next();// 放行

    }
}
</script>

<style scoped>

</style>