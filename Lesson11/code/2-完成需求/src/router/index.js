import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Home from "@/views/Home";
import Index from "@/views/Index";
import GoodsList from "@/views/GoodsList";
import NewsList from "@/views/NewsList";
import My from "@/views/My";
Vue.use(VueRouter);
const routes = [
	{
		path:"/",
		component:Index,
		children:[
			{
				path:"/",
				component:Home
			},{
				path:"/goodsList",
				component: GoodsList
			},{
				path:"/newsList",
				component: NewsList
			},{
				path:"/my",
				component: My
			}
		]
	},
	{
		path:"/login",
		name:"login",
		component:Login
	},{
		path:"*",
		component: NotFound
	}
];
export default new VueRouter({
	mode:"history",
	routes
})