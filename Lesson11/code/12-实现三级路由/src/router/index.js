import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import NowPlaying from "@/views/NowPlaying";
import ComingSoon from "@/views/ComingSoon";
import Details from "@/views/Details";

Vue.use(VueRouter);
const routes = [
	{
		path:"/film",
		component:Home,
		children:[
			{
				path:"/film",
				redirect:"/film/comingSoon"
			},
			
			{
				path:"/film/nowPlaying",
				component:NowPlaying
			},
			{
				path:"/film/comingSoon",
				component:ComingSoon,
				children:[
					{
						path:":id",
						component:Details
					}
				]
			}
		]
	},{
		path:"/About",
		component:About
	},{
		path:"/",
		redirect:"/film/comingSoon"
	}
];
const router = new VueRouter({
	routes,
	mode:"history"
});
export default router;