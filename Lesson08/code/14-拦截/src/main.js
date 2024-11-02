import Vue from "vue";
import axios from "axios";
axios.interceptors.response.use(res=>{
	console.log("拦截器1",res);
	return res.data;
})
axios.interceptors.response.use(res=>{
	console.log("拦截器2",res);
	return res.data;
})
new Vue({
	render:h=>h("h3","App"),
	mounted(){
		axios.get("https://api.github.com/search/repositories?q=r&sort=stars").then(value=>{
			console.log(value);
		})
	}
}).$mount("#app");