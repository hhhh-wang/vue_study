import Vue from "vue";
import store from "@/store";
import App from "@/App";
new Vue({
	render:h=>h(App),
	store
}).$mount("#app");