import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";
import "@/mock";
import "@/assets/css/reset.css";
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;
new Vue({
	el:"#app",
	router,
	store,
	render:h=>h(App)
})
