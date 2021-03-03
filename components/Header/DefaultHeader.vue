<template>
  <header class="header">
    <div class="header__top">
      <div class="container-fluid">
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
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2 navigation__column left">
            <div class="header__logo"><nuxt-link class="ps-logo text-success" to="index.html">LOGO</nuxt-link></div>
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
              <li class="menu-item"><nuxt-link to="/about">Về chúng tôi</nuxt-link></li>
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
</template>


