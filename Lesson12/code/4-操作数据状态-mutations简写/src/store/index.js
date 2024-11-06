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
		// 规范：提供修改的方法名全部大写，多个单词之间用_
		// 修改刘德华的票数
		CHANGE_LIU_DE_HUA(prevState, {a, b, c, d}) {
			// state是当前最新的数据状态
			// console.log(1111,prevState===state);// true
			// console.log(a,b,c,d);
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
	}
});
export default store;
