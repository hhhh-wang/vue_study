<template>
    <div>
        <h3 v-if="isLoading">正在加载中．．．．．</h3>
        <template v-else>
            <h3>{{ film.name }}</h3>
            <p>{{ film.synopsis }}</p>
        </template>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Details",
    data() {
        return {
            film: {},
            isLoading:false
        }
    },
    methods: {
        getFilmById(id) {
            this.isLoading = true;
            axios.get("https://m.maizuo.com/gateway?filmId=" + id + "&k=5447241", {
                headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16905280922820767016288257","bc":"310100"}',
                    "X-Host": "mall.film-ticket.film.info"
                }
            }).then(value => {
                this.film = value.data.data.film;
                this.isLoading = false;
            })
        }
    },

    mounted() {
        const {id} = this.$route.params;
        this.getFilmById(id);
    },
    beforeRouteUpdate(to, from, next) {
        console.log("beforeRouteUpdate")
        this.getFilmById(to.params.id);
        next();
    }
}
</script>

<style scoped>

</style>