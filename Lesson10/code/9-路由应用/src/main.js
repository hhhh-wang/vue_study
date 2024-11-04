import Vue from "vue";
import router from "@/router";
import App from "@/App";
import "./request/gitHub";
new Vue({
	router,
	render:h=>h(App)
}).$mount("#app")