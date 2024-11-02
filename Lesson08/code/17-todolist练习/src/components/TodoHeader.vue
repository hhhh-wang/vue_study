<template>
  <div class="todo-header">
    <input type="text" @keyup.enter="addTaskList" placeholder="请输入你的任务名称，按回车键确认"/>
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
      //重复性检查
      const find = this.taskList.find(v => v.title === title);
      if (find) {
        alert("任务重复");
        return;
      }
      // 添加数据
      const newTaskList = [{
        id: Date.now(),
        title,
        isChecked: true
      }, ...this.taskList];
      this.$emit('update:taskList', newTaskList);
      e.target.value = null;
    }


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