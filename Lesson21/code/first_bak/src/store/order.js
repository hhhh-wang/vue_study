import {getTradeList} from "@/api/order";
const state = {
	tradeInfo:{
		orderDetailVoList:[
			{
				orderDetailList:[]
			}
		]
	}
}
const mutations = {
	SAVE_TRADE_INFO(state,payload){
		state.tradeInfo = payload;
	}
}
const actions = {
	async getTradeListAsync({commit}){
		const result = await getTradeList();
		commit("SAVE_TRADE_INFO",result.data);
		console.log(result);
	}
}
export default {
	namespaced:true,
	actions,
	state,
	mutations
}