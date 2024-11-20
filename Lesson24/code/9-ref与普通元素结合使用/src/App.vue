<template>
    <div>
        <h3 ref="h3Ref">ref</h3>
        <input value="100" ref="userName" type="text">
    </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
// 与普通标签结合使用：在标签中作用ref属性，其值为ref对象。
//                 那么当组件挂载完成后得到的value值为真实DOM元素。
const userName = ref<HTMLInputElement | number>(1);
const h3Ref = ref();
console.log(userName.value);// 还未实现挂载，所以值为初始的1
onMounted(()=>{
    console.log("mounted",userName.value===document.querySelector("input"));
    console.log("mounted",(document.querySelector("input") as  HTMLInputElement).value);
    console.log("mounted",(userName.value as  HTMLInputElement).value);
    console.log("mounted",h3Ref.value.innerText)
})
</script>