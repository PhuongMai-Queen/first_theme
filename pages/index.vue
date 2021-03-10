<template>
  <div class="padding-top-bars">
    <div class="header--sidebar"></div>
    <main class="ps-main">
        <div class="header-section">
          <div class="bg-cover" >
            <mdb-carousel :items="items" :interval="5000" controlls>
            </mdb-carousel>
          </div>
          <div class="container">
            <section class="text-center my-5 section-feature">
              <div class="row">
                <div class="col-sm-4">
                  <font-awesome-icon :icon="['fas', 'truck']"></font-awesome-icon>
                  <h4 class="font-weight-bold my-4">Miễn phí vận chuyển</h4>
                  <p class="grey-text mb-md-0 mb-5">Miễn phí với những đơn đặt hàng trên 199k</p>
                </div>
                <div class="col-sm-4">
                  <font-awesome-icon :icon="['fas', 'hand-holding-usd']"></font-awesome-icon>
                  <h4 class="font-weight-bold my-4">Chính sách hoàn trả</h4>
                  <p class="grey-text mb-md-0 mb-5">Hoàn tiền 100% trong vòng 1 tuần sau khi giao hàng</p>
                </div>
                <div class="col-sm-4">
                  <font-awesome-icon :icon="['fas', 'headset']"></font-awesome-icon>
                  <h4 class="font-weight-bold my-4">Tư vấn trực tuyến</h4>
                  <p class="grey-text mb-md-0 mb-5">Trả lời mọi thắc mắc của quý khách hàng</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="ps-section--features-product ps-section masonry-root pb-80">
          <div class="container">
            <div class="ps-section__header mb-50">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                  <h3 class="ps-section__title">Sản phẩm nổi bật </h3>
                </div>
              </div>
            </div>
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
        <div class="ps-section--offer">
          <div class="ps-column"><nuxt-link class="ps-offer" to="/products"><img
            src="~/assets/images/banner/banner-3.jpg" alt=""></nuxt-link></div>
          <div class="ps-column"><nuxt-link class="ps-offer" to="/products"><img
            src="~/assets/images/banner/banner-2.jpg" alt=""></nuxt-link></div>
        </div>
        <div class="ps-section ps-section--top-sales ps-owl-root pt-30 pb-60">
          <div class="container">
            <div class="ps-section__header mb-20">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                  <h3 class="ps-section__title">Thương hiệu</h3>
                </div>
              </div>
            </div>
            <mdb-container>
                <mdb-tab tabs color="primary" justify style="width: 30%;">
                  <mdb-tab-item :active="pillsActive==0" @click.native.prevent="pillsActive=0">KUN</mdb-tab-item>
                  <mdb-tab-item :active="pillsActive==1" @click.native.prevent="pillsActive=1">LIF</mdb-tab-item>
                  <mdb-tab-item :active="pillsActive==2" @click.native.prevent="pillsActive=2">Ba Vì</mdb-tab-item>
                </mdb-tab>
                <mdb-tab-content>
                  <mdb-tab-pane key="show1" v-if="pillsActive==0"><br/>
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
                  </mdb-tab-pane>
                  <mdb-tab-pane class="fade" key="show2" v-if="pillsActive==1"><br/>
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
                  </mdb-tab-pane>
                  <mdb-tab-pane class="fade" key="show3" v-if="pillsActive==2"><br/>
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
                  </mdb-tab-pane>
                </mdb-tab-content>
              </mdb-container>
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
        <div class="ps-section ps-home-blog pt-20">
      <div class="container">
        <div class="ps-section__header mb-50">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <h3 class="ps-section__title">Bài viết</h3>
            </div>
          </div>
        </div>
        <div class="ps-section__content">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
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
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
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
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
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
import {mdbCarousel, mdbTab, mdbTabItem, mdbTabContent, mdbTabPane, mdbContainer, mdbCol, mdbRow, mdbIcon, mdbDatatable } from 'mdbvue';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  layout: 'default',
  name: 'MyComponent',
  components: {
    VueSlickCarousel,
    mdbCarousel,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane,
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbDatatable
  },
  data() {
    return {
      pillsActive: 0,
      verticalWithin: 0,
      items: [
        {
          img: true,
          src: require('../assets/images/slider/slide-1.jpg')
        },
        {
          img: true,
          src: require('../assets/images/slider/slide-2.jpg')
        },
        {
          img: true,
          src: require('../assets/images/slider/slide-3.jpg')
        }
      ]
    };
  }
}

</script>
