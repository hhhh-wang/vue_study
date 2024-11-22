<template>
    <h3>子组件Child</h3>
    <p>userName:{{ userName }}</p>
    <p>age:{{ age }}</p>
    <p>hobby:{{ hobby }}</p>
    <p>sex:{{ sex }}</p>
    <button @click="fn">点我</button>
</template>

<script lang="ts" setup>
// defineProps有两个特点：
// 1- 不需要引入，可以直接使用
// 2- 指定接收的属性，指定的属性可以在模板中直接使用。
//    在script标签中不能直接用。需要通过defineProps的返回值获取。



// 1- 数组，数组的元素是字符串
// defineProps(["userName", "age"]);
// 2- 对象
// defineProps({
//     userName:String,
//     age:Number
// })
// 3- 对象，对象的属性值还是对象
const props = defineProps({
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
});
const fn = function(){
    console.log(props.userName);
    console.log(props.age);
    console.log(props.hobby);
    console.log(props.sex);
    // 属性是只读的，不允许更改
    // props.userName="lisi";
}
</script>

<style scoped>

</style>
 