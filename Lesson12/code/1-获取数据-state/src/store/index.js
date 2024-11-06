import Vue from "vue";
import Vuex from "vuex";
// 安装
Vue.use(Vuex);

// 创建仓库
const store = new Vuex.Store({
	// 创建的数据状态
	state:{
		liuDeHua:1,
		zhangXueYou:2,
		liMing:3,
		guoFuCheng:4
	}
});
export default store;
