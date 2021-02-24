<template>
  <div class="header-services">
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>
        <p class="ps-service"><font-awesome-icon :icon="['fas', 'truck']"></font-awesome-icon><strong>Miễn phí vận chuyển</strong>: Miễn phí với những đơn đặt hàng trên 199k</p>
      </div>
      <div>
        <p class="ps-service"><font-awesome-icon :icon="['fas', 'hand-holding-usd']"></font-awesome-icon><strong>Chính sách hoàn trả</strong>: Hoàn tiền 100% trong vòng 1 tuần sau khi giao hàng</p>
      </div>
      <div>
        <p class="ps-service"><font-awesome-icon :icon="['fas', 'headset']"></font-awesome-icon><strong>Tư vấn trực tuyến</strong>: Trả lời mọi thắc mắc của quý khách hàng</p>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel},
}
</script>
