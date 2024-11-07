<template>
    <div>
        <slot></slot>
        <div v-for="item in bookList" :key="item.id">
            <p>《{{item.bookName}}》-->{{item.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookList",
    props:["bookList"]
}
</script>

<style scoped>

</style>