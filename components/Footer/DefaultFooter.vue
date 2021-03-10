<template>
  <footer>
    <div class="ps-subscribe">
      <div class="container">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div cclass="mb-5">
              <h3 class="text-center"><i class="fa fa-envelope"></i>Đăng ký nhận bản tin</h3>
              <p>Đừng bỏ lỡ thông báo mới nhất và chương trình giảm giá <span>10%</span> khi mua hàng lần đầu
                tiên.</p>
            </div>
            <form class="ps-subscribe__form" action="do_action" method="post">
              <input class="form-control" type="text" placeholder="">
              <button>Đăng ký ngay</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="ps-footer bg--cover">
      <div class="ps-footer__content">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12 ">
              <aside class="ps-widget--footer ps-widget--info">
                <header><nuxt-link class="ps-logo" to="index.html">LOGO</nuxt-link>
                  <h3 class="ps-widget__title">Thông tin liên hệ</h3>
                </header>
                <footer>
                  <p><strong>Address:</strong> 288 Đường Nguyễn Văn Linh, Hưng Lợi, Ninh Kiều, Cần Thơ</p>
                  <p><strong>Phone:</strong> +842927300468</p>
                  <p><strong>Email:</strong> <nuxt-link to='mailto:caodang@fpt.edu.vn'>caodang@fpt.edu.vn</nuxt-link>
                  </p>
                </footer>
              </aside>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12 ">
              <aside class="ps-widget--footer ps-widget--link">
                <header>
                  <h3 class="ps-widget__title">Bộ sưu tập</h3>
                </header>
                <footer>
                  <ul class="ps-list--line">
                    <li><nuxt-link to="#">Sản phẩm mới</nuxt-link></li>
                    <li><nuxt-link to="#">Sản phẩm nổi bật</nuxt-link></li>
                    <li><nuxt-link to="#">Sản phẩm bán chạy</nuxt-link></li>
                    <li><nuxt-link to="#">Sản phẩm khuyến mãi</nuxt-link></li>
                  </ul>
                </footer>
              </aside>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12 ">
              <aside class="ps-widget--footer ps-widget--link">
                <header>
                  <h3 class="ps-widget__title">Tài khoản</h3>
                </header>
                <footer>
                  <ul class="ps-list--line">
                    <li><nuxt-link to="#">Quản lý tài khoản</nuxt-link></li>
                    <li><nuxt-link to="#">Wishlist</nuxt-link></li>
                    <li><nuxt-link to="#">Giỏ hàng</nuxt-link></li>
                    <li><nuxt-link to="#">Theo dõi đơn hàng</nuxt-link></li>
                  </ul>
                </footer>
              </aside>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 ">
              <aside class="ps-widget--footer ps-widget--link">
                <header>
                  <h3 class="ps-widget__title">Chính sách</h3>
                </header>
                <footer>
                  <ul class="ps-list--line">
                    <li><nuxt-link to="#">Chính sách đổi - trả - hoàn tiền</nuxt-link></li>
                    <li><nuxt-link to="#">Chính sách khách sỉ</nuxt-link></li>
                    <li><nuxt-link to="#">Chính sách vận chuyển</nuxt-link></li>
                    <li><nuxt-link to="#">Chính sách thanh toán và xuất HĐ</nuxt-link></li>
                  </ul>
                </footer>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="ps-footer__copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
              <p>&copy; 2021 Bản quyền thuộc về<nuxt-link to="#"> Team Building Themes</nuxt-link></p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
              <ul class="ps-social">
                <li><nuxt-link to="#"><i class="fab fa-facebook-f"></i></nuxt-link></li>
                <li><nuxt-link to="#"><i class="fab fa-google-plus-g"></i></nuxt-link></li>
                <li><nuxt-link to="#"><i class="fab fa-twitter"></i></nuxt-link></li>
                <li><nuxt-link to="#"><i class="fab fa-instagram"></i></nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
