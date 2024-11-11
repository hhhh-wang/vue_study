import {getBaseCategoryList, getFloorList} from "@/api/product";

const state = {
	// 首页分类列表
	categoryList:[],
	floorList:[],// 楼层数据信息
}
const mutations = {
	// 更新首页分类列表
	UP_CATEGORY_LIST(state,categoryList){
		state.categoryList = categoryList;
	},
	SAVE_FLOOR_LIST(state,floorList){
		state.floorList = floorList;
	}
}
const actions = {
	async getBaseCategoryListAsync({commit},num=1){
		const {data} = await getBaseCategoryList();
		commit("UP_CATEGORY_LIST",data.splice(0,num));
	},
	async getFloorListAsync({commit}){
		const {data} = await getFloorList();
		commit("SAVE_FLOOR_LIST",data);
	}
}
export default {
	namespaced:true,
	state,
	mutations,
	actions
}