<template>
    <form name="loginForm" @submit.prevent="login">
        <p>用户名：<input name="username" type="text"></p>
        <p>密码：<input name="password" type="password"></p>
        <button>登陆</button>
    </form>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";
export default {
    name: "Login",
    methods:{
        ...mapActions("user",{
            login2:"login"
        }),
        async  login(){
            const username = document.loginForm.username.value.trim();
            const password = document.loginForm.password.value.trim();
            // 会执行所有模块中名字为login的action
            // dispatch运行action函数是同步的。
            // dispatch返回的是一个Promise实例，成功值为action函数的返回值
            // 非简写：
            await this.$store.dispatch("user/login",{username,password});
            // 简写：
            // await this.login2({username,password});
            this.$router.replace(this.$route.query.cb || "/my");

        }
    }
}
</script>

<style scoped>

</style>