import {mockRequest, sphRequest} from "@/request";
// 首页三级分类 get   /api/product/getBaseCategoryList
export const getBaseCategoryList = ()=>sphRequest("/product/getBaseCategoryList");
// 获取楼层信息
export const getFloorList = ()=>mockRequest("/product/floorList");