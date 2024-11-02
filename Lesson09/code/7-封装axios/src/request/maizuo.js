import axios from "axios";
const maizuo = axios.create({
	baseURL:"https://m.maizuo.com",
	timeout:10000,
	headers:{
		"X-Host":"mall.film-ticket.film.list",
		"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16903322302568072615428097"}'
	}
});
maizuo.interceptors.response.use(res=>res.data);
export default maizuo;