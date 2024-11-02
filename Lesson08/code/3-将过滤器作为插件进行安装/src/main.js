import Vue from "vue";
import App from "@/App";
import filters from "@/filters";
// 安装插件(使用插件)
// filters的两种类型：
// 1- filters是一个对象，Vue.use会调用对象下的install方法，并传递Vue
// 2- filters是一个函数，会直接调用该函数，并传递Vue
// Vue.use(filters);
new Vue({
	render:h=>h(App),
	beforeCreate() {
		Vue.use(filters);
	}
}).$mount("#app")