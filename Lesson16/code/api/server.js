const express = require("express");
const likeData = require("./data/likeList.json");
const app = express();
// 请求方式：get
// 请求地址：http://zhangpeiyue.com:8082/likeList
// 请求参数：query
//     pageSize：每页显示的条数
//     pageNo:页码
// 响应结果：
// {
//      ok:1,
//      msg:"success",
//      likeList:[],// 喜欢列表
//      pageSum:1// 总页数
// }
app.get("/likeList",(req,res)=>{
	/*
	* 1- 接收参数
	* 2- 根据参数获取数据
	* 3- 响应数据*/
	let {pageSize=6,pageNo=1} = req.query;
	pageNo = pageNo/1;
	pageSize = pageSize/1;
	// pageNo===>1
	res.json({
		ok:1,
		msg:"success",
		likeList:likeData.slice((pageNo-1)*pageSize,pageSize*pageNo),
		pageSum:Math.ceil(likeData.length/pageSize)
		// 1
		// likeList:likeData.slice(0,6)
		// likeList:likeData.slice(6,12)
	})
})
app.listen(8082,()=>{
	console.log("success");
})