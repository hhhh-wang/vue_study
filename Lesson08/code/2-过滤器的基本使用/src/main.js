import Vue from "vue";
import App from "@/App";
import filters from "@/filters";
// 1- 全局过滤器
// Vue.filter("date",function(t){
// 	const timer = new Date(t);
// 	return timer.getFullYear() + "-" +
// 		(timer.getMonth() + 1).toString().padStart(2, 0) + "-" +
// 		timer.getDate().toString().padStart(2, 0) + " " +
// 		timer.getHours().toString().padStart(2, 0) + ":" +
// 		timer.getMinutes().toString().padStart(2, 0) + ":" +
// 		timer.getSeconds().toString().padStart(2, 0);
// });
// Vue.filter("currency",function(v,n=2,type="$"){
// 	return type+v.toFixed(n);
// })

// 2- 将过滤器放置在src->filters->index.js中
// for(let key in filters){
// 	Vue.filter(key,filters[key]);
// }
new Vue({
	render:h=>h(App),
	beforeCreate() {
		// 3
		for (let key in filters) {
			Vue.filter(key, filters[key]);
		}
	}
}).$mount("#app")