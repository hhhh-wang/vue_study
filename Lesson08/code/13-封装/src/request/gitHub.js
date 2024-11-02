import axios from "axios";
axios.defaults.baseURL = "https://api.github.com";
axios.interceptors.response.use(res=>{
	console.log(0,res);
	return res.data;
});
export default function(Vue){
	Vue.prototype.$axios = axios;
}