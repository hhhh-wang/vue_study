<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li><a href="/home/news"  class="list-group-item">News</a></li>
                <li><a href="/home/message" class="list-group-item active" aria-current="page">Message</a></li>
            </ul>
            <div>
                <div>
                    <ul>
                        <li>
                            <a href="/home/message/1">message001</a> &nbsp;&nbsp;
                            <button>push</button> &nbsp;
                            <button>replace</button>
                        </li>
                        <li><a href="/home/message/2">message002</a> &nbsp;&nbsp;<button>push</button> &nbsp;<button>
                            replace
                        </button>
                        </li>
                        <li><a href="/home/message/4">message004</a> &nbsp;&nbsp;<button>push</button> &nbsp;<button>
                            replace
                        </button>
                        </li>
                    </ul>
                    <button>前进</button>
                    <button>后退</button>
                </div>
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