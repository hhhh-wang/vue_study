import Vue from "vue";
// 1- 引入路由依赖模块
import VueRouter from "vue-router";
import Home from "@/views/Home";
import NewsList from "@/views/NewsList";
import GoodsList from "@/views/GoodsList";
import My from "@/views/My";
import NotFound from "@/views/NotFound";
import TiYu from "@/views/TiYu";
import YuLe from "@/views/YuLe";
import CaiJing from "@/views/CaiJing";
// 2- 安装
Vue.use(VueRouter);
// /newsList/tiyu
const routes = [
	{
		path:"/",
		component:Home
	},{
		path:"/newsList",
		alias:"/news",
		component:NewsList,
		// 解决默认不显示体育新闻问题：方案一：将二级路由地址与上一级地址设置为相同地址
		// children:[
		// 	{
		// 		path:"/newsList",
		// 		name:"tiyu",
		// 		component:TiYu
		// 	},
		// 	{
		// 		path:"/newsList/yule",
		// 		name:"yule",
		// 		component:YuLe
		// 	},
		// 	{
		// 		path:"/newsList/caijing",
		// 		name:"caijing",
		// 		component:CaiJing
		// 	}
		// ]
		
		// 解决默认不显示体育新闻问题方案二：设置重定向
		// children:[
		// 	{
		// 		path:"/newsList",
		// 		redirect:"/newsList/tiyu"
		// 	},
		//
		// 	{
		// 		path:"/newsList/tiyu",
		// 		name:"tiyu",
		// 		component:TiYu
		// 	},
		// 	{
		// 		path:"/newsList/yule",
		// 		name:"yule",
		// 		component:YuLe
		// 	},
		// 	{
		// 		path:"/newsList/caijing",
		// 		name:"caijing",
		// 		component:CaiJing
		// 	}
		// ]
		
		// 二级路由path可以省略一级路由地址部分
		children:[
			{
				path:"/",
				redirect:"tiyu"
			},
			
			{
				path:"tiyu",
				name:"tiyu",
				component:TiYu
			},
			{
				path:"yule",
				name:"yule",
				component:YuLe
			},
			{
				path:"caijing",
				name:"caijing",
				component:CaiJing
			}
		]
	},{
	
		path:"/goodsList",
		alias:["/lala","/xixi"],
		component:GoodsList
	},{
		path:"/my",
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
	mode:"history",
	linkActiveClass:"active"
});