<template>
    <div>
        <h3>调用猫眼数据</h3>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    async mounted(){
        const {data} = await axios.get("http://zhangpeiyue.com:8089/maoyan");
        console.log(data.data.hot);
    }
}
</script>

<style scoped>

</style>