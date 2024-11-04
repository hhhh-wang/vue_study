// let arr = [1,2,3,4];
// arr.map(item=>{
// 	item=9;
// })
// console.log(arr);
//
// let arr = [{a:1},{a:2},{a:3}]
// arr.map(item=>{
// 	item.a = 100;
// });
// console.log(arr);

this.taskList.map(item=>{
	if(item.id === id) item.isChecked = !item.isChecked
	return item;
})

watch:{
	taskList:{
		deep:true
	}
}