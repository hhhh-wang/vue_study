import {sphRequest} from "@/request";
// 获取验证码 /api/user/passport/sendCode/{phone}
export const getSendCode = phone => sphRequest(`/user/passport/sendCode/${phone}`);

// 注册用户  /api/user/passport/register  post
export const postRegister = body =>sphRequest.post(`/user/passport/register`,body);