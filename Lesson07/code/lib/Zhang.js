// config.data中的属性通过defineProperty作为实例的属性。
function Zhang(config){
	this.$data = config.data;
	Object.defineProperty(this,"age",{
		get(){
			return this.$data.age;
		},
		set(v){
			this.$data.age = v;
		}
	})
	Object.defineProperty(this,"userName",{
		get(){
			return this.$data.userName;
		},
		set(v){
			this.$data.userName = v;
		}
	})
}