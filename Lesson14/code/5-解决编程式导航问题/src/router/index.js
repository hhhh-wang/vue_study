import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
Vue.use(VueRouter);

// 实现加强（未优化）
// 1- 先将要加强的方法备份
const nativePush = VueRouter.prototype.push;
const nativeReplace = VueRouter.prototype.replace;
// 2- 重写方法，在重写的方法中调用备份方法
VueRouter.prototype.push = function(location, onComplete, onAbort){
	return nativePush.call(this,location, onComplete, ()=>{})
}
VueRouter.prototype.replace = function(location, onComplete, onAbort){
	return nativeReplace.call(this,location, onComplete, ()=>{})
}
// replace


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