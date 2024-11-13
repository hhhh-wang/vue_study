<template>
  <div class="specScroll">
    <!--左按钮-->
    <a class="prev"  >&lt;</a>
    <!-- 中间可滑动区域 -->
    <div class="items">
      <div class="itemsCon" style="transition: all 0.5s ease 0s;">
        <img @click="onImageClick(image.imgUrl)"
             v-for="image in images"
             :src="image.imgUrl"
             :key="image.id"

             :class="{ 'selected': image.imgUrl === currentImage }"
        >
      </div>
    </div>
    <!--右按钮-->
    <a class="next"    >&gt;</a>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "ImageList",
  components: {
    // 将vue-awesome-swiper提供的组件注册为当前组件
    Swiper,
    SwiperSlide
  },
  props: {
    images: {
      default: () => [],
      type: Array,
      required: true
    },
    currentImage:{
      default: () => [],
      type: String,
      required: true
    }
  },
  data() {
    return {
      // 配置项
      swiperOption: {
        // 显示多少屏
        slidesPerView: 5,
        // 屏之间的间隔
        spaceBetween: 10,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      },
    }
  },
  methods: {
    onImageClick(imageUrl) {
      // Emit an event to notify the parent component about the selected image
      this.$emit('image-selected', imageUrl);
    }
  }

}
</script>

<style lang="less">
.specScroll {
  margin-top: 5px;
  width: 400px;
  overflow: hidden;

  .prev, .next {
    text-align: center;
    width: 10px;
    height: 54px;
    line-height: 54px;
    border: 1px solid #CCC;
    background: #EBEBEB;
    cursor: pointer;
  }

  .prev {
    float: left;
    margin-right: 4px;
  }

  .next {
    float: right;
  }

  .items {
    float: left;
    position: relative;
    width: 372px;
    height: 56px;
    overflow: hidden;

    .itemsCon {
      position: absolute;
      width: 9999px;
      height: 56px;
      left: 0;


      img {
        float: left;
        text-align: center;
        border: 1px solid #CCC;
        padding: 2px;
        width: 50px;
        height: 50px;
        margin-right: 20px;

      }
      .selected {
        border: 2px solid red; /* 选中的缩略图添加红色边框 */
      }
    }
  }
}
</style>