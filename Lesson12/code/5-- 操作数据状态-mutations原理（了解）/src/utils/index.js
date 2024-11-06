export const mapMutations = function(config){
	const obj = {};
	if(config instanceof Array){
		config.forEach(key=>{
			obj[key] = function(payload){
				this.$store.commit(key,payload);
			}
		})
	}
	else{
		for(let key in config){
			obj[key] = function(payload){
				this.$store.commit(config[key],payload)
			}
		}
	}
	return obj;
	
}