import {mockRequest, sphRequest} from "@/request";
// 首页三级分类 get   /api/product/getBaseCategoryList

export const getBaseCategoryList = ()=>sphRequest("/product/getBaseCategoryList");

export const getFloorList = ()=>mockRequest("/product/floorList");