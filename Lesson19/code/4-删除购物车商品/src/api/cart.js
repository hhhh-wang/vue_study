import {sphRequest} from "@/request";
// 获取购物车列表:/api/cart/cartList  get
export const getCartList = ()=>sphRequest.get("/cart/cartList");
// 添加到购物车(对已有物品进行数量改动) /api/cart/addToCart/{skuId}/{skuNum} post
export const postAddToCart = (skuId,skuNum)=>sphRequest.post(`/cart/addToCart/${skuId}/${skuNum}`);
// 切换商品选中状态 /api/cart/checkCart/{skuID}/{isChecked}  get
// skuID:商品ID
// isChecked:商品选中状态 0代表取消选中 | 1代表选中
export const getCartIsCheckedById = (skuID,isChecked)=>sphRequest.get(`/cart/checkCart/${skuID}/${isChecked}`)
// 删除购物车商品: /api/cart/deleteCart/{skuId} delete
export const deleteCartListById = (skuId)=>sphRequest.delete(`/cart/deleteCart/${skuId}`)