<template>
    <div>
        <h3>父组件App</h3>
        {{sex}}
        <hr/>
        <Child @click="fn" a="1" b="2" c="3" :sex="sex"/>
    </div>

</template>

<script>
import Child from "@/components/Child";
export default {
    name:"App",
    components: {Child},
    data(){
        return {
            sex:"男"
        }
    },
    methods:{
        fn(a,b,c,d){
            console.log('fn',a,b,c,d)
            this.sex = d;
        }
    }
}
</script>

<style scoped>
</style>