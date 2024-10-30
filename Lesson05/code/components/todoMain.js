export const todoMain = {
	props: ["taskList"],
	methods: {
		delTodoById(id) {
			if(window.confirm("您确定要删除该任务吗"))
				this.$emit("update:task-list",this.taskList.filter(v=>v.id !== id))
		},
		upIsCheckedById(id) {
			this.$emit("update:task-list",this.taskList.map(v=>{
				if(v.id === id){
					v.isChecked = !v.isChecked;
				}
				return v;
			}))
		}
		
	},
	template: (`
		<ul class="todo-main">
            <li v-for="item in taskList" :key="item.id">
               <label>
                  <input @change="upIsCheckedById(item.id)" :checked="item.isChecked" type="checkbox"/>
                  <span>{{item.title}}</span>
               </label>
               <button @click="delTodoById(item.id)" class="btn btn-danger">删除</button>
            </li>
         </ul>
	`)
}