<template>
    <div>
        <h3>{{info.login}}</h3>
        <img :src="info.avatar_url" alt="">
    </div>
</template>

<script>
export default {
    name: "Details",
    data(){
        return {
            info:{}
        }
    },
    mounted(){
        this.$github.get("https://api.github.com/users/"+this.$route.params.login).then(info=>{
            this.info = info;
        })
    }
}
</script>

<style scoped>

</style>