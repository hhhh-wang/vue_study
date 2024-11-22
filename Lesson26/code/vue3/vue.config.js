const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    port:8003,
    host:"v3.zhangpeiyue.com",
    open:true
  }
})
