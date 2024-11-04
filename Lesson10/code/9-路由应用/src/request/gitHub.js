import Vue from "vue";
import axios from "axios";

const request = axios.create({
	baseURL:"https://api.github.com",
	timeout:10000
});
request.interceptors.response.use(res=>{
	return res.data;
})
Vue.prototype.$github = request;