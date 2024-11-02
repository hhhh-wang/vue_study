<template>
    <div>
        <h3>{{t | date}}</h3>
    </div>
</template>

<script>
export default {
    name: "Child",
    data(){
        return {
            t:Date.now()-9999999999
        }
    }
}
</script>

<style scoped>

</style>