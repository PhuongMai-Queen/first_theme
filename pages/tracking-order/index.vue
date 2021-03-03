<template>
  <div>
    <main class="ps-main">
         <div
        class="ps-mission-bg bg-cover"
      >
        <div class="ps-container">
          <h3>Theo dõi đơn hàng</h3>
        </div>
        </div>
        <!-- <div class="test">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 ">
                    </div>
                </div>
            </div>
        </div> -->
        <div class="ps-product--detail pt-50 pb-50">
            <div class="ps-container">
                <div class="row">
                    <div class="col-lg-10 col-md-12 col-lg-offset-1">
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
                            <div v-if="currentTab === 'tab1'">
                                <table class="table ps-cart__table border_cart__table mt-30">
                                    <tr>
                                        <td><a class="ps-product__preview" href="product-detail.html"><img class="mr-15" src="~assets/images/product/cart-preview/1.jpg" alt=""> KUN Sữa chua uống cam 110ml thùng 48 hộp</a></td>
                                        <td>436.000đ</td>
                                        <td>x1</td>
                                        <td>436.000đ</td>
                                        <td>Đang giao</td>
                                    </tr>
                                </table>
                            </div>
                            <div v-if="currentTab === 'tab2'">
                                <div class="row">
                                    <div class="col-sm-12 text-center pt-50">
                                        <img src="~assets/images/order.png">
                                        <p>Chưa có đơn hàng</p>
                                    </div>
                                </div>
                            </div>
                            <div  v-if="currentTab === 'tab3'">
                                <div class="row">
                                    <div class="col-sm-12 text-center pt-50">
                                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/50ae7a4bf7cca69985b40dfea02eddb3.png">
                                        <p>Chưa có đơn hàng</p>
                                    </div>
                                </div>
                            </div>
                            <div  v-if="currentTab === 'tab4'">
                                <table class="table ps-cart__table border_cart__table">
                                    <tr>
                                        <td><a class="ps-product__preview" href="product-detail.html"><img class="mr-15" src="~assets/images/product/cart-preview/1.jpg" alt=""> KUN Sữa chua uống cam 110ml thùng 48 hộp</a></td>
                                        <td>436.000đ</td>
                                        <td>x1</td>
                                        <td>436.000đ</td>
                                    </tr>
                                </table>
                                <div class="ps-cart__actions">
                                    <div class="ps-cart__total row">
                                        <div class="col-sm-6 text-left">
                                            <p>1 sản phẩm</p>
                                        </div>
                                        <div class="col-sm-6">
                                            <p style="text-align: end">Tổng Tiền: <strong> 436.000đ</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  v-if="currentTab === 'tab5'">
                                <div class="row">
                                    <div class="col-sm-12 text-center pt-50">
                                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/50ae7a4bf7cca69985b40dfea02eddb3.png">
                                        <p>Chưa có đơn hàng</p>
                                    </div>
                                </div>
                            </div>
                            <div  v-if="currentTab === 'tab6'">
                                <div class="row">
                                    <div class="col-sm-12 text-center pt-50">
                                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/50ae7a4bf7cca69985b40dfea02eddb3.png">
                                        <p>Chưa có đơn hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>

import Tabs from '~/node_modules/vue-tabs-with-active-line/src/VueTabsWithActiveLine.vue';
const TABS = [{
  title: 'TẤT CẢ',
  value: 'tab1',
}, {
  title: ' CHỜ XÁC NHẬN',
  value: 'tab2',
}, {
  title: ' CHỜ LẤY HÀNG',
  value: 'tab3',
}, {
  title: ' ĐANG GIAO',
  value: 'tab4',
}, {
  title: ' ĐÃ GIAO',
  value: 'tab5',
}, {
  title: ' ĐÃ HUỶ',
  value: 'tab6',
}];
export default {
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
