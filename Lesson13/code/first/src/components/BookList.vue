<template>
    <div>
        <slot :a="a" :b="b" :arr="arr"></slot>
    </div>
</template>

<script>
export default {
    name: "BookList",
    data(){
        return {
            a:1,
            b:2,
            arr:[1,2,3,4,5]
        }
    },
    props:["bookList"]
}
</script>

<style scoped>

</style>