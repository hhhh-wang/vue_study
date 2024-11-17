const obj = {
	fn:()=>{
		function fn(){
			console.log(this)
		}
	}
}
obj.fn();