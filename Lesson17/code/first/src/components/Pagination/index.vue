<template>
  <div class="pagination">
    <button @click="handlePrev" :disabled="pageNo === 1">上一页</button>

    <!-- 第1页 -->
    <button
        @click="handlePageChange(1)"
        :class="{ active: pageNo === 1 }">
      1
    </button>

    <!-- 左省略号 -->
    <span v-if="leftEllipsis">···</span>

    <!-- 中间页码 -->
    <button
        v-for="page in centerPages"
        :key="page"
        @click="handlePageChange(page)"
        :class="{ active: pageNo === page }">
      {{ page }}
    </button>

    <!-- 右省略号 -->
    <span v-if="rightEllipsis">···</span>

    <!-- 最后一页 -->
    <button
        v-if="pageSum > 1"
        @click="handlePageChange(pageSum)"
        :class="{ active: pageNo === pageSum }">
      {{ pageSum }}
    </button>

    <button @click="handleNext" :disabled="pageNo === pageSum">下一页</button>
    <span>共 {{total}} 条</span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["continue", "total", "pageSize", "pageNo"],

  computed: {
    // 总页数
    pageSum() {
      return Math.ceil(this.total / this.pageSize)
    },

    // 中间显示的页码
    centerPages() {
      // 计算中间页码的起始和结束位置
      let start = this.pageNo - Math.floor(this.continue / 2)
      let end = this.pageNo + Math.floor(this.continue / 2)

      // 处理左边界
      if (start < 2) {
        start = 2
        end = Math.min(this.pageSum - 1, start + this.continue - 1)
      }

      // 处理右边界
      if (end > this.pageSum - 1) {
        end = this.pageSum - 1
        start = Math.max(2, end - this.continue + 1)
      }

      // 生成页码数组
      const result = []
      for (let i = start; i <= end; i++) {
        result.push(i)
      }
      return result
    },

    // 是否显示左省略号
    leftEllipsis() {
      return this.centerPages.length && this.centerPages[0] > 2
    },

    // 是否显示右省略号
    rightEllipsis() {
      return this.centerPages.length &&
          this.centerPages[this.centerPages.length - 1] < this.pageSum - 1
    }
  },

  methods: {
    handlePageChange(page) {
      if (page === this.pageNo) return
      this.$emit('update:pageNo', page)
      this.$emit('change-page-no', page)
    },

    handlePrev() {
      if (this.pageNo > 1) {
        this.handlePageChange(this.pageNo - 1)
      }
    },

    handleNext() {
      if (this.pageNo < this.pageSum) {
        this.handlePageChange(this.pageNo + 1)
      }
    }
  }
}
</script>

<!--<template>-->
<!--  <div class="pagination">-->
<!--    <button @click="handlePrev" :disabled="pageNo === 1">上一页</button>-->

<!--    &lt;!&ndash; 第1页 &ndash;&gt;-->
<!--    <button-->
<!--        @click="handleClick(1)"-->
<!--        :class="{ active: pageNo === 1 }">-->
<!--      1-->
<!--    </button>-->

<!--    &lt;!&ndash; 左省略号 &ndash;&gt;-->
<!--    <span v-if="leftEllipsis">···</span>-->

<!--    &lt;!&ndash; 中间页码 &ndash;&gt;-->
<!--    <button-->
<!--        v-for="page in centerPages"-->
<!--        :key="page"-->
<!--        @click="handleClick(page)"-->
<!--        :class="{ active: pageNo === page }">-->
<!--      {{ page }}-->
<!--    </button>-->

<!--    &lt;!&ndash; 右省略号 &ndash;&gt;-->
<!--    <span v-if="rightEllipsis">···</span>-->

<!--    &lt;!&ndash; 最后一页 &ndash;&gt;-->
<!--    <button-->
<!--        v-if="pageSum > 1"-->
<!--        @click="handleClick(pageSum)"-->
<!--        :class="{ active: pageNo === pageSum }">-->
<!--      {{ pageSum }}-->
<!--    </button>-->

<!--    <button @click="handleNext" :disabled="pageNo === pageSum">下一页</button>-->
<!--    <span>共 {{total}} 条</span>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "Pagination",-->
<!--  props: ["continue", "total", "pageSize", "pageNo"],-->

<!--  computed: {-->
<!--    // 总页数-->
<!--    pageSum() {-->
<!--      return Math.ceil(this.total / this.pageSize)-->
<!--    },-->

<!--    // 中间显示的页码-->
<!--    centerPages() {-->
<!--      // 计算中间页码的起始和结束位置-->
<!--      let start = this.pageNo - Math.floor(this.continue / 2)-->
<!--      let end = this.pageNo + Math.floor(this.continue / 2)-->

<!--      // 处理左边界-->
<!--      if (start < 2) {-->
<!--        start = 2-->
<!--        end = Math.min(this.pageSum - 1, start + this.continue - 1)-->
<!--      }-->

<!--      // 处理右边界-->
<!--      if (end > this.pageSum - 1) {-->
<!--        end = this.pageSum - 1-->
<!--        start = Math.max(2, end - this.continue + 1)-->
<!--      }-->

<!--      // 生成页码数组-->
<!--      const result = []-->
<!--      for (let i = start; i <= end; i++) {-->
<!--        result.push(i)-->
<!--      }-->
<!--      return result-->
<!--    },-->

<!--    // 是否显示左省略号-->
<!--    leftEllipsis() {-->
<!--      return this.centerPages.length && this.centerPages[0] > 2-->
<!--    },-->

<!--    // 是否显示右省略号-->
<!--    rightEllipsis() {-->
<!--      return this.centerPages.length &&-->
<!--          this.centerPages[this.centerPages.length - 1] < this.pageSum - 1-->
<!--    }-->
<!--  },-->

<!--  methods: {-->
<!--    handleClick(page) {-->
<!--      if (page === this.pageNo) return-->
<!--      this.$emit('update:pageNo', page)-->
<!--      this.$emit('change', page)-->
<!--    },-->

<!--    handlePrev() {-->
<!--      if (this.pageNo > 1) {-->
<!--        this.handleClick(this.pageNo - 1)-->
<!--      }-->
<!--    },-->

<!--    handleNext() {-->
<!--      if (this.pageNo < this.pageSum) {-->
<!--        console.log("下一页点击了");-->
<!--        this.handleClick(this.pageNo + 1)-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->


<!--<template>-->
<!--  <div class="pagination">-->
<!--    <button>上一页</button>-->
<!--    <button>1</button>-->
<!--    <span>···</span>-->

<!--    <button>14</button>-->
<!--    <button>15</button>-->
<!--    <button class="active">16</button>-->
<!--    <button>17</button>-->
<!--    <button>18</button>-->

<!--    <span>···</span>-->
<!--    <button>{{pageSum}}</button>-->

<!--    <button>下一页</button>-->

<!--    <span>共 {{total}} 条</span>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  props:["total","pageSize","pageNo"],-->
<!--  name: "index",-->
<!--  computed:{-->
<!--    pageSum(){-->
<!--      return Math.ceil(this.total/this.pageSize)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

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