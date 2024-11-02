// assign是Object对象下的一个方法
// 第一个参数是目标对象,其余的参数称为源对象.
// 将所有的源对象合并至目标对象.
// 返回值是目标对象.
// let obj = {
// 	a:1
// }
// let obj2 = {
// 	b:2
// }
// 以下是将obj2合并至obj中,然后将obj进行返回赋值给obj3
// const obj3 = Object.assign(obj,obj2);
// console.log(obj3===obj);// true

// const obj4 = Object.assign({},obj,obj2);
// console.log(obj4,obj,obj2)


function Box(){

}
Object.assign(Box.prototype,{
	fn(){
	
	},
	my(){
	
	}
})
