import Vue from "vue";
import VueRouter from "vue-router";
import NowPlaying from "@/views/NowPlaying";
import ComingSoon from "@/views/ComingSoon";
import Details from "@/views/Details";
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
	},{
		path:"/film/:filmId",
		component:Details,
		meta:{
			isHide:true
		}
	}
];
export default new VueRouter({
	routes,
	mode:"history"
})