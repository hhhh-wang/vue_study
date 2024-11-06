<template>
    <div>
        <h3>欢迎<span :style="{color:'red'}">{{userName}}</span>的到来</h3>
        <button @click="outLogin">退出登陆</button>
    </div>
</template>

<script>
export default {
    name: "My",
    data(){
        const userName = localStorage.getItem("userName");
        return {
            userName
        }
    },
    methods:{
        outLogin(){
            localStorage.clear();
            this.$router.push({
                path:"login"
            });
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
    }
}
</script>

<style scoped>

</style>