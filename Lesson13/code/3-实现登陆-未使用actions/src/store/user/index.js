const state = {
	token:localStorage.token || null
}
const mutations = {
	SET_TOKEN(state,token){
		state.token = localStorage.token = token;
	}
}
export default {
	state,
	mutations
}