import NotFount from "@/pages/NotFount/index.vue";
// 1- 引入createRouter
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
// 2- 配置每一个路由器的信息
const renderCom = function(name:string){
    return ()=>import("@/pages/"+name+"/index.vue");
}
const routes = [
    {
        path: "/",
        redirect: "/home"
    }, {
        path: "/home",
        component: renderCom("Home"),
        children:[
            {
                path:"/home",
                component:renderCom("Home/NewsList")
            },
            {
                path:"/home/message",
                component:renderCom("Home/Message"),
                children:[
                    {
                        path:"/home/message/:filmId",
                        component:renderCom("Home/Message/Detail")
                    }
                ]
            }
        ]
    },
    {
        path: "/about",
        component:renderCom("About")
    },
    {
        // vue-router@4不支持以下代码实现404
        // path:"*",
        // component:NotFount

        // 需要借助params形式实结合正则实现404
        path: "/:pathMath(.*)",
        component:renderCom("NotFount")
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