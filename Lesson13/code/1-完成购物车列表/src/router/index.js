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
		component:Login
	},{
		path:"/",
		component: Index,
		children:[
			{
				path:"/",
				component:AddGoods
			},{
				path:"/goodsList",
				component: GoodsList
			},{
				path:"/cartList",
				component: CartList
			},{
				path:"/my",
				component: My
			}
		]
	}
];
const router = new VueRouter({
	mode:"history",
	routes,
	linkActiveClass:"active"
});
export default router;