<template>
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{floorInfo.name}}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li :class="{active:index===0}" v-for="(item,index) in floorInfo.navList">
              <a :href="item.url" data-toggle="tab">{{item.text}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(item,index) in floorInfo.keywords" :key="index">{{item}}</li>
              </ul>
              <img :src="floorInfo.imgUrl" />
            </div>
            <div class="floorBanner">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="item in floorInfo.carouselList" :key="item.id">
                  <img :src="item.imgUrl" />
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>


            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="floorInfo.recommendList[0]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="floorInfo.recommendList[1]" />
              </div>
            </div>
            <div class="split center">
              <img :src="floorInfo.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="floorInfo.recommendList[2]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="floorInfo.recommendList[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: "Floor",
  props:["floorInfo"],
  components: {
    // 将vue-awesome-swiper提供的组件注册为当前组件
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      // 配置项
      swiperOption: {
        // 显示多少屏
        slidesPerView: 1,
        // 屏之间的间隔
        spaceBetween: 1,
        // 是否循环
        loop: true,
        pagination: {
          // 分页
          el: '.swiper-pagination',
          // 点击小圆点是否进行切换
          clickable: true
        },
        autoplay: {
          // 切换的间隔时间为3秒
          delay: 3000,
          // 如果设置为true，当切换到最后一个slide时停止自动切换
          stopOnLastSlide: false,
          // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
          // 操作包括触碰(touch)，拖动，点击pagination等。
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
}
</script>