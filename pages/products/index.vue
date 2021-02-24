<template>
  <main class="ps-main">
    <div class="ps-mission-bg bg-cover">
      <div class="ps-container">
        <h3>Sản phẩm</h3>
      </div>
      <div class="ps-products" data-mh="product-listing">
        <div class="ps-product__columns row">
          <div class="col-sm-3">
            <div class="ps-shoe mb-30">
              <div class="ps-shoe__thumbnail">
                <div class="ps-badge"><span>Mới</span></div>
                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span>
                </div>
                <nuxt-link class="ps-shoe__favorite" to="#">
                  <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
                </nuxt-link>
                <img src="http://api.tvtp.vn/v0/img/uploads,5FEC4BEA98717_1609321450.jpg" alt="">
                <nuxt-link class="ps-shoe__overlay" to="products/detail"></nuxt-link>
              </div>
              <div class="ps-shoe__content">
                <div class="ps-shoe__variants">
                  <span class="ps-shoe__price"><del>350,000đ</del>336,000đ</span>
                </div>
                <div class="ps-shoe__detail"><nuxt-link class="ps-shoe__name" to="products/detail">KUN Sô cô la lúa mạch hộp 180ml thùng 48 hộp</nuxt-link>
                  <p class="ps-shoe__categories">
                    <nuxt-link to="#">Sô cô la lúa mạch</nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="ps-shoe mb-30">
              <div class="ps-shoe__thumbnail">
                <div class="ps-badge"><span>Mới</span></div>
                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span>
                </div>
                <nuxt-link class="ps-shoe__favorite" to="#">
                  <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
                </nuxt-link>
                <img src="http://api.tvtp.vn/v0/img/uploads,5FEC4BEA98717_1609321450.jpg" alt="">
                <nuxt-link class="ps-shoe__overlay" to="products/detail"></nuxt-link>
              </div>
              <div class="ps-shoe__content">
                <div class="ps-shoe__variants">
                  <span class="ps-shoe__price"><del>350,000đ</del>336,000đ</span>
                </div>
                <div class="ps-shoe__detail"><nuxt-link class="ps-shoe__name" to="products/detail">KUN Sô cô la lúa mạch hộp 180ml thùng 48 hộp</nuxt-link>
                  <p class="ps-shoe__categories">
                    <nuxt-link to="#">Sô cô la lúa mạch</nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="ps-shoe mb-30">
              <div class="ps-shoe__thumbnail">
                <div class="ps-badge"><span>Mới</span></div>
                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span>
                </div>
                <nuxt-link class="ps-shoe__favorite" to="#">
                  <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
                </nuxt-link>
                <img src="http://api.tvtp.vn/v0/img/uploads,5FEC4BEA98717_1609321450.jpg" alt="">
                <nuxt-link class="ps-shoe__overlay" to="products/detail"></nuxt-link>
              </div>
              <div class="ps-shoe__content">
                <div class="ps-shoe__variants">
                  <span class="ps-shoe__price"><del>350,000đ</del>336,000đ</span>
                </div>
                <div class="ps-shoe__detail"><nuxt-link class="ps-shoe__name" to="products/detail">KUN Sô cô la lúa mạch hộp 180ml thùng 48 hộp</nuxt-link>
                  <p class="ps-shoe__categories">
                    <nuxt-link to="#">Sô cô la lúa mạch</nuxt-link>
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="ps-shoe mb-30">
              <div class="ps-shoe__thumbnail">
                <div class="ps-badge"><span>Mới</span></div>
                <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span>
                </div>
                <nuxt-link class="ps-shoe__favorite" to="#">
                  <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
                </nuxt-link>
                <img src="http://api.tvtp.vn/v0/img/uploads,5FEC4BEA98717_1609321450.jpg" alt="">
                <nuxt-link class="ps-shoe__overlay" to="products/detail"></nuxt-link>
              </div>
              <div class="ps-shoe__content">
                <div class="ps-shoe__variants">
                  <span class="ps-shoe__price"><del>350,000đ</del>336,000đ</span>
                </div>
                <div class="ps-shoe__detail">
                  <nuxt-link class="ps-shoe__name" to="products/detail">KUN Sô cô la lúa mạch hộp 180ml thùng 48 hộp</nuxt-link>
                  <p class="ps-shoe__categories">
                    <nuxt-link to="#">Sô cô la lúa mạch</nuxt-link>
                  </p>
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
    </div>
  </main>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'products'
}
</script>
