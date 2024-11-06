import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 数据状态
const state = {
	// 任务列表
	taskList: []
};
const mutations = {
	// 添加
	ADD_TASK_LIST(state,event){
		// 获取任务标题
		const title = event.target.value.trim();
		if(title.length===0){
			alert("请输入任务标题！");
			return;
		}
		// 判断是否重复
		if(state.taskList.some(v=>v.title === title)){
			alert("任务标题重复，请重新输入");
			return;
		}
		state.taskList = [
			{
				id:Date.now(),
				title,
				isChecked:true
			},
			...state.taskList
		];
		event.target.value = null;
	},
	// 根据ID删除数据
	DEL_TASK_LIST_BY_ID(state,id){
		if(window.confirm("您确定要删除该条任务吗？"))
			state.taskList = state.taskList.filter(v=>v.id !== id);
	},
	// 根据ID更改选中的状态（取反）
	UP_TASK_LIST_IS_CHECKED_BY_ID(state,id){
		state.taskList = state.taskList.map(item=>{
			if(item.id === id) item.isChecked = !item.isChecked;
			return item;
		})
	},
	// 修改数据状态
	// isChecked:要修改为什么？
	UP_TASK_LIST_IS_CHECKED_ALL(state,isChecked){
		state.taskList = state.taskList.map(item=>{
			item.isChecked = !isChecked;
			return item;
		})
	},
	// 清理选中的任务
	DEL_TASK_LIST_BY_IS_CHECKED(state){
		state.taskList = state.taskList.filter(v=>!v.isChecked)
	}
};
const getters = {
	// 选中的数量
	checkedNum(){
		return state.taskList.reduce((num,item)=>{
			if(item.isChecked) num++;
			return num;
		},0);
	},
	// 所有的数量
	sumNum(state){
		return state.taskList.length;
	},
	isAll(state,{checkedNum,sumNum}){
		if(checkedNum === 0 || sumNum === 0) return false;
		return checkedNum === sumNum;
	}
};
const store = new Vuex.Store({
	state,
	mutations,
	getters
});
export default store;