import Vue from "vue";
// 1- 引入模块vue-router
import VueRouter from "vue-router";
import App from "@/App";
import Home from "@/pages/Home";
import NewsList from "@/pages/NewsList";
import GoodsList from "@/pages/GoodsList";
import My from "@/pages/My";
import NotFound from "@/pages/NotFound";
import MyHeader from "@/pages/MyHeader";
import MyMain from "@/pages/MyMain";
import YouFooter from "@/pages/YouFooter";
// 2- 安装路由
Vue.use(VueRouter);
// 3- 应用配置
// 接收的是一个对象，对象中的routes数组，数组中的每个元素（对象）即是路由配置信息对象
const router =  new VueRouter({
	// 配置路由信息
	routes: [
		{
			path: "/",// 指定路由地址
			component: Home// 当请求地址与路由地址匹配时，那么会使用组件Home
		}, {
			// 支持的请求地址除/newsList以及，还支持/news
			path: "/newsList",
			alias: "/news",// 为地址起别名
			component: NewsList
		}, {
			path: "/goodsList",
			// 可以设置为数组，起多个别名
			alias: ["/first", "/daoLang", "/wangFei"],
			component: GoodsList
		}, {
			path: "/my",
			// 单页面多路由(了解）
			components: {
				one:MyHeader,
				main:MyMain,
				footer:YouFooter,
				default:My
			}
		}, {
			path: "*",
			component: NotFound
		}, {
			// redirect:重定向--》当请求地址为/home,被重定向至地址/
			path: "/home",
			redirect: "/"
		}
	],
	// 指定路由模式:默认为hash
	// 1- history
	// 2- hash
	mode: "history",
	// 支持地址以m开头
	// base:"m"
});
new Vue({
	render: h => h(App),
	// 3- 应用配置
	// 接收的是一个对象，对象中的routes数组，数组中的每个元素（对象）即是路由配置信息对象
	router
}).$mount("#app");