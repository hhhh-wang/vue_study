<template>
    <div>
        <h3>子组件Child</h3>
        <p>a:{{$attrs.a}}</p>
        <p>b:{{$attrs.b}}</p>
        <p>c:{{$attrs.c}}</p>
        <p>sex:{{$attrs.sex}}</p>
        <button @click="test"> 点我</button>
    </div>
</template>

<script>
// 可以通过this.$attrs获取父向子传递过来的属性。
// 可以通过this.$listeners获取父向子传递过来的自定义事件(原生不可以)。
export default {
    name:"Child",
    methods:{
        test(){
            this.$listeners.click(1,2,3,4);
        }
    },
    mounted(){
        console.log(this);
    }
}
</script>

<style scoped>
</style>