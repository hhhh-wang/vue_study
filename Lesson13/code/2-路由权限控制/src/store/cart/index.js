const state = {
	cartList: []
}
const mutations = {
	// payload:要添加的商品信息
	JOIN_CART(state, payload) {
		// 判断购物车中是否有该商品
		const cartInfo = state.cartList.find(v=>v.id === payload.id);
		if(cartInfo){
			cartInfo.buyNum++;
		}else{
			state.cartList = [
				{
					...payload,
					buyNum:1
				},
				...state.cartList
			]
		}
		
	}
	// ADD_GOODS(state,payload){
	// 	console.log("cart->addGoods",state);
	// }
}
const getters = {
	sumPrice(state){
		return state.cartList.reduce(function(sum,item){
			sum+= item.buyNum*item.goodsPrice;
			return sum;
		},0);
	}
}
export default {
	state,
	mutations,
	getters
	
}