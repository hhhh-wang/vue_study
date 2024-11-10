import Vue from "vue";
import VueRouter from "vue-router";
import {enVueRouter} from "@/utils/enhance";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
Vue.use(VueRouter);


// 优化一：定义一个方法enhance
// function enhance(props){
// 	const nativeFn = VueRouter.prototype[props];
// 	VueRouter.prototype[props] = function(location, onComplete, onAbort){
// 		return nativeFn.call(this,location, onComplete, ()=>{})
// 	}
// }
// enhance("push");
// enhance("replace");

// 优化二
enVueRouter("push");
enVueRouter("replace");


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