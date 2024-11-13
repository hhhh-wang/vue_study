<template>
  <div class="preview">
    <vue-photo-zoom-pro
        :out-zoomer="true"
        :width="200"
        :height="200"
        :high-url="skuDefaultImg">
      <img :src="skuDefaultImg" />
    </vue-photo-zoom-pro>
  </div>
</template>

<script>
import VuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'
export default {
  name: "Zoom",
  props: {
    // 从父组件接收 `skuDefaultImg` 参数
    skuDefaultImg: {
      type: String,
      required: true, // 确保父组件提供这个属性
      default: '' // 可以设定默认值
    }
  },
  components: {
    VuePhotoZoomPro,
  }
}
</script>

<style lang="less" scoped>
.preview {
  width: 400px;
  height: 400px;
  border: 1px solid #DFDFDF;
    img {
      width: 100%;
    }
}
</style>