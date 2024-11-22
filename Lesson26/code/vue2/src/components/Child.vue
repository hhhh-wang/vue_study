<template>
    <div>
        <h3>子组件Child</h3>
        <p>userName:{{userName}}</p>
        <p>父组件中的userName:{{$parent.userName}}</p>
        <button @click="getParent">获取父组件实例</button>
    </div>
</template>

<script>
// $parent:可以获取父组件实例
export default {
    name:"Child",
    data(){
        return {
            userName:"child"
        }
    },
    methods:{
        getParent(){
            // console.log("child",this.$parent);
            this.$parent.userName="你被我修改了！";
        },
        changeUserName(v){
            this.userName = v;
        }
    }
}
</script>

<style scoped>
</style>