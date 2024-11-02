import Vue from "vue";
import App from "@/App";
import Loading from "@/components/Loading";

new Vue({
	render:h=>h(App),
	beforeCreate() {
		Vue.component("Loading",Loading);
	}
}).$mount("#app");