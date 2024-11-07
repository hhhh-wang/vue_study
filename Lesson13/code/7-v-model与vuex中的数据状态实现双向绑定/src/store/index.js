import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import goods from "@/store/goods";
import cart from "@/store/cart";
import user from "@/store/user";
Vue.use(Vuex);
const store = new Vuex.Store({
	plugins:[
		// 缓存vuex中的所有数据，保存至名字为vuex的localStorage中
		// createPersistedState()
		
		// 可以通过key指定保存至localStorage中的zhangpeiyue属性中
		// createPersistedState({
		// 	key:"zhangpeiyue"
		// })
		
		// 可以指定保存的数据
		createPersistedState({
			key:"zhangpeiyue",
			// 保存根模块中的数据liuDeHua
			// 保存goods模块中的所有数据
			// 保存cart模块下的cartList数据
			paths:["liuDeHua","goods","cart.cartList"]
		})
	],
	state:{
		liuDeHua:1
	},
	mutations:{
		ADD_LIUDEHUA(state){
			state.liuDeHua+=1;
		},
		UP_LIUDEHUA(state,num){
			state.liuDeHua = num;
		}
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