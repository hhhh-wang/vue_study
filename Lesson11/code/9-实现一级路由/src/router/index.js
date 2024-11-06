import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";

Vue.use(VueRouter);
const routes = [
	{
		path:"/home",
		component:Home
	},{
		path:"/About",
		component:About
	},{
		path:"/",
		redirect:"/home"
	}
];
const router = new VueRouter({
	routes,
	mode:"history"
});
export default router;