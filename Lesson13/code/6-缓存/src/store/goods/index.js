const state = {
	// []===>[{id:xx,goodsName:商品名字,goodsPrice:商品价格}]
	goodsList:[]
}
const mutations = {
	// state是当前模块中的数据状态
	ADD_GOODS(state,{goodsName,goodsPrice}){
		console.log("goods->ADD_GOODS",goodsName,goodsPrice)
		state.goodsList = [
			{
				id:Date.now(),
				goodsName,// 商品名称
				goodsPrice:goodsPrice/1,// 商品价格
				addTime:Date.now()// 上架时间
			},
			...state.goodsList
		]
	}
}
const actions = {
	// login(){
	// 	console.log("goods->login")
	// }
}
export default {
	// 如果未开启(默认)：namespaced:false,默认值即是false
	// 获取状态：this.$store.state.模块名.数据
	// commit：this.$store.commit("mutation的名字")会调用所有模块中的同名mutation
	// dispatch：this.$store.dispatch("action的名字")会调用所有模块中的同名action
	// getters：this.$store.getters.xxx会调用所有模块中的同名getter
	namespaced:true,// 开启命名空间
	// 设置数据状态
	state,
	// 更改数据状态
	mutations,
	// 异步action:调用服务端接口
	actions,
	// 对数据状态进行计算统计，相当于计算属性
	getters:{},
	// 可以对数据进行模块化拆分。
	modules:{}
}