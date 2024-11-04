import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import One from "@/views/One";
import Two from "@/views/Two";
import Three from "@/views/Three";
Vue.use(VueRouter);
const routes = [
	{
		path:"/",
		name:"home",
		component:Home
	},
	{
		path:"/one",
		name:"suibian",
		component:One
	},
	{
		path:"/two",
		name:"two",
		component:Two
	},
	{
		// 请求地址：/three/1/2
		// path:"/three/:a/:b",
		
		// 请求地址：/three/1/2.html
		path:"/three/:a/:b.html",
		name:"three",
		component:Three
	}
];
export default new VueRouter({
	mode:"history",
	routes,
	linkActiveClass:"active"
})