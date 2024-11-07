import axios from "axios";
const state = {
	token:localStorage.token || null
}
const mutations = {
	SET_TOKEN(state,token){
		state.token = localStorage.token = token;
	}
}
const actions = {
	async login({commit},body){
		const {data} = await axios.post("http://syt-api.atguigu.cn/admin/acl/index/login",body);
		if(data.code === 200){
			commit("SET_TOKEN",data.data)
		}else{
			alert("失败"+JSON.stringify(data));
			return new Promise(()=>{})
		}
	}
}
export default {
	state,
	mutations,
	actions
}