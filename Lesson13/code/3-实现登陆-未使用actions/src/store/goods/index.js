const state = {
	// []===>[{id:xx,goodsName:商品名字,goodsPrice:商品价格}]
	goodsList:[]
}
const mutations = {
	// state是当前模块中的数据状态
	ADD_GOODS(state,{goodsName,goodsPrice}){
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
export default {
	state,
	mutations
}