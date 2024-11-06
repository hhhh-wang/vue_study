import Vue from "vue";
import router from "@/router";
import App from "@/App";
import MyList from "@/components/MyList";
Vue.component("MyList",MyList);
new Vue({
	render:h=>h(App),
	router
}).$mount("#app")