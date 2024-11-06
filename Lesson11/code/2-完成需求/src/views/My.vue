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
        if(!localStorage.getItem("userName")){
            // 编程式导航
            this.$router.push("/login");
        }
    },
    created(){
        console.log("created",this.a);
    },
    mounted(){
        console.log("mounted")
    }
}
</script>

<style scoped>

</style>