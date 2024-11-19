<template>
    <h3>App组件</h3>
    <p>{{ num }}</p>
    <p>{{ arr }}</p>
    <button @click="num++">{{ num }}</button>
    <button @click="changeNum">{{ num }}</button>
    <button @click="changeNum2(100)">{{ num }}</button>
    <p>{{sum}}</p>
    <hr/>
    <button @click="isShow=!isShow">{{isShow}}</button>
    <Child v-if="isShow"></Child>
    <p v-for="item in arr" :key="item">{{item}}</p>
</template>

<script>
// 支持Vue2的基本语法,不支持销毁生命周期钩子函数
import Child from "@/components/Child";
const arr = [1, 2, 3, 4, 5];
export default {
    name: "App",
    components: {Child},
    data() {
        return {
            num: 1,
            arr,
            isShow:true
        }
    },
    computed:{
        sum(){
            // return this.arr.length;
            return this.arr.reduce((sum,item)=>{
                sum+=item;
                return sum;
            },0)
        }
    },
    methods: {
        changeNum() {
            // 1  false
            // console.log(this.num,this.arr===arr);
            this.num++;
            this.arr.push(this.arr.length + 1);
        },
        changeNum2(n) {
            this.num += n;
        }
    },
    // 挂载阶段
    beforeCreate() {
        console.log("1-beforeCreate");
    },
    created(){
        console.log("2-created");
    },
    beforeMount() {
        console.log("3-beforeMount");
    },
    mounted(){
        console.log("4-mounted");
    },
    // 更新
    beforeUpdate() {
        console.log("1-beforeUpdate");
    },
    updated() {
        console.log("2-updated");
    }
}
</script>

<style scoped>

</style>