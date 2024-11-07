import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Index from "@/views/Index";
import AddGoods from "@/views/AddGoods";
import GoodsList from "@/views/GoodsList";
import CartList from "@/views/CartList";
import My from "@/views/My";
Vue.use(VueRouter);
const routes = [
	{
		path:"/login",
		meta:{
			title:"登陆界面"
		},
		component:Login
	},{
		path:"/",
		component: Index,
		children:[
			{
				path:"/",
				component:AddGoods,
				meta:{
					title:"添加商品界面"
				},
			},{
				path:"/goodsList",
				meta:{
					title:"商品列表界面"
				},
				component: GoodsList
			},{
				path:"/cartList",
				component: CartList,
				meta:{
					isAuthor:true,
					title:"购物车列表界面"
				}
			},{
				path:"/my",
				component: My,
				meta:{
					title:"个人中心",
					isAuthor:true
				}
			}
		]
	}
];
const router = new VueRouter({
	mode:"history",
	routes,
	linkActiveClass:"active"
});
router.beforeEach(function(to,from,next){
	// 判断是否需要进行权限验证
	if(to.meta.isAuthor){
		if(localStorage.getItem("token")) next();
		else {
			next({
				path:"/login",
				query:{
					cb:to.path
				}
			});
		}
	}else next()
	// localStorage.getItem("token")
})
router.afterEach(function(to){
	document.title=to.meta.title;
})
export default router;