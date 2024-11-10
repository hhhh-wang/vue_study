import Vue from "vue";
import App from "@/App";
import router from "@/router";
import "@/assets/css/reset.css";
new Vue({
	el:"#app",
	router,
	render:h=>h(App)
})
