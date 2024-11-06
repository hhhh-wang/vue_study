import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 数据状态
const state = {
	items:[]
};
const mutations = {
	UP_ITEMS(state,items){
		state.items = items;
	}
};
const getters = {

};
const store = new Vuex.Store({
	state,
	mutations,
	getters
});
export default store;