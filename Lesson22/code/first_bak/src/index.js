import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";
import filters from "@/filters";
import Pagination from "@/components/Pagination";
import VueLazyLoad from "vue-lazyload";
import loading from "@/assets/images/loading.gif";
import "./utils/validate";
import "./utils/elementUi";
import "@/mock";
import "@/assets/css/reset.css";
import "@/assets/iconfont/iconfont.css";
Vue.config.productionTip = false;

Vue.use(VueLazyLoad,{
	// 图片未加载前给予呈现的图片
	loading
})

new Vue({
	el:"#app",
	router,
	store,
	beforeCreate() {
		// 全局过滤器
		for(let key in filters){
			Vue.filter(key,filters[key]);
		}
		// 全局组件
		Vue.component("Pagination",Pagination);
		// 全局事件总线
		Vue.prototype.$bus = this;
	},
	render:h=>h(App)
})
