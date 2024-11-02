import Vue from "vue";
import App from "@/App";
import axios from "axios";
// import request from "@/request"
import gitHub from "@/request/gitHub";
new Vue({
	render:h=>h(App),
	beforeCreate() {
		// 1
		// axios.defaults.baseURL = "https://api.github.com";
		// axios.interceptors.response.use(res=>{
		// 	return res.data;
		// })
		// Vue.prototype.$axios = axios;
		
		// 2- 将axios配置信息放至外部
		// Vue.prototype.$axios = request;
		
		// 3- 安装插件
		Vue.use(gitHub);
	}
}).$mount("#app");