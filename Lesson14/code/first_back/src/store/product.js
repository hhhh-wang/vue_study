import {getBaseCategoryList} from "@/api/product";

const state = {
	// 首页分类列表
	categoryList:[],
}
const mutations = {
	// 更新首页分类列表
	UP_CATEGORY_LIST(state,categoryList){
		state.categoryList = categoryList;
	}
}
const actions = {
	async getBaseCategoryListAsync({commit},num=1){
		const {data} = await getBaseCategoryList();
		commit("UP_CATEGORY_LIST",data.splice(0,num));
	}
}
export default {
	namespaced:true,
	state,
	mutations,
	actions
}