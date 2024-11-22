<template>
    <div>
        <h3>子组件Child</h3>
        <p>props->userName->{{userName}}</p>
        <p>props->age->{{age}}</p>
        <p>props->hobby->{{hobby}}</p>
        <p>props->sex->{{sex}}</p>
        <button @click="fn">点我</button>
    </div>
</template>

<script>
export default {
    name: "Child",
    // 1- 数组，数组内的元素是字符串，字符串即是属性的名字
    // props:["userName","age"],
    // 2- 对象：对象的属性即是接收的属性。可以对类型进行限制
    // props:{
    //     // 字符串
    //     userName:String,
    //     // 数字
    //     age:Number
    // },
    // 3- 对象
    props:{
        userName:{
            type:String
        },
        age:{
            type:Number
        },
        hobby:{
            type:String,
            required:true
        },
        sex:{
            type:String,
            default:"男"
        }
    },
    methods:{
        fn(){
            // 可以通过this获取属性，且不允许修改
            console.log(this.userName,this.age,this.hobby,this.sex);
            this.userName= 1;
        }
    }
}
</script>

<style scoped>

</style>