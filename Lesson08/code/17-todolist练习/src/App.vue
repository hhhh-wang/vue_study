<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :taskList.sync="taskList"></TodoHeader>
      <TodoMain :taskList.sync="taskList"></TodoMain>
      <TodoFooter :taskList.sync="taskList"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoMain from "@/components/TodoMain";
import TodoFooter from "@/components/TodoFooter";
import "@/assets/css/base.css";

export default {
  name: "App",
  data() {
    return {
      taskList: []
    }


  },
  components: {TodoFooter, TodoMain, TodoHeader}
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