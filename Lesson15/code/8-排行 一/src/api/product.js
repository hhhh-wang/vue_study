import {mockRequest, sphRequest} from "@/request";
// 首页三级分类 get   /api/product/getBaseCategoryList
export const getBaseCategoryList = ()=>sphRequest("/product/getBaseCategoryList");
// 获取楼层信息
export const getFloorList = ()=>mockRequest("/product/floorList");
// 获取商品排行数据
export const getRankList = ()=>mockRequest("/product/rankList");
export const getRemaiList = ()=>mockRequest("/product/remai");
export const getTeJiaList = ()=>mockRequest("/product/tejia");
export const getXinPinList = ()=>mockRequest("/product/xinpin");