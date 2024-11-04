<template>
    <div>
        <div v-for="item in items" :key="item.id">
            <p>
<!--                <router-link :to="'/details/'+item.login">{{item.login}}</router-link>-->
<!--                <router-link :to="{-->
<!--                    name:'details',-->
<!--                    params:{-->
<!--                        login:item.login-->
<!--                    }-->
<!--                }">{{item.login}}</router-link>-->

                <router-link :to="{
                    path:'/details/'+item.login+'.html'
                }">{{item.login}}</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data(){
        return {
            items:[]
        }
    },
    mounted(){
        this.$github.get("/search/users?q=r&sort=stars").then(({items})=>{
            // console.log(value);
            this.items = items;
        })
    }
}
</script>

<style scoped>

</style>