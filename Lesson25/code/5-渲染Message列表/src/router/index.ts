import NotFount from "@/pages/NotFount/index.vue";
// 1- 引入createRouter
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
const Home = ()=>import("@/pages/Home/index.vue");
// 2- 配置每一个路由器的信息
const routes = [
    {
        path: "/",
        redirect: "/home"
    }, {
        path: "/home",
        component: Home,
        children:[
            {
                path:"/home",
                component:()=>import("@/pages/Home/NewsList/index.vue")
            },
            {
                path:"/home/message",
                component:()=>import("@/pages/Home/Message/index.vue")
            }
        ]
    },
    {
        path: "/about",
        component: ()=>import("@/pages/About/index.vue")
    },
    {
        // vue-router@4不支持以下代码实现404
        // path:"*",
        // component:NotFount

        // 需要借助params形式实结合正则实现404
        path: "/:pathMath(.*)",
        component: NotFount
    }
]
// 3- 创建router
const router = createRouter({
    // 相当于Vue2当中的mode:"history"
    history: createWebHistory(),
    // 相当于Vue2当中的mode:"hash"
    // history:createWebHashHistory(),
    routes,
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