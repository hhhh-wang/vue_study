<template>
    <div>
        <h2>卖座电影内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li><router-link to="nowPlaying" active-class="active"  class="list-group-item">正在热映</router-link></li>
                <li><router-link to="comingSoon" active-class="active"  class="list-group-item">即将上映</router-link></li>
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