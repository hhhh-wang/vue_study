import Vue from "vue";
// 1- 引入(检查是否下载了vuex)
import Vuex from "vuex";
import App from "@/App";
// 2- 安装
Vue.use(Vuex);
new Vue({
	render:h=>h(App),
	// 3-应用
	store:new Vuex.Store({
		state:{
			num:0
		}
	})
}).$mount("#app");