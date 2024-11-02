// config.data中的属性通过defineProperty作为实例的属性。
// 未优化：
// function Zhang(config){
// 	this.$data = config.data;
// 	for(let key in config.methods){
// 		this[key] = config.methods[key].bind(this);
// 	}
//
// 	for(let key in this.$data){
// 		Object.defineProperty(this,key,{
// 			get(){
// 				return this.$data[key]
// 			},
// 			set(v){
// 				this.$data[key] = v;
// 			}
// 		})
// 	}
// }

// 优化
function Zhang(config){
	this.$data = config.data;
	this.initMethods(config);
	this.initData();
	
}
Zhang.prototype.initMethods = function(config){
	for(let key in config.methods){
		debugger;
		this[key] = config.methods[key].bind(this);
	}
}
Zhang.prototype.initData = function(){
	for(let key in this.$data){
		this.proxy(key);
	}
}
Zhang.prototype.proxy = function(key){
	Object.defineProperty(this,key,{
		get(){
			return this.$data[key]
		},
		set(v){
			this.$data[key] = v;
		}
	})
}
