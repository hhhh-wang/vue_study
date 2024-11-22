// 1- 引入大仓库
import store from "@/store";
import useTodosStore from "@/store/modules/todos";
// 2- 传入大仓库：告知模块todos是属于哪一个大仓库下的。
const todos = useTodosStore(store);
console.log(todos.taskList);