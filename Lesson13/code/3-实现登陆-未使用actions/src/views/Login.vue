<template>
    <form name="loginForm" @submit.prevent="login">
        <p>用户名：<input name="username" type="text"></p>
        <p>密码：<input name="password" type="password"></p>
        <button>登陆</button>
    </form>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    methods:{
        async login(){
            const username = document.loginForm.username.value.trim();
            const password = document.loginForm.password.value.trim();
            const {data} = await axios.post("http://syt-api.atguigu.cn/admin/acl/index/login",{
                username,
                password
            })
            if(data.code === 200){
                // localStorage.setItem("token",data.data);
                this.$store.commit("SET_TOKEN",data.data);
                // 编程式导航：
                // this.$router.push();
                // this.$router.replace();
                // this.$router.go(-1);
                // this.$router.go(1);
                // this.$router.back();// 相当于this.$router.go(-1)
                // this.$router.forward();// 相当于this.$router.go(1)
                const {cb="/my"} = this.$route.query;
                this.$router.replace(cb)
            }else{
                alert("失败"+JSON.stringify(data))
            }

        }
    }
}
</script>

<style scoped>

</style>