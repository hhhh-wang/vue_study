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
				meta:{
					title:"首页"
				},
				component:Home
			},{
				path:"/goodsList",
				meta:{
					isAuthor:true,
					title:"商品列表页"
				},
				component: GoodsList
			},{
				path:"/newsList",
				meta:{
					isAuthor:true,
					title:"新闻列表页"
				},
				component: NewsList,
			},{
				path:"/my",
				meta:{
					title:"个人中心页面",
					isAuthor:true
				},
				component: My,
				beforeEnter(to,from,next){
					console.log("beforeEnter");
					if(localStorage.getItem("userName")) next();
					else next("/login");
				}
			}
		]
	},
	{
		path:"/login",
		meta:{
			title:"登陆界面",
		},
		
		name:"login",
		component:Login
	},{
		path:"*",
		meta:{
			title:"404",
		},
		component: NotFound
	}
];

const router = new VueRouter({
	mode:"history",
	routes
})
// 全局前置守卫
router.beforeEach(function(to,from,next){
	// console.log("beforeEach",to);
	// console.log("beforeEach->from",from);
	// next();
	// console.log(this);// undefined
	// 不支持函数
	// next(function(){
	// 	console.log(111)
	// });
	console.log("beforeEach");
	if(to.meta.isAuthor){
		if(localStorage.getItem("userName")){
			next();
		}else{
			console.log(to);
			next('/login?cb='+to.path);
		}
	}else next();
	
});
// 全局后置守卫:已经离开路由(beforeRouteLeave之后执行)
router.afterEach(function(to,from,next){
	// console.log("afterEach",next);// undefined
	// console.log("afterEach->from",from);
	// console.log("afterEach->to",to);
	// console.log(to.meta.title)
	console.log("afterEach");
	const {title = "vue"} = to.meta;
	document.title = title;
})
// 全局解析守卫
router.beforeResolve(function(to,from,next){
	// 1- 在beforeEach之后执行
	// 2- 在beforeRouteEnter之后执行
	// 3- 在beforeRouteLeave之后执行
	console.log("beforeResolve")
	next();
})
export default router;