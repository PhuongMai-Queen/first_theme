<template>
  <main class="ps-main">
    <div class="ps-mission-bg bg-cover" data-background="~assets/images/background/background-2.jpg">
      <div class="ps-container">
        <h3>Thanh toán</h3>
      </div>
    </div>
    <div class="ps-checkout pt-80 pb-80">
      <div class="ps-container">
        <form class="ps-checkout__form" action="do_action" method="post">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
              <div class="ps-checkout__billing">
                <h3>Thông Tin Thanh Toán</h3>
                <div class="form-group form-group--inline">
                  <label>Họ và Tên<span>*</span>
                  </label>
                  <input class="form-control" type="text">
                </div>
                <div class="form-group form-group--inline">
                  <label>Email<span>*</span>
                  </label>
                  <input class="form-control" type="email">
                </div>
                <div class="form-group form-group--inline">
                  <label>Số Điện Thoại<span>*</span>
                  </label>
                  <input class="form-control" type="text">
                </div>
                <div class="form-group form-group--inline">
                  <label>Địa Chỉ Nhà<span>*</span>
                  </label>
                  <input class="form-control" type="text">
                </div>
                <div class="form-group">
                  <div class="ps-checkbox">
                    <input class="form-control" type="checkbox" id="cb01">
                    <label for="cb01">Tạo tài khoản mới?</label>
                  </div>
                </div>
                <h3 class="mt-40"> Thông tin bổ dung</h3>
                <div class="form-group form-group--inline textarea">
                  <label>Ghi chú về đơn hàng</label>
                  <textarea class="form-control" rows="5" placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn..."></textarea>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
              <div class="ps-checkout__order">
                <header>
                  <h3>Đơn Hàng Của Bạn</h3>
                </header>
                <div class="content">
                  <table class="table ps-checkout__products">
                    <thead>
                    <tr>
                      <th class="text-uppercase">Sản phẩm</th>
                      <th class="text-uppercase">Tổng</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>KUN SỮA CÓ ĐƯỜNG 180ML THÙNG 48 HỘP</td>
                      <td>672.000đ</td>
                    </tr>
                    <tr>
                      <td>	KUN SỮA CHUA UỐNG KEM DÂU TÚI 110ML THÙNG 24 TÚI</td>
                      <td>116,000đ</td>
                    </tr>
                    <tr>
                      <td>KUN SỮA CHUA ĂN VỊ DÂU 75GR THÙNG 48 HỘP</td>
                      <td>282,000đ</td>
                    </tr>
                    <tr>
                      <td>Tổng Thanh Toán</td>
                      <td>1.468.000đ</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <footer>
                  <h3>Phương Thức Thanh Toán</h3>
                  <div class="form-group cheque">
                    <div class="ps-radio">
                      <input class="form-control" type="radio" id="rdo01" name="payment" checked>
                      <label for="rdo01">Trả tiền mặt khi nhận hàng</label>
                      <p>Khi nhận hàng trực tiếp rồi mới thanh toán tiền cho shipper.</p>
                    </div>
                  </div>
                  <div class="form-group paypal">
                    <div class="ps-radio ps-radio--inline">
                      <input class="form-control" type="radio" name="payment" id="rdo02">
                      <label for="rdo02">Thẻ tín dụng</label>
                    </div>
                    <ul class="ps-payment-method">
                      <li><a href="#"><img src="~assets/images/payment/1.png" alt=""></a></li>
                      <li><a href="#"><img src="~assets/images/payment/2.png" alt=""></a></li>
                      <li><a href="#"><img src="~assets/images/payment/3.png" alt=""></a></li>
                    </ul>
                    <button class="ps-btn ps-btn--fullwidth">Đặt Hàng<i class="fas fa-arrow-right"></i></button>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
