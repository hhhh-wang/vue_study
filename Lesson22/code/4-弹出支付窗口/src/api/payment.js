import {sphRequest} from "@/request";

// 获取订单支付信息：/payment/weixin/createNative/{orderId}
export const getCreateNative = (orderId)=>sphRequest.get(`/payment/weixin/createNative/${orderId}`);
