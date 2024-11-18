const express = require("express");
// 解决路由404问题第一步下载：cnpm install connect-history-api-fallback
// 解决路由404问题第二步引入：
const history = require("connect-history-api-fallback");
// 解决代理问题第一步下载：cnpm i http-proxy-middleware
// 解决代理问题第二步引入：
const {createProxyMiddleware} = require("http-proxy-middleware")

const app = express();
// 解决路由404问题第三步：将history当作中间件使用,当找不到指定的路由时，会将index.html作为渲染的界面
app.use(history());
// 将当前目录设置为静态资源
app.use(express.static(__dirname));

// 解决代理问题第三步：配置代理
app.use("/api",createProxyMiddleware({
	target:"http://sph-h5-api.atguigu.cn",
	changeOrigin:true
}))
app.use("/my",createProxyMiddleware({
	target:"http://zhangpeiyue.com:8082",
	changeOrigin:true,
	pathRewrite:{
		"^/my":""
	}
}))
app.listen(80,()=>{
	console.log("success");
})