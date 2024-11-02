<template>
    <ul class="todo-main">
        <li v-for="item in taskList" :key="item.id">
            <label>
                <input @change="upTaskListById(item.id)" :checked="item.isChecked" type="checkbox"/>
                <span>{{item.title}}</span>
            </label>
            <button class="btn btn-danger" style="display:none">删除</button>
        </li>
    </ul>
</template>

<script>
export default {
    name: "TodoMain.vue",
    props:["taskList"],
    methods:{
        upTaskListById(id){
            // 1
            this.$emit("update:taskList",this.taskList.map(item=>{
                if(item.id === id) item.isChecked = !item.isChecked;
                return item;
            }))

            // 2
            // const taskList = [...this.taskList];
            // const info = taskList.find(v=>v.id=== id);
            // info.isChecked = !info.isChecked;
            // this.$emit("update:taskList",taskList);
        }
    }
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

</style>