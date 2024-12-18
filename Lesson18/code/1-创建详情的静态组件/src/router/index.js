import Vue from "vue";
import VueRouter from "vue-router";
import {enVueRouter} from "@/utils/enhance";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
Vue.use(VueRouter);

enVueRouter("push");
enVueRouter("replace");
// 接收参数query
VueRouter.prototype.goSearch=function(query){
	this.push({
		path:"/search",
		query:{
			...this.history.current.query,
			pageNo:1,
			...query
		}
	})
}


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
		component:Login,
		meta:{
			// 是否隐藏底部信息
			isHideFooter:true
		}
	},
	{
		path:"/Register",
		component:Register,
		meta:{
			// 是否隐藏底部信息
			isHideFooter:true
		}
	},
	{
		path:"/search",
		component:Search,
		meta:{
			// 是否使用导航
			isTypeNav:true
		}
	},{
		path:"/detail/:id.html",
		component:Detail,
		meta:{
			isTypeNav: true
		}
	}
];
const router = new VueRouter({
	mode:"history",
	routes
});
export default router;