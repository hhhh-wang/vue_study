<template>
    <!-- 头部 -->
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                    <p>
                        <span>请</span>
                        <router-link to="/login">登录</router-link>
                        <router-link to="/register" class="register">免费注册</router-link>
                        <router-link to="/search" class="register">搜索</router-link>
                    </p>
                </div>
                <div class="typeList">
                    <a>我的订单</a>
                    <a>我的购物车</a>
                    <a>我的尚品汇</a>
                    <a>尚品汇会员</a>
                    <a>企业采购</a>
                    <a>关注尚品汇</a>
                    <a>合作招商</a>
                    <a>商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom">
            <h1 class="logoArea">
                <router-link to="/" class="logo" title="尚品汇">
                    <img src="./images/logo.png" alt="">
                </router-link>
            </h1>
            <div class="searchArea">
                <form action="###" class="searchForm">
                    <input type="text" id="autocomplete" class="input-error input-xxlarge" />
                    <button @click="goSearch" class="sui-btn btn-xlarge btn-danger" type="button">搜索</button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    methods:{
        goSearch(){
            // 如果通过编程式导航切换至当前路由，那么会有异常：voided redundant navigation to current location: "/search".
            // this.$router.push("/search");
            // this.$router.replace("/search");

            // 原因：由于vue-router3.1之后对路由地址进行了判断，且采用了Promise形式。
            // 如果通过编程式导航切换的地址与当前地址相同，那么返回的Promise实例是失败的。
            // const result = this.$router.push("/search");
            // console.log(result);// 失败的Promise实例。

            // 解决方案一：使用vue-router@3.1之前的版本。
            // 解决方案二：处理异常
            // 处理异常1：使用失败回调函数
            // this.$router.push("/search").then(value=>{
            //     // 成功值为要跳转的路由
            //     console.log("成功",value);
            // },reason=>{
            //     // reason:是失败信息
            //     // console.log("失败",reason);
            // })
            // 处理异常2：
            // this.$router.push("/search").catch(()=>{});

            // 处理异常3：可以使用回调函数:push，replace接收的第一个参数是地址（字符串，对象）
            //          第二个参数是成功回调，第三个参数是失败回调
            // this.$router.push("/search",(value)=>{
            //     // value:是要跳转的路由信息
            //     console.log("成功",value)
            // },reason=>{
            //     // reason:是失败的信息
            //     console.log("失败",reason)
            // })

            // 解决方案三：对原生的push,replace进行调用（加强）


            // 加强：
            // push接收三个参数： push (location, onComplete, onAbort)
            // console.log(this.$router.push)
            // 1- this.$router是VueRouter的实例
            // 2- this.$router.push是VueRouter.prototype中的方法
            // console.log(this.$router);

            // this.$router.push("/search");
            this.$router.replace("/search");

        }
    }
}
</script>

<style lang="less" scoped>
.header {
    &>.top {
        background-color: #eaeaea;
        height: 30px;
        line-height: 30px;

        .container {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .loginList {
                float: left;

                p {
                    float: left;
                    margin-right: 10px;

                    .register {
                        border-left: 1px solid #b3aeae;
                        padding: 0 5px;
                        margin-left: 5px;
                    }
                }
            }

            .typeList {
                float: right;

                a {
                    padding: 0 10px;

                    &+a {
                        border-left: 1px solid #b3aeae;
                    }
                }

            }

        }
    }

    &>.bottom {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        .logoArea {
            float: left;

            .logo {
                img {
                    width: 175px;
                    margin: 25px 45px;
                }
            }
        }

        .searchArea {
            float: right;
            margin-top: 35px;

            .searchForm {
                overflow: hidden;

                input {
                    box-sizing: border-box;
                    width: 490px;
                    height: 32px;
                    padding: 0px 4px;
                    border: 2px solid #ea4a36;
                    float: left;

                    &:focus {
                        outline: none;
                    }
                }

                button {
                    height: 32px;
                    width: 68px;
                    background-color: #ea4a36;
                    border: none;
                    color: #fff;
                    float: left;
                    cursor: pointer;

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>