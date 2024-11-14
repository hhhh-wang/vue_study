// 购物车模块
import cart from "@/pages/Cart";
import {deleteCartListById, getCartIsCheckedById, getCartList, postAddToCart} from "@/api/cart";

const state = {
	// 购物车列表
	cartList:[]
};
const mutations = {
	// 根据商品ID删除购物车中的商品
	DELETE_CART_LIST_BY_ID(state,skuId){
		state.cartList = state.cartList.filter(v=>v.skuId !== skuId);
	},
	SAVE_CART_LIST(state,cartList){
		state.cartList = cartList;
	},
	UP_CAART_LIST_CHECKED_BY_ID(state,{skuID,isChecked}){
		// 根据商品ID，找到购物车信息。然后将购物车信息中的选中状态更改为isChecked
		const info = state.cartList.find(v=>v.skuId===skuID);
		if(info) info.isChecked = isChecked;
	}
};
const actions = {
	//  解决方案一
	// async getCartIsCheckedByIdAsync({dispatch},{skuID,isChecked}){
	// 	const res = await getCartIsCheckedById(skuID,isChecked);
	// 	if(res.code === 200){
	// 		await dispatch("getCartListAsync");
	// 	}else{
	// 		alert("异常:"+res.message)
	// 	}
	// },
	
	// 解决方案二
	async getCartIsCheckedByIdAsync({commit},{skuID,isChecked}){
		const res = await getCartIsCheckedById(skuID,isChecked);
		if(res.code === 200){
			commit("UP_CAART_LIST_CHECKED_BY_ID",{skuID,isChecked})
		}else{
			alert("异常:"+res.message)
		}
	},
	async deleteCartListByIdAsync({dispatch,commit},skuId){
		// 根据商品ID删除购物车信息
		await deleteCartListById(skuId);
		// 方案一：更新购物车列表
		// await dispatch("getCartListAsync");
		// 方案二：
		commit("DELETE_CART_LIST_BY_ID",skuId);
	},
	async getCartListAsync({commit}){
		const {data} = await getCartList();
		commit("SAVE_CART_LIST",data[0]?data[0].cartInfoList:[]);
	},
	async postAddToCartAsync(content,{skuId,skuNum}){
		const res = await postAddToCart(skuId,skuNum);
		console.log(res);
	}
}
export default {
	namespaced:true,
	state,
	mutations,
	actions
}