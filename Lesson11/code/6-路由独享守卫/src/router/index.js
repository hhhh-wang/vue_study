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
				component: My,
				beforeEnter(to,from,next){
					// 在组件路由守卫beforeRouteEnter之前执行.
					// console.log("beforeEnter",this);// undefined
					// console.log("beforeEnter->to",to);//去哪个路由
					// console.log("beforeEnter->from",from);// 来自哪个路由
					// next();// 放行
					// next(true);// 放行
					//  不支持接收函数
					// next(function(){
					// 	console.log("111")
					// })
					if(localStorage.getItem("userName")) next();
					else next("/login");
				}
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