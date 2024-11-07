<template>
    <div>
        <div>
            <h3 style="color:blue">男生必读</h3>
            <div v-for="item in boy" :key="item.id">
                <p>《{{item.bookName}}》-->{{item.author}}</p>
            </div>
        </div>
        <hr/>
        <div>
            <h3 style="color:pink">女生爱看</h3>
            <div v-for="item in girl" :key="item.id">
                <p>《{{item.bookName}}》-->{{item.author}}</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "App",
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