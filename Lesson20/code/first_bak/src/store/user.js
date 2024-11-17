import {getSendCode, postRegister} from "@/api/user";

const actions = {
	async getSendCodeAsync(content,phone){
		const result = await getSendCode(phone);
		return result.data;
	},
	async postRegisterAsync(content,body){
		const result = await postRegister(body);
		return result;
	}
}
export default {
	namespaced:true,
	actions
}