import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import FilmList from "@/views/FilmList";
import Details from "@/views/Details";

Vue.use(VueRouter);
const routes = [
	{
		// /film/2/6448
		path:"/film",
		component:Home,
		children:[
			{
				path:"/film",
				redirect:"/film/1"
			},
			{
				path:"/film/:type",
				component:FilmList,
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
		redirect:"/film/1"
	}
];
const router = new VueRouter({
	routes,
	mode:"history"
});
export default router;