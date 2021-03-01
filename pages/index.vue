<template>
  <div>
    <div class="header--sidebar"></div>
      <main class="ps-main">
        <div class="bg-cover" >
          <VueSlickCarousel :arrows="true" :dots="true">
            <div class="active">
              <img src="~/assets/images/slider/slide-1.jpg" style="width:100%;">
            </div>
            <div>
              <img src="~/assets/images/slider/slide-2.jpg" style="width:100%">
            </div>
            <div>
              <img src="~/assets/images/slider/slide-3.jpg" style="width:100%">
            </div>
          </VueSlickCarousel>
        </div>
        <div class="ps-section--features-product ps-section masonry-root pb-80 pt-30">
          <div class="ps-container">
            <div class="ps-section__header mb-50">
              <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                  <h3 class="ps-section__title">Sản phẩm nổi bật </h3>
                </div>
              </div>
            </div>
            <div class="ps-section__content row">
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
        <div class="ps-section--offer">
          <div class="ps-column"><nuxt-link class="ps-offer" to="/products"><img
            src="~/assets/images/banner/banner-3.jpg" alt=""></nuxt-link></div>
          <div class="ps-column"><nuxt-link class="ps-offer" to="/products"><img
            src="~/assets/images/banner/banner-2.jpg" alt=""></nuxt-link></div>
        </div>
        <div class="ps-section ps-section--top-sales ps-owl-root pt-30">
          <div class="ps-container">
            <div class="ps-section__header mb-50">
              <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                  <h3 class="ps-section__title">Sản phẩm khuyến mãi </h3>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <div class="ps-owl-actions"><nuxt-link class="ps-prev" to="#"><font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon> Trước</nuxt-link>
                    <nuxt-link class="ps-next" to="#">Sau <font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon></nuxt-link></div>
                </div>
              </div>
            </div>
            <div class="ps-section__content">
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
        <div class="ps-home-testimonial bg--parallax" data-background="~/assets/images/background/background-1.jpg">
          <div class="container">
            <VueSlickCarousel :arrows="true" :dots="true">
              <div class="ps-testimonial">
                <header>
                  <p><strong>QUY TRÌNH SẢN XUẤT ĐẠT CHUẨN AN TOÀN</strong></p>
                </header>
                <footer>
                  <p>“Sữa tươi tiệt trùng LiF 100% từ thung lũng Goulburn Úc, giàu canxi và đạm sữa tự nhiên với hương vị thơm ngon từ sữa tươi tự nhiên Úc.“</p>
                </footer>
              </div>
              <div class="ps-testimonial">
                <header>
                  <p><strong>SỨ MỆNH</strong></p>
                </header>
                <footer>
                  <p>“Từ trang trại, nhà máy, đến dòng sữa thơm ngon cuối cùng <br>đều đạt tiêu chuẩn organic nghiêm ngặt của Châu Âu.“</p>
                </footer>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
        <div class="ps-section ps-home-blog pt-80 pb-80">
      <div class="ps-container">
        <div class="ps-section__header mb-80">
          <h2 class="ps-section__title" >Tin tức </h2>
          <div class="ps-section__action"><nuxt-link class="ps-morelink text-uppercase" to="#">Xem tất cả bài viết
            <font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon></nuxt-link></div>
        </div>
        <div class="ps-section__content">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
              <div class="ps-post">
                <div class="ps-post__thumbnail"><nuxt-link class="ps-post__overlay" to="/blogs/"></nuxt-link><img
                  src="~/assets/images/blog/blog-1.jpg" alt=""></div>
                <div class="ps-post__content"><nuxt-link class="ps-post__title" to="/blogs/">Quy trình sản xuất đạt chuẩn an toàn </nuxt-link>
                  <p class="ps-post__meta"><span>Đăng bởi:<nuxt-link class="mr-5"
                                                             to="/blogs/">Admin </nuxt-link></span> -<span
                    class="ml-5">Jan 10, 2021</span></p>
                  <p>Thay vì hoang mang khi dịch bệnh trở lại, hãy cùng tuân thủ các quy tắc vệ sinh phòng dịch, đồng thời lựa
                    chọn thực phẩm đảm bảo dinh dưỡng cân bằng mỗi ngày...</p><nuxt-link class="ps-morelink" to="/blogs/">Đọc thêm
                    <font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon></nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
              <div class="ps-post">
                <div class="ps-post__thumbnail"><nuxt-link class="ps-post__overlay" to="/blogs/"></nuxt-link><img
                  src="~/assets/images/blog/blog-1.jpg" alt=""></div>
                <div class="ps-post__content"><nuxt-link class="ps-post__title" to="/blogs/">Quy trình sản xuất đạt chuẩn an toàn </nuxt-link>
                  <p class="ps-post__meta"><span>Đăng bởi:<nuxt-link class="mr-5"
                                                             to="/blogs/">Admin </nuxt-link></span> -<span
                    class="ml-5">Jan 10, 2021</span></p>
                  <p>Thay vì hoang mang khi dịch bệnh trở lại, hãy cùng tuân thủ các quy tắc vệ sinh phòng dịch, đồng thời lựa
                    chọn thực phẩm đảm bảo dinh dưỡng cân bằng mỗi ngày...</p><nuxt-link class="ps-morelink" to="/blogs/">Đọc thêm
                    <font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon></nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
              <div class="ps-post">
                <div class="ps-post__thumbnail"><nuxt-link class="ps-post__overlay" to="/blogs/"></nuxt-link><img
                  src="~/assets/images/blog/blog-1.jpg" alt=""></div>
                <div class="ps-post__content"><nuxt-link class="ps-post__title" to="/blogs/">Quy trình sản xuất đạt chuẩn an toàn </nuxt-link>
                  <p class="ps-post__meta"><span>Đăng bởi:<nuxt-link class="mr-5"
                                                             to="blog.html">Admin </nuxt-link></span> -<span
                    class="ml-5">Jan 10, 2021</span></p>
                  <p>Thay vì hoang mang khi dịch bệnh trở lại, hãy cùng tuân thủ các quy tắc vệ sinh phòng dịch, đồng thời lựa
                    chọn thực phẩm đảm bảo dinh dưỡng cân bằng mỗi ngày...</p>
                  <nuxt-link class="ps-morelink" to="/blogs/">
                    Đọc thêm<font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon>
                  </nuxt-link>
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  layout: 'default',
  name: 'MyComponent',
  components: { VueSlickCarousel},
}

</script>
