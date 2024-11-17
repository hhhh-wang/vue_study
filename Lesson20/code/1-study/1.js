
const arr = [{
	isChecked: 1
}, {
	isChecked: 1
},{
	isChecked: 1
},{
	isChecked: 1
}];
// 思路3:
let isAll = arr.every(item=>item.isChecked===1);
console.log(isAll);


// 思路2:
// let isAll = true;
// for(let i=0;i<arr.length;i++){
// 	if(arr[i].isChecked===0) {
// 		isAll = false;
// 		break;
// 	}
// }
// console.log(isAll);


// 思路1：
// let sumLength = arr.length;
// let checkedLength = arr.filter(v=>v.isChecked===1).length;
// let isAll = sumLength === checkedLength;
// console.log(isAll);// true 全选  false 未全选


