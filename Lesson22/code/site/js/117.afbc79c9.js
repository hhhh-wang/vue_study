"use strict";(self["webpackChunkfirst"]=self["webpackChunkfirst"]||[]).push([[117],{9117:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-wrap"},[e("div",{staticClass:"login"},[e("div",{staticClass:"loginform"},[e("div",{staticClass:"content"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e("div",{staticClass:"input-text clearFix"},[e("i"),e("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,phone_rule:!0},expression:"{required:true,phone_rule:true}"}],attrs:{type:"text",name:"phone",placeholder:"手机号"}}),e("span",{staticClass:"error-msg"},[t._v(t._s(t.errors.first("phone")))])]),e("div",{staticClass:"input-text clearFix"},[e("i",{staticClass:"pwd"}),e("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,pwd_rule:!0},expression:"{required:true,pwd_rule:true}"}],attrs:{type:"text",name:"password",placeholder:"请输入密码"}}),e("span",{staticClass:"error-msg"},[t._v(t._s(t.errors.first("password")))])]),e("button",{staticClass:"btn"},[t._v("登  录")])]),e("div",{staticClass:"call clearFix"},[e("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v("立即注册")])],1)])])])])},r=[],i={name:"Login",methods:{async login(t){const e=await this.$validator.validateAll();if(e){const e=t.target.phone.value.trim(),s=t.target.password.value.trim();await this.$store.dispatch("user/postLoginAsync",{phone:e,password:s})}}},mounted(){console.log(this)}},l=i,n=s(5440),o=(0,n.Z)(l,a,r,!1,null,"cc0e9948",null),u=o.exports}}]);
//# sourceMappingURL=117.afbc79c9.js.map