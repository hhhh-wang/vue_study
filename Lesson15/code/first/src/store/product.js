import {getBaseCategoryList, getFloorList} from "@/api/product";

const state = {
    floorList:[],// 楼层数据信息
}
const mutations = {
    SAVE_FLOOR_LIST(state,floorList){
        state.floorList = floorList;
    }
}
const actions = {
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