<!--
<template>
  <ul class="todo-main">
    <li>
      <label>
        <input type="checkbox"/>
        <span>xxxxx</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
    <li>
      <label>
        <input type="checkbox"/>
        <span>yyyy</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
  </ul>
</template>
-->

<template>
  <ul class="todo-main">
    <li v-for="item in taskList" :key="item.id">
      <label>
        <input type="checkbox"
               :checked="item.isChecked"
               @change="handleCheck(item.id)"/>

        <span>{{ item.title }}</span>
      </label>
      <button class="btn btn-danger" style="display:none">删除</button>
    </li>
    <!-- 如果列表为空，可以显示一个提示 -->
    <li v-if="taskList.length === 0" class="todo-empty">
      暂无任务
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoMain.vue",
  props: {
    taskList: {
      type: Array,
      required: true
    }

  },
  methods: {
    handleCheck(id){
      console.log(id)
      const newTaskList = this.taskList.map((item) => {
        if(item.id === id) item.isChecked = !item.isChecked;
        return item;
      })
      console.log(newTaskList);
      this.$emit('update:taskList',newTaskList);

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