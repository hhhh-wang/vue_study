import {defineStore} from "pinia";
// 通过defineStore可以定义小仓库（模块）
// defineStore返回的值一般保存至以use开头的常量中。
// 第一个参数是模块的标识,第二个参数是配置对象
const useCounterStore = defineStore("counter",{
    // 通过state函数可以定义状态，返回的值即是该模块中的数据状态。
    // state(){
    //     return {
    //         num:100
    //     }
    // }
    // 上方代码也可以写为：
    state:()=>({
        num:200,
        arr:[1,2,3,4,5]
    }),
    actions:{
        addOne(a:number,b:number,c:number,d:number){
            console.log(a,b,c,d);
            this.num+=1;
        },
        delaySet(){
            setTimeout(()=>{
                this.num=900
            },2000)
        },
        changeArr(){
            this.arr.push(this.arr.length);
        }
    },
    getters:{
        sum(){
            console.log("sum");
            const value:number = this.arr.reduce((s:number,item:number)=>{
                return s+item;
            },0)
            return value;
        }
    }
});
// 在组件可以通过运行useCounterStore函数操作该模块中的数据状态。
export default useCounterStore;
