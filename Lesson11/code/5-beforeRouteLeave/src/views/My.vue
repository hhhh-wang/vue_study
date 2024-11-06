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
    // 在进入路由之前可以进行拦截。
    // 比如从/home进入到/my,那么to是My路由信息，from是Home路由信息
    // to:进入的路由
    // from:来自的路由
    // next:是一个函数。作用：决定是否允许进入到路由to
    beforeRouteEnter(to,from,next){
        // console.log("在进入路由之前可以进行拦截","beforeRouteEnter");
        // console.log("to",to);
        // console.log("from",from);
        // console.log(this);// undefined
        // console.log("next",next);
        // next();// 允许进入
        // next(true);// 允许进入
        // next(false);// 不允许进入（或者不运行next也是不允许进入）
        // next(function(){
        //     // 会在beforMount与mounted之间执行
        //     console.log("回调函数",this[0])
        // })

        // next((vc)=>{
        //     // 会在beforMount与mounted之间执行
        //     // console.log("回调函数",this)
        //     // vc:当前组件实例
        //     console.log(vc.userName,vc.$route===to);// zhangsan true
        //     vc.userName = 100;
        // })
        // console.log("over");


        if(localStorage.getItem("userName")) next();
        else{
            // 跳转至登陆界面
            next("/login");
        }
    },
    // 在路由信息更新后执行.
    // to:更新后的路由信息
    // from:更新前的路由信息
    beforeRouteUpdate(to,from,next){
        // 当路由信息发生改变后执行。
        // console.log("beforeRouteUpdate")
        // console.log("beforeRouteUpdate-to",to)
        // console.log("beforeRouteUpdate-from",from);
        // next();

        // console.log(this);// 当前组件实例(路由信息未更新)
        if(to.query.id !== from.query.id){
            // console.log(this.$route === from);//
            const {id} = to.query;
            this.getInfoById(id);
            next();
            // if(id){
            //     axios.get("http://zhangpeiyue.com/newsList/"+id).then(value=>{
            //         this.info = value.data;
            //         next();
            //     })
            // }
        }
        // next 不支持函数
    },
    // 离开路由前执行:
    // to:去哪个路由
    // from:离开哪个路由(当前路由)
    beforeRouteLeave(to,from,next){
        // this是当前实例
        // console.log("beforeRouteLeave",this)
        // console.log("beforeRouteLeave->to",to)
        // console.log("beforeRouteLeave->from",from)
        // console.log(this.$route === to);// false
        // console.log(this.$route === from);// true
        // console.log(next);

        if(window.confirm("您确定要离开个人中心吗?"))
            next();// 放行

    }
}
</script>

<style scoped>

</style>