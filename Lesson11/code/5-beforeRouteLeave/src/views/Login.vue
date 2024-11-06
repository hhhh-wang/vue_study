<template>
    <div>
        <h3>登陆界面</h3>
        <input @keyup.enter="loginHandler" type="text" placeholder="请输入账号，回车登陆">
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            userList:["zhangsan","lisi","wangwu","zhaoliu","yanqi","shenba"]
        }
    },
    methods:{
        loginHandler(e){
            const userName = e.target.value.trim();
            if(userName.length === 0){
                alert("请输入用户名！");
                return;
            }
            if(this.userList.includes(userName)){
                localStorage.setItem("userName",userName);
                this.$router.push({
                    path:"/my"
                })
            }else{
                alert("用户名错误！")
            }
        }
    }

}
</script>

<style scoped>

</style>