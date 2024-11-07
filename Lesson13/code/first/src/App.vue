<template>
    <div>
        <!-- 1-->
<!--        <BookList v-slot="slotProps">-->
<!--            <div>a:{{slotProps.a}}</div>-->
<!--            <div>b:{{slotProps.b}}</div>-->
<!--            <div>arr:{{slotProps.arr}}</div>-->
<!--        </BookList>-->

        <!--  2 -->
<!--        <BookList v-slot:default="slotProps">-->
<!--            <div>a:{{slotProps.a}}</div>-->
<!--            <div>b:{{slotProps.b}}</div>-->
<!--            <div>arr:{{slotProps.arr}}</div>-->
<!--        </BookList>-->

        <!-- 3-->
        <BookList #default="slotProps">
            <div>a:{{slotProps.a}}</div>
            <div>b:{{slotProps.b}}</div>
            <div>arr:{{slotProps.arr}}</div>
        </BookList>
    </div>

</template>

<script>
// 插槽：在子组件当中通过内置的slot组件进行占位。该占位可以呈现使用子组件时所包裹的内容。
import BookList from "@/components/BookList";
export default {
    name: "App",
    components: {BookList},
    data(){
        return {
            boy:[
                {
                    id:"1",
                    bookName:"这个世界很危险",
                    author:"叶知风"
                },
                {
                    id:"2",
                    bookName:"三国：我为刘禅，霄汉永灿",
                    author:"麻货"
                }
            ],
            girl:[
                {
                    id:"4",
                    bookName:"不装了，财阀大佬暗恋我很久了",
                    author:"我爱干饭"
                },
                {
                    id:"5",
                    bookName:"误入豪门，闪婚老公每天花式吃醋",
                    author:"这一剑惊鸿"
                }
            ]
        }
    }
}
</script>

<style lang="less">
</style>