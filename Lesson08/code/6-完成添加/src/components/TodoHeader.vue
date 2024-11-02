<template>
    <div class="todo-header">
        <input @keyup.enter="addTaskList" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
</template>

<script>
export default {
    name: "TodoHeader",
    props: {
        taskList: {
            type: Array,
            required: true
        }
    },
    methods: {
        addTaskList(e) {
            const title = e.target.value.trim();
            if (!title) {
                alert("请输入任务标题");
                return;
            }
            // 判断数组中的任务是否拥有相同的标题
            if (this.taskList.some(v => v.title === title)) {
                alert("任务的标题不允许重复！");
                return;
            }
            // 将任务添加至数据中
            this.$emit("update:taskList", [
                {
                    id: Date.now(),
                    title,
                    isChecked: true
                },
                ...this.taskList
            ]);
            e.target.value = null;
        },
      checked


    }
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