<template>
    <h3>App</h3>
    <p>count:{{count}}</p>
    <button @click="suibian">{{count}}</button>
    <hr/>
    <p>{{obj}}</p>
    <button @click="obj.userName+='!'">更改userName</button>
    <button @click="changeAge">更改userName</button>
</template>
<script lang="ts">
    import {defineComponent,ref} from "vue";

    export default defineComponent({
        setup(){
            // setup是组合API的入口
            // 1- 可以通过ref实现数据的响应式。
            // 2- ref需要通过import {ref} from "vue"导入
            // 3- ref是一个函数。
            // 4- 返回的是一个拥有value属性的RefImpl的实例对象。
            // 5- ref接收的值即是ref函数返回的RefImpl的实例对象的value属性值。
            // 6- 常见操作：ref在setup中调用，其调用结果作为setup返回对象的属性。
            // 7- setup返回的对象中的属性值如果是RefImpl的实例，那么在模块中可以直接被解包。
            //    解包：可以不需要写 RefImpl实例.value,可以直接书写实例即可。
            //         比如实例为count,在模板中可以直接写count
            //    在setup中不会被解包，必须要写.value
            // 8- ref可以接收任意类型的数据，并实现响应式。
            // 9- 如果ref接收的是一个非原始类型，那么其底层用的是reactive.(下午详聊)
            // 10- 在模板中事件监听中可以直接操作refImpl属性，在script中必须要使用.value
            // const num = ref();
            // console.log(num.value);// undefined

            let count = ref(100);
            let obj = ref({
                userName:"zhangsan",
                age:12
            })
            console.log(count.value);
            return {
                count,
                obj,
                suibian(){
                    // console.log("suibian")
                    // this.count = 200;// 可以实现响应式
                    count.value = 200;// 可以实现响应式
                },
                changeAge(){
                    obj.value.age+=10;
                    // 基本数据类型-ref接收的类型
                    console.log("count",count);
                    // 引用类型-ref接收的类型
                    console.log("obj",obj)
                }
            }

        }
    })
</script>