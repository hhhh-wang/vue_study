<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li><router-link active-class="active" to="/film/1"  class="list-group-item">正在热映</router-link></li>
                <li><router-link active-class="active" to="/film/2" class="list-group-item" >即将上映</router-link></li>
            </ul>
            <div>
               <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

</style>