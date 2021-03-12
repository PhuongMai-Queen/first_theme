<template>
  <div>
    <div class="header--sidebar"></div>
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
              <p>288 Đường Nguyễn Văn Linh, Hưng Lợi, Ninh Kiều, Cần Thơ  -  Hotline: +842927300468</p>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
              <div class="header__actions"><nuxt-link to="/login/">Đăng Nhập</nuxt-link></div>
              <div class="header__actions"><nuxt-link to="/register/">Đăng Ký</nuxt-link></div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navigation">
        <div class="container">
          <div class="row">
            <div class="col-sm-2 navigation__column left">
              <div class="header__logo"><nuxt-link class="ps-logo text-success" to="/">LOGO</nuxt-link></div>
            </div>
            <div class="col-sm-7 navigation__column center">
              <ul class="main-menu menu">
                <li class="menu-item dropdown"> <nuxt-link to="/">Trang chủ</nuxt-link></li>
                <li class="menu-item menu-item-has-children has-mega-menu">
                  <nuxt-link to="#">Sản phẩm <i class="fas fa-caret-down"></i></nuxt-link>
                  <div class="mega-menu">
                    <div class="mega-wrap">
                      <div class="mega-column">
                        <h4 class="mega-heading">Bộ sưu tập</h4>
                        <ul class="mega-item">
                          <li><nuxt-link to="products">Tất cả</nuxt-link></li>
                          <li><nuxt-link to="#">Sản phẩm mới</nuxt-link></li>
                          <li><nuxt-link to="#">Sản phẩm nổi bật</nuxt-link></li>
                          <li><nuxt-link to="#">Sản phẩm bán chạy</nuxt-link></li>
                          <li><nuxt-link to="#">Sản phẩm khuyến mãi</nuxt-link></li>
                        </ul>
                      </div>
                      <div class="mega-column">
                        <h4 class="mega-heading">Loại sản phẩm</h4>
                        <ul class="mega-item">
                          <li><nuxt-link to="products">Tất cả</nuxt-link></li>
                          <li><nuxt-link to="#">Socola lúa mạch</nuxt-link></li>
                          <li><nuxt-link to="#">Sữa chua ăn</nuxt-link></li>
                          <li><nuxt-link to="#">Sữa chua uống</nuxt-link></li>
                          <li><nuxt-link to="#">Sữa tươi</nuxt-link></li>
                          <li><nuxt-link to="#">Sữa bắp</nuxt-link></li>
                          <li><nuxt-link to="#">Sữa trái cây</nuxt-link></li>
                          <li><nuxt-link to="#">Sữa túi</nuxt-link></li>
                          <li><nuxt-link to="#">Sữa chai</nuxt-link></li>
                        </ul>
                      </div>
                      <div class="mega-column">
                        <h4 class="mega-heading">THƯƠNG HIỆU</h4>
                        <ul class="mega-item">
                          <li><nuxt-link to="products">Tất cả</nuxt-link></li>
                          <li><nuxt-link to="#">Kun</nuxt-link></li>
                          <li><nuxt-link to="#">LIF</nuxt-link></li>
                          <li><nuxt-link to="#">Ba Vì</nuxt-link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="menu-item"><nuxt-link to="/about">Giới thiệu</nuxt-link></li>
                <li class="menu-item dropdown"><nuxt-link to="/blogs">Blog</nuxt-link></li>
                <li class="menu-item menu-item-has-children dropdown"><nuxt-link to="#">Page <i class="fas fa-caret-down"></i></nuxt-link>
                  <ul class="sub-menu">
                    <li class="menu-item"><nuxt-link to="/wishlist">Wishlist</nuxt-link></li>
                    <li class="menu-item"><nuxt-link to="/carts">Giỏ hàng</nuxt-link></li>
                    <li class="menu-item"><nuxt-link to="/carts/checkout">Thanh toán</nuxt-link></li>
                    <li class="menu-item"><nuxt-link to="/account/">Quản lý tài khoản</nuxt-link></li>
                    <li class="menu-item"><nuxt-link to="/tracking-order/">Theo dõi đơn hàng</nuxt-link></li>
                  </ul>
                </li>
                <li class="menu-item"><nuxt-link to="/contact-us">Liên hệ</nuxt-link></li>
              </ul>
            </div>
            <div class="col-sm-3 navigation__column right">
              <form class="ps-search--header" action="do_action" method="post">
                <input class="form-control" type="text" placeholder="Tìm kiếm...">
                <button><font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon></button>
              </form>
              <div class="ps-cart">
                <nuxt-link class="ps-cart__toggle" to="#"><span><i>6</i></span>
                  <font-awesome-icon :icon="['fab', 'opencart']"></font-awesome-icon>
                </nuxt-link>
                <div class="ps-cart__listing">
                  <div class="ps-cart__content">
                    <div class="ps-cart-item"><nuxt-link class="ps-cart-item__close" to="#"></nuxt-link>
                      <div class="ps-cart-item__thumbnail"><nuxt-link to="product-detail.html"></nuxt-link><img src="http://api.tvtp.vn/v0/img/uploads,5FEC524B4FCC6_1609323083.jpg" alt=""></div>
                      <div class="ps-cart-item__content"><nuxt-link class="ps-cart-item__title" to="product-detail.html">KUN SỮA CÓ ĐƯỜNG 180ML THÙNG 48 HỘP</nuxt-link>
                        <p><span>Số lượng:<i>2</i></span><span>Tổng tiền:<i>672.000đ</i></span></p>
                      </div>
                    </div>
                    <div class="ps-cart-item"><nuxt-link class="ps-cart-item__close" to="#"></nuxt-link>
                      <div class="ps-cart-item__thumbnail"><nuxt-link to="product-detail.html"></nuxt-link><img src="http://api.tvtp.vn/v0/img/uploads,5FC5C57029F7A_1606796656.jpg" alt=""></div>
                      <div class="ps-cart-item__content"><nuxt-link class="ps-cart-item__title" to="product-detail.html">KUN SỮA CHUA UỐNG KEM DÂU TÚI 110ML THÙNG 24 TÚI</nuxt-link>
                        <p><span>Số lượng:<i>2</i></span><span>Tổng tiền:<i>232.000đ</i></span></p>
                      </div>
                    </div>
                    <div class="ps-cart-item"><nuxt-link class="ps-cart-item__close" to="#"></nuxt-link>
                      <div class="ps-cart-item__thumbnail"><nuxt-link to="product-detail.html"></nuxt-link><img src="http://api.tvtp.vn/v0/img/uploads,5FEC5583E237B_1609323907.jpg" alt=""></div>
                      <div class="ps-cart-item__content"><nuxt-link class="ps-cart-item__title" to="product-detail.html">KUN SỮA CHUA ĂN VỊ DÂU 75GR THÙNG 48 HỘP</nuxt-link>
                        <p><span>Số lượng:<i>2</i></span><span>Tổng tiền:<i>564.000đ</i></span></p>
                      </div>
                    </div>
                  </div>
                  <div class="ps-cart__total">
                    <p>Tổng số lượng: <span>6</span></p>
                    <p>Tổng số tiền: <span>1.468.000đ</span></p>
                  </div>
                  <div class="ps-cart__footer">
                    <nuxt-link class="ps-btn" to="/carts">Giỏ hàng</nuxt-link>
                    <nuxt-link class="ps-btn" to="/carts/pays">Thanh toán</nuxt-link>
                  </div>
                </div>
              </div>
              <div class="menu-toggle"><span></span></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <nav class="fixed w-full p-6 bg-transparent">
      <div class="flex items-center justify-between">
        <div>
          <div class="col-sm-2 navigation__column left">
            <div class="header__logo"><nuxt-link class="ps-logo text-success" to="/">LOGO</nuxt-link></div>
          </div>
        </div>
        <div class="md:hidden">
          <button @click="drawer">
            <svg
              class="h-8 w-8 fill-current text-black"
              fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0">
          <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
          </div>
        </transition>
        <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
          <div class="close">
            <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
              <svg
                class="w-6 h-6"
                fill="none" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
          <Tailwind />
        </span>

          <ul class="divide-y font-sans">
            <li>
              <form class="ps-search--header" action="do_action" method="post">
                <input class="form-control" type="text" placeholder="Tìm kiếm...">
                <button><font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon></button>
              </form>
            </li>
            <li><nuxt-link to="/" @click="isOpen = false" class="my-4 inline-block">Trang chủ</nuxt-link></li>
            <li><nuxt-link to="/products" @click="isOpen = false" class="my-4 inline-block">Sản phẩm</nuxt-link></li>
            <li><nuxt-link to="/about" @click="isOpen = false" class="my-4 inline-block">Giới thiệu</nuxt-link></li>
            <li><nuxt-link to="/blogs" @click="isOpen = false" class="my-4 inline-block">Blog</nuxt-link></li>
            <li>
              <b-button v-b-toggle.collapse-1 class="my-4 inline-block">
                <a href="/products">Page</a>
              </b-button>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <ul>
                    <li><nuxt-link to="/wishlist">Wishlist</nuxt-link></li>
                    <li><nuxt-link to="/carts">Giỏ hàng</nuxt-link></li>
                    <li><nuxt-link to="/carts/checkout">Thanh toán</nuxt-link></li>
                    <li><nuxt-link to="/account">Quản lý tài khoản</nuxt-link></li>
                    <li><nuxt-link to="/tracking-order">Theo dõi đơn hàng</nuxt-link></li>
                  </ul>
                </b-card>
              </b-collapse>
            </li>
            <li><nuxt-link to="/contact-us" @click="isOpen = false" class="my-4 inline-block">Liên hệ</nuxt-link></li>
            <li><nuxt-link to="/register" @click="isOpen = false" class="my-4 inline-block">Đăng ký</nuxt-link></li>
            <li><nuxt-link to="/login" @click="isOpen = false" class="my-4 inline-block">Đăng nhập</nuxt-link></li>
          </ul>
        </aside>
      </div>
    </nav>
  </div>
</template>

<script>
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle } from 'mdbvue';
export default {
  components: {
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>
