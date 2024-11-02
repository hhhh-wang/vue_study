<template>
    <div class="todo-footer">
        <label>
            <input @change="changeAllChecked" :checked="isAllChecked" type="checkbox"/>
        </label>
        <span>已选中{{checkedNum}}/全部{{allNum}}</span>
        <button @click="delTaskListByIsChecked" v-show="checkedNum>0" class="btn btn-danger">清除已选择任务</button>
    </div>
</template>

<script>
export default {
    name: "TodoFooter",
    props:["taskList"],
    data(){
        return {
            isAllChecked:true,// 是否全选
            checkedNum:0,// 选中任务的数量
            allNum:0,// 全部任务的数量
        }
    },
    methods:{
        delTaskListByIsChecked(){
            this.$emit("update:taskList",this.taskList.filter(v=>!v.isChecked))
        },
        changeAllChecked(){
            this.$emit("update:taskList",this.taskList.map(item=>{
                item.isChecked = !this.isAllChecked;
                return item;
            }))
        }
    },
    watch:{
        taskList:{
            handler(){
                this.allNum = this.taskList.length;
                // this.checkedNum = 0;
                // 1
                // for(let i=0;i<this.taskList.length;i++){
                //     if(this.taskList[i].isChecked) this.checkedNum++;
                // }

                // 2
                // this.taskList.forEach(item=>{
                //     if(item.isChecked) this.checkedNum++;
                // })

                // 3
                this.checkedNum = this.taskList.reduce(function(num,item){
                    if(item.isChecked) num++;
                    return num;
                },0);

                this.isAllChecked = this.checkedNum === this.allNum;
                if(this.checkedNum === 0 && this.allNum === 0) this.isAllChecked = false;
            },
            immediate:true
        }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>