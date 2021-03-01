<template>
  <main class="ps-main">
    <div class="ps-mission-bg bg-cover">
      <div class="ps-container">
        <h3>Sản phẩm</h3>
      </div>
      <div class="ps-products" data-mh="product-listing">
        <div class="ps-product__columns row" >
          <div class="col-sm-3" v-for="item in data" :key="item.id">
            <div class="ps-shoe mb-30">
              <div class="ps-shoe__thumbnail">
                <div class="ps-badge"><span>Mới</span></div>
                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span>
                </div>
                <nuxt-link class="ps-shoe__favorite" to="#">
                  <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
                </nuxt-link>
                <img :src="item.thumbnail" alt="">
                <nuxt-link class="ps-shoe__overlay" :to="{ name: 'products-id', params: { id: item.id }}"></nuxt-link>
              </div>
              <div class="ps-shoe__content">
                <div class="ps-shoe__variants">
                  <span class="ps-shoe__price">{{item.price}}đ</span>
                </div>
                <div class="ps-shoe__detail"><nuxt-link class="ps-shoe__name" to="#">{{item.name}}</nuxt-link>
                  <p class="ps-shoe__categories">
                    <nuxt-link to="#">{{item.categories}}</nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="ps-product-action">
          <div class="ps-pagination">
            <ul class="pagination">

            </ul>
          </div>
        </div>
      </div>
  </main>
</template>
<script>
import axios from "~/node_modules/axios";
export default {
  layout: 'products',
  data () {
    return {
      data: [],
      error: null
    }
  },
  async created() {
    try {
      const response = await axios.get('http://api.tvtp.vn/v0/products', {
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      });
      this.data = response.data.data;
    } catch (error) {
      this.error = error;
    }
  },
}
</script>
