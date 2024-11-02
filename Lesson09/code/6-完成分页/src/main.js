import Vue from "vue";
import App from "@/App";
import Loading from "@/components/Loading";
Vue.component("Loading",Loading)
new Vue({
	render:h=>h(App)
}).$mount("#app");