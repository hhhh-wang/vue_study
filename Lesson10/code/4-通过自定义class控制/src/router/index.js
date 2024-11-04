import Vue from "vue";
// 1- 引入路由依赖模块
import VueRouter from "vue-router";
import Home from "@/views/Home";
import NewsList from "@/views/NewsList";
import GoodsList from "@/views/GoodsList";
import My from "@/views/My";
import NotFound from "@/views/NotFound";
// 2- 安装
Vue.use(VueRouter);
const routes = [
	{
		path:"/",
		name:"index",
		component:Home
	},{
		path:"/newsList",
		alias:"/news",
		name:"newsList",
		component:NewsList
	},{
		path:"/goodsList",
		name:"goodsList",
		alias:["/lala","/xixi"],
		component:GoodsList
	},{
		path:"/my",
		name:"my",
		component:My
	},{
		path:"*",
		component:NotFound
	},{
		path:"/home",
		redirect:"/"
	}
];
// 3- 创建router
export default  new VueRouter({
	routes,
	mode:"history"
});