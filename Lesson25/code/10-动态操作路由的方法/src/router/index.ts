import NotFount from "@/pages/NotFount/index.vue";
// 1- 引入createRouter
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
// 2- 配置每一个路由器的信息
const renderCom = function(name:string){
    return ()=>import("@/pages/"+name+"/index.vue");
}
// 3- 创建router
const router = createRouter({
    // 相当于Vue2当中的mode:"history"
    history: createWebHistory(),
    // 相当于Vue2当中的mode:"hash"
    // history:createWebHashHistory(),
    routes:[],
    // linkExactActiveClass:"active",
    // linkActiveClass:"active",
    scrollBehavior() {
        return {
            left: 0,// 相当于之前的x
            top: 0// 相当于之前的y
        }
    }
});







// console.log("router",router);
export default router;