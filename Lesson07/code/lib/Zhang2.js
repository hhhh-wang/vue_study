// config.data中的属性通过defineProperty作为实例的属性。
function Zhang(config){
	this.$data = config.data;
	for(let key in this.$data){
		Object.defineProperty(this,key,{
			get(){
				return this.$data[key]
			},
			set(v){
				this.$data[key] = v;
			}
		})
	}
}