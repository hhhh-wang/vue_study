import Vue from "vue";
import App from "@/App";
import router from "@/router";
// import TypeNav from "@/components/TypeNav";
import "@/assets/css/reset.css";
// Vue.component("TypeNav",TypeNav);
import "@/mock";
import store from './store'
new Vue({
	el:"#app",
	router,
	store,
	render:h=>h(App)

})