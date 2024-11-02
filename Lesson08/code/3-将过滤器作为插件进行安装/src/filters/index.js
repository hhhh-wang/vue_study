// import Vue from "vue";
const filters = {
	date(t){
		const timer = new Date(t);
		return timer.getFullYear() + "-" +
			(timer.getMonth() + 1).toString().padStart(2, 0) + "-" +
			timer.getDate().toString().padStart(2, 0) + " " +
			timer.getHours().toString().padStart(2, 0) + ":" +
			timer.getMinutes().toString().padStart(2, 0) + ":" +
			timer.getSeconds().toString().padStart(2, 0);
	},
	currency(v,n=2,type="$"){
		return type+v.toFixed(n);
	}
};
// 1
// export default {
// 	// 将filters常量中的过滤器设置为全局过滤器
// 	install(V){
// 		// console.log("install",V===Vue)
// 		for(let key in filters){
// 			V.filter(key,filters[key])
// 		}
// 	}
// }

// 2
export default function(V){
	for(let key in filters){
		V.filter(key,filters[key]);
	}
}