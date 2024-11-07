<template>
    <div>
        <h3 :style="{color}">{{title}}</h3>
        <div v-for="item in bookList" :key="item.id">
            <p>《{{item.bookName}}》-->{{item.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookList",
    props:["bookList","title","color"]
}
</script>

<style scoped>

</style>