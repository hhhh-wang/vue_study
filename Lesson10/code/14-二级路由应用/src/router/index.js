import Vue from "vue";
import VueRouter from "vue-router";
import Details from "@/views/Details";
import Index from "@/views/Index";
import NowPlaying from "@/views/NowPlaying";
import ComingSoon from "@/views/ComingSoon";
import Login from "@/views/Login";
Vue.use(VueRouter);
// 1- 将没有导航的作为一级路由
// 2- 设置一个一级路由，地址为/
// 3- 将需要导航作为地址为/的二级路由
const routes = [
	{
		path:"/login",
		component: Login
	},
	{
		path:"/film/:filmId",
		component:Details
	},
	{
		path:"/",
		component: Index,
		children:[
			{
				path:"/",
				redirect:"/nowPlaying"
			},
			{
				path:"/nowPlaying",
				component:NowPlaying
			},{
				path:"/comingSoon",
				component: ComingSoon
			}
		]
	}
];
export default new VueRouter({
	routes,
	mode:"history"
})