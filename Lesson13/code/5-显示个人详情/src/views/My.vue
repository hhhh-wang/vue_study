<template>
    <div>
        <h3>欢迎{{$store.state.user.info.name}}的到来！</h3>
        <button @click="logout">退出登陆</button>
        <img :src="$store.state.user.info.avatar" alt="">
    </div>
</template>

<script>
export default {
    name: "My",
    methods:{
        async logout(){
            await this.$store.dispatch('postLogout');
            this.$router.push("/login?cb="+this.$route.path)
        }
    },
    mounted(){
        this.$store.dispatch("getInfoAsync")
    }
}
</script>

<style scoped>

</style>