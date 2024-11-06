export const mapState = function(config){
	const obj = {};
	// 判断接收的参数是不是一个数组
	if(config instanceof Array){
		// 将数组的元素名字作为obj的属性名
		config.forEach(key=>{
			obj[key] = function(){
				return this.$store.state[key];
			}
		})
	}else{
		for(let key in config){
			 obj[key] = function(){
				 return config[key](this.$store.state);
			 }
		}
	}
	return obj;
}