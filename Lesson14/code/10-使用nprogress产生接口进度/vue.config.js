const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	// 忽略lint检查
	lintOnSave:false,
	// publicPath:"./",// 更改BASE_URL
	devServer:{
		open:true,
		host:"zhangpeiyue.com",
		port:80,
		proxy:{
			"/api":{
				target:"http://sph-h5-api.atguigu.cn",
				changeOrigin:true
			}
		}
	},
	pages: {
		index: {
			// page 的入口
			entry: 'src/index.js',
			// 设置网站标题
			title:"尚品汇"
		}
	}
})
