<template>
    <div data-reactroot="" class="container">
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div><input type="text" placeholder="enter the name you search"><button>Search</button></div>
        </section>
        <div class="row">
            <div class="card">
                <a href="https://github.com/aa" target="_blank"><img
                    src="https://avatars1.githubusercontent.com/u/28438?v=4" style="width: 100px;"></a>
                <p class="card-text">aa</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}

</style>