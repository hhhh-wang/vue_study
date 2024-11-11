import {sphRequest} from "@/request";
// 首页三级分类 get   /api/product/getBaseCategoryList
export const getBaseCategoryList = ()=>sphRequest("/product/getBaseCategoryList");