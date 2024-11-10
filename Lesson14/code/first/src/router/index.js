
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import {rewriteVueRouterMethods} from "@/utils/enhance";
Vue.use(VueRouter);

// 重写路由方法
rewriteVueRouterMethods(VueRouter)

const routes = [
    {
        path:"/",
        component:Home,
        meta:{
            // 是否使用导航
            isTypeNav:true
        }
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/Register",
        component:Register
    },
    {
        path:"/search",
        component:Search,
        meta:{
            // 是否使用导航
            isTypeNav:true
        }
    }
];
const router = new VueRouter({
    mode:"history",
    routes
});
export default router;