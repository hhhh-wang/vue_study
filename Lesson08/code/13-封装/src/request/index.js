import axios from "axios";
axios.defaults.baseURL = "https://api.github.com";
axios.interceptors.response.use(res=>{
	return res.data;
});
export default axios;