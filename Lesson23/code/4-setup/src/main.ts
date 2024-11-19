// 在Vue3中不需要实例化Vue
// 可以通过createApp创建单页面应用的一个对象,类型是一个函数。
import {createApp} from "vue";
// console.log(createApp);// 是一个函数
// 引入根组件App,根组件不允许省略扩展名.vue(main.ts中不支持省略.vue)
import App from "@/App.vue";
// 运行该函数必须指定一个根组件。
// 该函数返回的是一个对象，称该对象为app对象。

// 方式一
// const app = createApp(App);
// console.log(app);// 输出的app对象只是一个普通对象
// 指定挂载的容器。(将id为app的标签作为应用的容器)
// app.mount("#app");

// 方式二
createApp(App).mount("#app");
