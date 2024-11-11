import Mock from "mockjs";
import focusList from "./focus.json";
// 获取首页中轮播图的图片列表
// 请求方式：get
// 请求地址：
Mock.mock("http://mock.com/adv/focus","get",{
	ok:200,
	data:focusList
})