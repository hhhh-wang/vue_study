// 购物车模块
import cart from "@/pages/Cart";
import {deleteCartListBatch, deleteCartListById, getCartIsCheckedById, getCartList, postAddToCart} from "@/api/cart";

const state = {
    // 购物车列表
    cartList:[]

};
const mutations = {
    SAVE_CART_LIST(state,cartList){
        state.cartList = cartList;
    },
    // 根据商品ID删除购物车中的商品
    DELETE_CART_LIST_BY_ID(state,skuId){
        state.cartList = state.cartList.filter(v=>v.skuId !== skuId);
    }
};
const actions = {
    async getCartListAsync({commit}){
        // const res = await getCartList();
        // commit("SAVE_CART_LIST",res.data);
        const {data} = await getCartList();
        commit("SAVE_CART_LIST",data[0]?data[0].cartInfoList:[]);
    },
    async postAddToCartAsync(content,{skuId,skuNum}){
        const res = await postAddToCart(skuId,skuNum);
        console.log(res);
    },

    async getCartIsCheckedByIdAsync({dispatch},{skuID,isChecked}){
        const res = await getCartIsCheckedById(skuID,isChecked);
        if(res.code === 200){
            // 重新获取购物车列表。
            dispatch("getCartListAsync");
        }else{
            alert("异常:"+res.message)
        }
    },

    async deleteCartListByIdAsync({dispatch,commit},skuId){
        // 根据商品ID删除购物车信息
        await deleteCartListById(skuId);
        // 方案一：更新购物车列表
        await dispatch("getCartListAsync");
        // 方案二：
       // commit("DELETE_CART_LIST_BY_ID",skuId);
    },

    async deleteCartListBatchAsync({dispatch,state}){
        if(window.confirm("您确定要删除选中的数据吗")){
            // console.log(state.cartList.filter(v=>v.isChecked===1).map(item=>item.skuId));
            await deleteCartListBatch(state.cartList.filter(v=>v.isChecked===1).map(item=>item.skuId));
            await dispatch("getCartListAsync");
        }

    },

}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}