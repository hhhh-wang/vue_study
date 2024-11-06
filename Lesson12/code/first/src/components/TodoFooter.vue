<template>
    <div class="todo-footer">
        <label>
            <input @change="$store.commit('UP_TASK_LIST_IS_CHECKED_ALL',$store.getters.isAll)" :checked="$store.getters.isAll" type="checkbox"/>
        </label>
        <span>已选中{{$store.getters.checkedNum}}/全部{{$store.getters.sumNum}}</span>
        <button @click="$store.commit('DEL_TASK_LIST_BY_IS_CHECKED')" v-show="$store.getters.checkedNum>0" class="btn btn-danger">清除已选中任务</button>
    </div>
</template>

<script>
export default {
    name: "TodoFooter"
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