import {sphRequest} from "@/request";
// 获取交易页信息:/order/auth/trade get
export const getTradeList = ()=>sphRequest.get("/order/auth/trade");
