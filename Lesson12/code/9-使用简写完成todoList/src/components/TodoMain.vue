<template>
    <ul class="todo-main">
        <li @mouseenter="id=item.id" @mouseleave="id=-1" v-for="item in taskList" :key="item.id">
            <label>
                <input @change="UP_TASK_LIST_IS_CHECKED_BY_ID(item.id)" :checked="item.isChecked" type="checkbox"/>
                <span>{{item.title}}</span>
            </label>
            <button class="btn btn-danger" @click="DEL_TASK_LIST_BY_ID(item.id)" v-show="id===item.id">删除</button>
        </li>
    </ul>
</template>

<script>
import {mapState,mapMutations} from "vuex";

export default {
    name: "TodoMain",
    computed:mapState(["taskList"]),
    methods:mapMutations(["UP_TASK_LIST_IS_CHECKED_BY_ID","DEL_TASK_LIST_BY_ID"]),
    data(){
        return {
            id:-1
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
    /*display: none;*/
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

</style>