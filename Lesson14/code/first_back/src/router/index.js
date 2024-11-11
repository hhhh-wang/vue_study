import Vue from "vue";
import VueRouter from "vue-router";
import {enVueRouter} from "@/utils/enhance";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
Vue.use(VueRouter);

enVueRouter("push");
enVueRouter("replace");


const routes = [
	{
		path:"/",
		component:Home,
		name:"home",
		meta:{
			// 是否使用导航
			isTypeNav:true
		}
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
		component:Search,
		meta:{
			// 是否使用导航
			isTypeNav:true
		}
	}
];
const router = new VueRouter({
	mode:"history",
	routes
});
export default router;