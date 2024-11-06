<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header">
                    <h2>Vue Router Demo</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <a class="list-group-item" href="/about">About</a>
                    <a class="list-group-item active" href="/home" >Home</a>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <div><h2>Home组件内容</h2>
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
                    </div>
                </div>
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

</style>