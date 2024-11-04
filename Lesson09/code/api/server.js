// const axios = require("axios");
// axios.get("https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=上海&ci=10&channelId=4").then(value=>{
// 	console.log("成功",value.data.data.hot);
// })

const express = require("express");
const axios = require("axios");
const app = express();
// app.use((req,res,next)=>{
// 	res.set("Access-Control-Allow-Origin","*");
// 	res.set("Access-Control-Allow-Methods","*");
// 	res.set("Access-Control-Allow-Headers","*");
// 	next();
// })

app.get("/info",(req,res)=>{
	// 前台：changeOrigin:false---->zhangpeiyue.com:80
	// 前台：changeOrigin:true----->zhangpeiyue.com:8089
	console.log(req.headers.host);
	res.json({
		ok:1,
		msg:"get->info"
	})
})


app.get("/maoyan",(req,res)=>{
	axios.get("https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=上海&ci=10&channelId=4").then(value=>{
		// console.log("成功",value.data.data.hot);
		res.json(value.data);
	})
})
app.listen(8089,()=>{
	console.log("success");
})