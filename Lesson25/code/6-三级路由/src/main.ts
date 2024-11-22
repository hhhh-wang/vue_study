import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router";

// 4- 安装1
// const app = createApp(App);
// app.use(router);
// app.mount("#app");

// 5- 安装2-链式调用
createApp(App).use(router).mount("#app");



