import Vue from "vue";
import Vuex from "vuex";
// 安装
Vue.use(Vuex);

const state = {
	liuDeHua: 1,
	zhangXueYou: 2,
	liMing: 3,
	guoFuCheng: 4
};
// 创建仓库
const store = new Vuex.Store({
	// 创建的数据状态
	state,
	// 提供修改数据状态的方法（同步操作）
	mutations: {
		CHANGE_LIU_DE_HUA(prevState, {a, b, c, d}) {
			prevState.liuDeHua += a;
		},
		CHANGE_GUO_FU_CHENG(state, payload) {
			state.guoFuCheng += payload;
		},
		CHANGE_LI_MING(state) {
			state.liMing += 4;
		},
		CHANGE_ZHANG_XUE_YOU() {
			state.zhangXueYou++;
		}
	},
	getters:{
		// 相当于计算属性（将计算属性进行了集中式管理）
		sumVote(state2){
			// console.log(state2===state);// true
			console.log("store->getters");
			return state2.liuDeHua+state2.guoFuCheng+state2.liMing+state2.zhangXueYou;
		}
	}
});
export default store;
