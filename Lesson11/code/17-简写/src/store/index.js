import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		liuDeHua:100,
		guoFuCheng:0,
		liMing:2,
		zhangXueYou:200
	}
});
export default store;