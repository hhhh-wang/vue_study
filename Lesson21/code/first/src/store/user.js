import { getSendCode, getUserInfo, postLogin, postRegister } from "@/api/user";
import { Message } from "element-ui";
import router from "@/router";
import { saveToken } from "@/utils/auth";
const state = {
  userInfo: null,
};
const mutations = {
  SAVE_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  },
};
const actions = {
  async getSendCodeAsync(content, phone) {
    const result = await getSendCode(phone);
    return result.data;
  },
  async postRegisterAsync(content, body) {
    const result = await postRegister(body);
    return result;
  },
  // 1
  async postLoginAsync({ dispatch }, body) {
    const { code, data } = await postLogin(body);
    if (code === 200) {
      Message.success("恭喜您，登陆成功！");
      saveToken(data.token);
      await dispatch("getUserInfoAsync");

      router.push("/"); // 跳转至首页
    } else {
      Message.error("账号或密码错误！");
    }
  },
  // 获取个人信息
  async getUserInfoAsync({ commit }) {
    const result = await getUserInfo();
    commit("SAVE_USER_INFO", result.data);
    console.log(result);
  },

  // 获取个人信息

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
};
export default {
  namespaced: true, // 确保模块启用了命名空间
  state,
  mutations,
  actions,
};
