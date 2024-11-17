<template>
  <!-- 购物车列表 -->
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th4">单价</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(cart, index) in cartList" :key="cart.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cart.isChecked === 1" @change="updateChecked(cart)">
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl">
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice.toFixed(2) }}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="updateSkuNum(cart, -1)">-</a>
            <input autocomplete="off" type="text" :value="cart.skuNum" minnum="1" class="itxt" @change="changeSkuNum($event, cart)">
            <a href="javascript:void(0)" class="plus" @click="updateSkuNum(cart, 1)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ (cart.skuNum * cart.skuPrice).toFixed(2) }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="deleteCartItem(cart.skuId)">删除</a>
            <br>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isAllChecked" @change="toggleAllCheck">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none" @click="deleteSelectedItems">删除选中的商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{ checkedCount }}</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice.toFixed(2) }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank" @click="checkout">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Cart",

  computed: {
    ...mapState('cart', ['cartList']),

    // 计算是否全选
    isAllChecked() {
      return this.cartList.length > 0 && this.cartList.every(item => item.isChecked === 1);
    },

// 计算选中商品数量
    checkedCount() {
      return this.cartList.reduce((total, item) => {
        if (item.isChecked === 1) {
          return total + item.skuNum;  // 累加选中商品的数量
        }
        return total;
      }, 0);
    },
    // 计算总价
    totalPrice() {
      return this.cartList.reduce((total, item) => {
        if (item.isChecked === 1) {
          return total + (item.skuPrice * item.skuNum);
        }
        return total;
      }, 0);
    }
  },

  methods: {
    // 更新商品选中状态
    async updateChecked(cart) {
      try {
        // 调用对应的action,传入skuID和isChecked参数
        await this.$store.dispatch('cart/getCartIsCheckedByIdAsync', {
          skuID: cart.skuId, // 注意这里是skuID而不是skuId
          isChecked: cart.isChecked === 1 ? 0 : 1
        });
        // 由于action内部会重新请求列表,这里不需要再调用getCartList
      } catch (error) {
        console.error('更新选中状态失败:', error);
      }
    },

    // 更新商品数量
    async updateSkuNum(cart, change) {
      const newNum = cart.skuNum + change;
      if (newNum < 1) return;

      try {
        await this.$store.dispatch('cart/updateCartNum', {
          skuId: cart.skuId,
          skuNum: newNum
        });
        // 重新获取购物车列表
        this.getCartList();
      } catch (error) {
        console.error('更新商品数量失败:', error);
      }
    },

    // 直接修改商品数量
    async changeSkuNum(event, cart) {
      const newNum = parseInt(event.target.value);
      if (isNaN(newNum) || newNum < 1) {
        event.target.value = cart.skuNum;
        return;
      }

      try {
        await this.$store.dispatch('cart/updateCartNum', {
          skuId: cart.skuId,
          skuNum: newNum
        });
        // 重新获取购物车列表
        this.getCartList();
      } catch (error) {
        console.error('更新商品数量失败:', error);
      }
    },

    // 删除购物车商品
    async deleteCartItem(skuId) {
      try {
        await this.$store.dispatch('cart/deleteCartListByIdAsync',skuId);
      } catch (error) {
        console.error('删除商品失败:', error);
      }
    },

    // 全选/取消全选
    async toggleAllCheck() {
      const targetStatus = !this.isAllChecked ? 1 : 0;
      try {
        await this.$store.dispatch('cart/updateAllCartChecked', targetStatus);
        // 重新获取购物车列表
        this.getCartList();
      } catch (error) {
        console.error('更新全选状态失败:', error);
      }
    },

    // 删除选中商品
    async deleteSelectedItems() {
      try {
        await this.$store.dispatch('cart/deleteCartListBatchAsync');
      } catch (error) {
        console.error('删除选中商品失败:', error);
      }
    },

    // 结算
    checkout() {
      if (this.checkedCount === 0) {
        this.$message.warning('请先选择要结算的商品');
        return;
      }
      this.$router.push('/order/confirm');
    },

    // 获取购物车列表
    getCartList() {
      this.$store.dispatch("cart/getCartListAsync");
    }
  },

  mounted() {
    this.getCartList();
  }
}
</script>

<style>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }


      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>