import Vue from "vue";
import store from "@/store";
import App from "@/App";
import "@/assets/css/base.css";
new Vue({
	el:"#app",
	store,
	render:h=>h(App)
})