<template>
    <div class="todo-header">
        <input @keyup.enter="ADD_TASK_LIST($event)" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: "TodoHeader",
    methods:mapMutations(["ADD_TASK_LIST"])
}
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>