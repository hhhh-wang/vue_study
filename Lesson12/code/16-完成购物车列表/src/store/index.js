import Vue from "vue";
import Vuex from "vuex"
import goods from "@/store/goods";
import cart from "@/store/cart";
import user from "@/store/user";
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		liuDeHua:1
	},
	mutations:{
		// ADD_GOODS(state,payload){
		// 	console.log("root->add-goods",state);
		// }
	},
	// modules中的每一个属性即是一个模块。
	modules:{
		// goods模块
		goods,
		// 购物车模块
		cart,
		// 用户模块
		user
	}
});
export default store;