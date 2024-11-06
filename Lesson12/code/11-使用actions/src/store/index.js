import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
// 数据状态
const state = {
	items:[]
};
// 同步更新状态方法
const mutations = {
	UP_ITEMS(state,items){
		state.items = items;
	}
};
// 计算属性
const getters = {

};
// 异步行为:
// actions是一个对象，对象的属性名即是action的名字，类型是一个函数，该函数可以通过$store.dispatch('action的名字',payload)调用。
const actions = {
	// getItems是action的名字
	// 第一个参数一般命名为context, 是一个对象,该对象中拥有store中常用的方法和属性
	// context->state在此处可以获取，但不建议修改。
	// dispatch：调用actions下的方法
	// commit:调用mutations下的方法
	// state：获取state下的数据
	// getters：获取getters中定义的计算属性。
	
	// 第二个参数一般命名为payload,荷载数据。
	// getItems(context,payload,b,c,d){
	// 	console.log("getItems",context.state,payload,b,c,d)
	// }
	
	async getItems({commit},q){
		// 获取数据
		const {data} = await axios.get("https://api.github.com/search/repositories?q="+q+"&sort=stars");
		// 更新数据状态
		commit("UP_ITEMS",data.items);
	}
}
const store = new Vuex.Store({
	state,
	mutations,
	getters,
	actions
});
export default store;