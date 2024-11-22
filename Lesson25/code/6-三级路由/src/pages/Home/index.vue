<template>
    <h2>Home组件内容</h2>
    <div>
        <ul class="nav nav-tabs">
            <li><router-link to="/home" exact-active-class="active" class="list-group-item">News</router-link></li>
            <li><router-link to="/home/message" active-class="active" class="list-group-item" >Message</router-link>
            </li>
        </ul>
        <router-view/>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
 