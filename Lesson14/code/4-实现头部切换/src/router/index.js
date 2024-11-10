import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
Vue.use(VueRouter);
const routes = [
	{
		path:"/",
		component:Home
	},
	{
		path:"/login",
		component:Login
	},
	{
		path:"/Register",
		component:Register
	},
	{
		path:"/search",
		component:Search
	}
];
const router = new VueRouter({
	mode:"history",
	routes
});
export default router;