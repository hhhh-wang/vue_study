<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"
             :checked="isAllChecked"
             @change="handleAllCheck"/>
    </label>
    <span>已完成{{ doneCount }}/全部{{ totalCount }}</span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: {
    taskList: {
      type: Array,
      required: true
    }
  },
  methods: {
    // 处理全选/全不选
    handleAllCheck(e) {
      const checked = e.target.checked;
      const newTaskList = this.taskList.map(item => {
        return { ...item, isChecked: checked }
      });
      this.$emit('update:taskList', newTaskList);
    }
  },

  computed: {
    // 计算已完成的任务数
    doneCount() {
      return this.taskList.filter(item => item.isChecked).length;
    },
    // 计算总任务数
    totalCount() {
      return this.taskList.length;
    },
    // 判断是否全部选中
    isAllChecked() {
      console.log(this.totalCount,this.doneCount,this.totalCount);
      return this.totalCount > 0 && this.doneCount === this.totalCount;
    }
  }
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