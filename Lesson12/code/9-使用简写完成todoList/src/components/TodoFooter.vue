<template>
    <div class="todo-footer">
        <label>
            <input @change="UP_TASK_LIST_IS_CHECKED_ALL(isAll)" :checked="$store.getters.isAll" type="checkbox"/>
        </label>
        <span>已选中{{checkedNum}}/全部{{sumNum}}</span>
        <button @click="DEL_TASK_LIST_BY_IS_CHECKED" v-show="checkedNum>0" class="btn btn-danger">清除已选中任务</button>
    </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex"
export default {
    name: "TodoFooter",
    computed:mapGetters(["isAll","checkedNum","sumNum"]),
    methods:mapMutations(["DEL_TASK_LIST_BY_IS_CHECKED","UP_TASK_LIST_IS_CHECKED_ALL"])
}
</script>

<style scoped>

/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}

</style>