import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router";

// 1- getRoutes:获取所有的路由信息列表，类型是一个数组。
// const routes = router.getRoutes();
// console.log(routes);

// 2- hasRoute:判断路由信息是否存在，接收的是路由的名字，返回的是一个布尔值
// console.log(router.hasRoute("home"));// true
// console.log(router.hasRoute("home2"));// false

// 3- addRoute:添加路由信息
// const renderCom = function(name:string){
//     return ()=>import("@/pages/"+name+"/index.vue");
// }
// const aboutRoute = router.addRoute({
//     path: "/about",
//     // name:"about",
//     component:renderCom("About")
// })

// 4- removeRoute:删除路由
// 4-1- 方案一
// 查看路由是否存在：
// console.log(router.hasRoute("about"));
// if(router.hasRoute("about")){
//     router.removeRoute("about");
// }

// 4-2- 方案二：添加完路由之后会有一个返回值，该返回值是一个函数，调用该函数即可删除
// aboutRoute();
// console.log(router.getRoutes());

// 扩展：将所有的路由通过方法去添加
// 以下数据是通过接口获取过来的。
const renderCom = function(name:string){
    return ()=>import("@/pages/"+name+"/index.vue");
}
const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name:"home",
        component: renderCom("Home"),
        children:[
            {
                path:"/home",
                name:"home",
                component:renderCom("Home/NewsList")
            },
            {
                path:"/home/message",
                name:"message",
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
        name:"about",
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
// 方案一：
// router.addRoute(routes[0]);
// router.addRoute(routes[1]);
// router.addRoute(routes[2]);
// router.addRoute(routes[3]);

// 方案二：
// routes.forEach(item=>{
//     router.addRoute(item);
// })

// 方案三：
// router.addRoute({
//     path: "/",
//     redirect: "/home"
// });
// router.addRoute({
//     path: "/home",
//     name:"home",
//     component: renderCom("Home"),
//     children:[
//         {
//             path:"/home",
//             name:"home",
//             component:renderCom("Home/NewsList")
//         },
//         {
//             path:"/home/message",
//             name:"message",
//             component:renderCom("Home/Message"),
//             children:[
//                 {
//                     path:"/home/message/:filmId",
//                     component:renderCom("Home/Message/Detail")
//                 }
//             ]
//         }
//     ]
// });
// router.addRoute( {
//     path: "/about",
//     name:"about",
//     component:renderCom("About")
// });
// router.addRoute({
//     // vue-router@4不支持以下代码实现404
//     // path:"*",
//     // component:NotFount
//
//     // 需要借助params形式实结合正则实现404
//     path: "/:pathMath(.*)",
//     component:renderCom("NotFount")
// })

// 方案四：
router.addRoute({
    path: "/",
    redirect: "/home"
});
router.addRoute({
    path: "/home",
    name:"home",
    component: renderCom("Home")
});
// 添加二级路由:第一个参数是所在路由的名字，第二个参数是路由信息
// 将添加的路由放置在名字为home的路由下。
router.addRoute("home",{
    path:"/home",
    name:"newList",
    component:renderCom("Home/NewsList")
})
router.addRoute("home", {
    path:"/home/message",
    name:"message",
    component:renderCom("Home/Message")
})
router.addRoute("message",{
    path:"/home/message/:filmId",
    component:renderCom("Home/Message/Detail")
})
router.addRoute( {
    path: "/about",
    name:"about",
    component:renderCom("About")
});
router.addRoute({
    path: "/:pathMath(.*)",
    component:renderCom("NotFount")
})


createApp(App).use(router).mount("#app");




