import axios from "axios";
const state = {
	token:localStorage.getItem("token"),
	info:{}
}
const mutations = {
	SET_TOKEN(state,token){
		state.token = localStorage.token = token;
		// if(!token) localStorage.clear();
	},
	SET_INFO(state,info){
		state.info = info;
	},
	OUTLOG(state){
		localStorage.clear();
		state.token = null;
		state.info={};
	},
	ADD_GOODS(){
		console.log("user->ADD_GOODS");
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
	},
	async getInfoAsync({state,commit}){
		const {data} = await axios.get("http://syt-api.atguigu.cn/admin/acl/index/info",{
			headers:{
				token:state.token
			}
		});
		console.log(data);
		commit("SET_INFO",data.data)
	},
	async postLogout({state,commit}){
		// POST /admin/acl/index/logout
		const {data} = await axios.post("http://syt-api.atguigu.cn/admin/acl/index/logout",{
			headers:{
				token:state.token
			}
		});
		commit("OUTLOG");
	}
}
export default {
	namespaced:true,
	state,
	mutations,
	actions
}