import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		liuDeHua:1
	},
	// modules中的每一个属性即是一个模块。
	modules:{
		// goods模块
		goods:{
			// goods 模块中的数据状态
			state:{
				goodsList:[]
			}
		},
		// 购物车模块
		cart:{
			state:{
				cartList:[]
			}
		},
		// 用户模块
		user:{
		
		}
	}
});
export default store;