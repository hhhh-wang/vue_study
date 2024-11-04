import Vue from "vue";
import VueRouter from "vue-router";
import NowPlaying from "@/views/NowPlaying";
import ComingSoon from "@/views/ComingSoon";
Vue.use(VueRouter);
const routes = [
	{
		path:"/nowPlaying",
		component:NowPlaying
	},{
		path:"/comingSoon",
		component: ComingSoon
	},{
		path:"/",
		redirect:"/nowPlaying"
	}
];
export default new VueRouter({
	routes,
	mode:"history"
})