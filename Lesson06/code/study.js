// const obj = {
// 	"obj.userName":"lisi",
// 	"alsjdflaksdjf;lak$%^&*":10
// }
// console.log(obj)

// includes
let str = "我爱你中国";
console.log(str.includes("我"));// true
console.log(str.includes("中国"));// true
console.log(str.includes("你的"));// false
console.log(str.includes(""));// true

let arr = ["one","two","three"];
console.log(arr.includes("one"));// true
console.log(arr.includes("two"));// true
console.log(arr.includes("three"));// true
console.log(arr.includes("four"));// false