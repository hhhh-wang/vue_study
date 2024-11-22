import { createApp } from "vue";
import App from "@/App.vue";
import Home from "@/pages/Home/index.vue";
import About from "@/pages/About/index.vue";
import NotFount from "@/pages/NotFount/index.vue";
// 1- 引入createRouter
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
// 2- 配置每一个路由器的信息
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    // vue-router@4不支持以下代码实现404
    // path:"*",
    // component:NotFount

    // 需要借助params形式实结合正则实现404
    path: "/:pathMath(.*)",
    component: NotFount,
  },
];
// 3- 创建router
const router = createRouter({
  // 相当于Vue2当中的mode:"history"
  history: createWebHistory(),
  // 相当于Vue2当中的mode:"hash"
  // history:createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      left: 0, // 相当于之前的x
      top: 0, // 相当于之前的y
    };
  },
});
// 4- 安装1
// const app = createApp(App);
// app.use(router);
// app.mount("#app");

// 5- 安装2-链式调用
createApp(App).use(router).mount("#app");
