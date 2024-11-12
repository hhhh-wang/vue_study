<template>
    <div class="pagination">
        <button>上一页</button>
        <button>1</button>
        <span>···</span>

        <!--1-->
<!--        <button :class="{active:(pageNo===startAndEnd.start+page-1)}" -->
<!--                v-for="page in (startAndEnd.end - startAndEnd.start+1)">-->
<!--            {{startAndEnd.start+page-1}}-->
<!--        </button>-->

        <!--2-->
<!--        <button :class="{active:(pageNo===startAndEnd.start+index)}"-->
<!--                v-for="(_,index) in (startAndEnd.end - startAndEnd.start+1)">-->
<!--            {{startAndEnd.start+index}}-->
<!--        </button>-->

        <!--3-->
        <button :class="{active:pageNo===page}" v-show="page >=startAndEnd.start"  v-for="page in startAndEnd.end" :key="page">
            {{page}}
        </button>

        <span>···</span>
        <button>{{pageSum}}</button>
        <button>下一页</button>

        <span>共 {{total}} 条</span>
        <div>
            <h3>
                {{startAndEnd}}
            </h3>

        </div>
    </div>
</template>

<script>
export default {
    props:["total","pageSize","continue","pageNo"],
    name: "index",
    computed:{
        pageSum(){
            return Math.ceil(this.total/this.pageSize)
        },
        // 计算起始与结束位置
        startAndEnd(){
            let start = 0;
            let end = 0;
            // pageNo = 16,start==>14 end=18
            start = this.pageNo-(this.continue-1)/2;
            end = this.pageNo + (this.continue-1)/2
            return {start,end}
        }
    }
}
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;

    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: gray;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #c81623;
            color: #fff;
        }
    }

    span {
        display: inline-block;
        line-height: 28px;
        font-size: 14px;
        color: gray;
        vertical-align: middle;
    }
}
</style>