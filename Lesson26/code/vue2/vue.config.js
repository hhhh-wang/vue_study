const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    port:8002,
    host:"v2.zhangpeiyue.com",
    open:true
  }
})
