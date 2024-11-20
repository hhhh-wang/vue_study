const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave:false,
	devServer:{
		open:true,
		host:"zhangpeiyue.com",
		port:80
	}
})
