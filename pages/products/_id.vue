<template>
  <main class="ps-main">
    <div class="ps-mission-bg bg-cover" data-background="~assets/images/background/background-2.jpg">
      <div class="container">
        <h3>Chi tiết sản phẩm</h3>
      </div>
    </div>
    <div class="ps-product--detail pt-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-lg-offset-1">
            <div class="ps-product__thumbnail">
              <div class="ps-product__image">
                <div class='item'>
                  <img :src="product.thumbnail" class='zoom' data-zoom-image="" style="width: 100%;">
                </div>
              </div>
            </div>
            <div class="ps-product__info">
              <h1 id="name_product">{{product.name}}</h1>
              <p class="ps-product__category mt-20">
                Loại: <a href="#" class="product__category">{{product.categories}}</a>
              <h2 class="ps-product__price mt-50">{{product.price}}</h2>
              <div class="ps-product__block ps-product__quickview mt-50">
                <h4>MÔ TẢ</h4>
                <div id="short_description">{{product.short_description}}</div>
              </div>
              <div class="ps-product__shopping mt-50"><a class="ps-btn mb-10" href="cart.html">Thêm vào giỏ hàng
                <font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon></a>
                <div class="ps-product__actions"><a class="mr-10" href="wishlist.html">
                  <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon></a></div>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="ps-product__content mt-50">
              <div class="tab-list">
                <tabs
                    :tabs="tabs"
                    :currentTab="currentTab"
                    :wrapper-class="'default-tabs'"
                    :tab-class="'default-tabs__item'"
                    :tab-active-class="'default-tabs__item_active'"
                    :line-class="'default-tabs__active-line'"
                    @onClick="handleClick"
                />
              </div>

            </div>
            <div class="tab-content mb-60">
              <div class="content">
                <div v-if="currentTab === 'tab1'">
                  {{product.short_description}}
                </div>
                <div v-if="currentTab === 'tab2'">
                  <p class="mb-20">1 bình luận</p>
                  <div class="ps-review">
                    <div class="ps-review__thumbnail"><img src="" alt=""></div>
                    <div class="ps-review__content">
                      <header>
                        <p>By<a href=""> Khách Hàng</a> - January 25, 2021</p>
                      </header>
                      <p>Rất ngon!</p>
                    </div>
                  </div>
                  <form class="ps-product__review" action="_action" method="post">
                    <h4>THÊM BÌNH LUẬN</h4>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                        <div class="form-group">
                          <label>Tên:<span>*</span></label>
                          <input class="form-control" type="text" placeholder="" required>
                        </div>
                        <div class="form-group">
                          <label>Email:<span>*</span></label>
                          <input class="form-control" type="email" placeholder="" required>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                        <div class="form-group">
                          <label>Bình luận:</label>
                          <textarea class="form-control" rows="6"></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
                        <div class="form-group">
                          <button class="ps-btn ps-btn--sm">Gửi<i class="fas fa-arrow-right"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ps-section ps-section--top-sales ps-owl-root pt-40 pb-80">
      <div class="container">
        <div class="ps-section__header mb-50">
          <div class="row">
            <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
              <h2 class="ps-section__title">SẢN PHẨM LIÊN QUAN</h2>
            </div>
          </div>
        </div>
        <div class="ps-section__content">
          <div class="ps-owl--colection owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000"
               data-owl-gap="30" data-owl-nav="false" data-owl-dots="false" data-owl-item="4" data-owl-item-xs="1"
               data-owl-item-sm="2" data-owl-item-md="3" data-owl-item-lg="4" data-owl-duration="1000"
               data-owl-mousedrag="on">
            <div class="ps-section__content row">
              <div class="col-sm-12 col-md-6 col-lg-3">
                <div class="ps-shoe mb-30">
                  <div class="ps-shoe__thumbnail">
                    <div class="ps-badge"><span>Mới</span></div>
                    <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span>
                    </div>
                    <nuxt-link class="ps-shoe__favorite" to="#">
                      <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
                    </nuxt-link>
                    <img src="http://api.tvtp.vn/v0/img/uploads,5FEC4BEA98717_1609321450.jpg" alt="">
                    <nuxt-link class="ps-shoe__overlay" to="product-detail.html"></nuxt-link>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <span class="ps-shoe__price"><del>350,000đ</del>336,000đ</span>
                    </div>
                    <div class="ps-shoe__detail"><nuxt-link class="ps-shoe__name" to="#">KUN Sô cô la lúa mạch hộp 180ml thùng 48 hộp</nuxt-link>
                      <p class="ps-shoe__categories">
                        <nuxt-link to="#">Sô cô la lúa mạch</nuxt-link>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3">
                <div class="ps-shoe mb-30">
                  <div class="ps-shoe__thumbnail">
                    <div class="ps-badge"><span>Mới</span></div>
                    <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span>
                    </div>
                    <nuxt-link class="ps-shoe__favorite" to="#">
                      <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
                    </nuxt-link>
                    <img src="http://api.tvtp.vn/v0/img/uploads,5FEC4BEA98717_1609321450.jpg" alt="">
                    <nuxt-link class="ps-shoe__overlay" to="product-detail.html"></nuxt-link>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <span class="ps-shoe__price"><del>350,000đ</del>336,000đ</span>
                    </div>
                    <div class="ps-shoe__detail"><nuxt-link class="ps-shoe__name" to="#">KUN Sô cô la lúa mạch hộp 180ml thùng 48 hộp</nuxt-link>
                      <p class="ps-shoe__categories">
                        <nuxt-link to="#">Sô cô la lúa mạch</nuxt-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3">
                <div class="ps-shoe mb-30">
                  <div class="ps-shoe__thumbnail">
                    <div class="ps-badge"><span>Mới</span></div>
                    <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span>
                    </div>
                    <nuxt-link class="ps-shoe__favorite" to="#">
                      <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
                    </nuxt-link>
                    <img src="http://api.tvtp.vn/v0/img/uploads,5FEC4BEA98717_1609321450.jpg" alt="">
                    <nuxt-link class="ps-shoe__overlay" to="product-detail.html"></nuxt-link>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <span class="ps-shoe__price"><del>350,000đ</del>336,000đ</span>
                    </div>
                    <div class="ps-shoe__detail"><nuxt-link class="ps-shoe__name" to="#">KUN Sô cô la lúa mạch hộp 180ml thùng 48 hộp</nuxt-link>
                      <p class="ps-shoe__categories">
                        <nuxt-link to="#">Sô cô la lúa mạch</nuxt-link>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3">
                <div class="ps-shoe mb-30">
                  <div class="ps-shoe__thumbnail">
                    <div class="ps-badge"><span>Mới</span></div>
                    <div class="ps-badge ps-badge--sale ps-badge--2nd"><span>-35%</span>
                    </div>
                    <nuxt-link class="ps-shoe__favorite" to="#">
                      <font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon>
                    </nuxt-link>
                    <img src="http://api.tvtp.vn/v0/img/uploads,5FEC4BEA98717_1609321450.jpg" alt="">
                    <nuxt-link class="ps-shoe__overlay" to="product-detail.html"></nuxt-link>
                  </div>
                  <div class="ps-shoe__content">
                    <div class="ps-shoe__variants">
                      <span class="ps-shoe__price"><del>350,000đ</del>336,000đ</span>
                    </div>
                    <div class="ps-shoe__detail"><nuxt-link class="ps-shoe__name" to="#">KUN Sô cô la lúa mạch hộp 180ml thùng 48 hộp</nuxt-link>
                      <p class="ps-shoe__categories">
                        <nuxt-link to="#">Sô cô la lúa mạch</nuxt-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "~/node_modules/axios";
import Tabs from '~/node_modules/vue-tabs-with-active-line/src/VueTabsWithActiveLine.vue';
const TABS = [{
  title: 'CHI TIẾT',
  value: 'tab1',
}, {
  title: ' BÌNH LUẬN',
  value: 'tab2',
}];
export default {
  async asyncData ({ params }) {
    let { data } = await axios.get(`http://api.tvtp.vn/v0/product-detail/${params.id}`, {
      headers: {
        Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
      }
    })
    return {
      product: data.data,
    }
  },
  components: {
    Tabs,
  },
  data: () => ({
    tabs: TABS,
    currentTab: 'tab1',
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  },
}
</script>
