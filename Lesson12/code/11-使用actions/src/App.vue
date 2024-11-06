<template>
    <div>
        <div v-for="item in $store.state.items" :key="item.id">
            {{item.full_name}}
        </div>
    </div>
</template>

<script>
// methods结合使用的是：mapMutations,mapActions
// computed结合使用的是：mapState,mapGetters
import {mapActions} from "vuex";
export default {
    name: "App.vue",
    methods:{
        ...mapActions(["getItems"]),
        // 相当于：
        // ...{
        //     getItems(payload){
        //         this.$store.dispatch("getItems",payload)
        //     }
        // }

        ...mapActions({
            one:"getItems"
        }),
        // 相当于：
        // ...{
        //     one(payload){
        //         this.$store.dispatch("getItems",payload)
        //     }
        // }
    },
    mounted(){
        // 第一个参数是action的名字。作用：调用store->index.js->actions->getItems,传递参数react
        // 1- 未简写
        // this.$store.dispatch("getItems","react");
        // 2- 简写
        // this.getItems("react");
        // 3- 简写
        this.one("react");
    }
}
</script>

<style scoped>



/*app*/
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}



</style>