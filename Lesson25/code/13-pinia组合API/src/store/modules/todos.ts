import {defineStore} from "pinia";
import {computed, reactive, ref, watch} from "vue";
const useTodosStore = defineStore("todos",()=>{
    // 响应式的ref,reactive----->state
    let taskList = ref([1,2,3,4]);
    let obj = reactive({
        userName:"zhangsan",
        age:12
    })
    // 定义的方法相当于------------>actions
    const addTaskList = function(num:number){
        taskList.value.push(num);
    }
    // 计算属性------------------->getters
    const sum = computed(()=>taskList.value.reduce((v:number,item:number)=>v=v+item,0));
    // watch
    // watch(taskList,()=>{
    //     console.log("taskList改变了")
    // },{
    //     immediate:true,
    //     deep:true
    // })

    watch(()=>taskList.value,()=>{
        console.log("taskList改变了")
    },{
        immediate:true,
        deep:true
    })
    // 切记一定一定一定要返回！
    return {
        taskList,
        obj,
        addTaskList,
        sum
    }
})
export default useTodosStore;