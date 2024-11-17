import {getSendCode, postLogin, postRegister} from "@/api/user";
import {Message} from "element-ui";
import router from "@/router";
const actions = {
	async getSendCodeAsync(content,phone){
		const result = await getSendCode(phone);
		return result.data;
	},
	async postRegisterAsync(content,body){
		const result = await postRegister(body);
		return result;
	},
	// 1
	async postLoginAsync(content,body){
		const {code,data} = await postLogin(body);
		if(code === 200){
			Message.success("恭喜您，登陆成功！");
			router.push("/");// 跳转至首页

		}else{
			Message.error("账号或密码错误！");
		}
	}
	
	// 2
	// async postLoginAsync(content,body){
	// 	const {code,data} = await postLogin(body);
	// 	if(code === 200){
	// 		Message.success("恭喜您，登陆成功！");
	// 		return data;
	// 	}
	// 	Message.error("账号或密码错误！");
	// 	return new Promise(()=>{});
	// }
}
export default {
	namespaced:true,
	actions
}