<template>
  <main class="ps-main">
    <div class="ps-mission-bg bg-cover" data-background="assets/images/background/background-2.jpg">
      <div class="ps-container">
        <h3>Giỏ hàng</h3>
      </div>
    </div>
    <div class="ps-content pt-80 pb-80">
      <div class="ps-container">
        <div class="ps-cart-listing">
          <table class="table ps-cart__table">
            <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>giá</th>
              <th>Số Lượng</th>
              <th>Tổng</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><a href="product-detail.html"><img class="mr-15" src="http://api.tvtp.vn/v0/img/uploads,5FEC524B4FCC6_1609323083.jpg"></a></td>
              <td><a class="ps-product__preview" href="product-detail.html">KUN sữa có đường 180ml thùng 48 hộp</a></td>
              <td>336,000đ</td>
              <td class="input-amount">
                <div class="form-group--number">
                  <button class="minus"><span>-</span></button>
                  <input class="form-control" type="text" value="2">
                  <button class="plus"><span>+</span></button>
                </div>
              </td>
              <td>672.000đ</td>
              <td>
                <div class="ps-remove"></div>
              </td>
            </tr>
            <tr>
              <td><a href="product-detail.html"><img class="mr-15" src="http://api.tvtp.vn/v0/img/uploads,5FC5C57029F7A_1606796656.jpg"></a></td>
              <td><a class="ps-product__preview" href="product-detail.html">KUN sữa chua uống kem dâu túi 110ml thùng 24 túi</a></td>
              <td>116.000đ</td>
              <td>
                <div class="form-group--number">
                  <button class="minus"><span>-</span></button>
                  <input class="form-control" type="text" value="2">
                  <button class="plus"><span>+</span></button>
                </div>
              </td>
              <td>232,000đ</td>
              <td>
                <div class="ps-remove"></div>
              </td>
            </tr>
            <tr>
              <td><a href="product-detail.html"><img class="mr-15" src="http://api.tvtp.vn/v0/img/uploads,5FEC5583E237B_1609323907.jpg"></a></td>
              <td><a class="ps-product__preview" href="product-detail.html">KUN sữa chua ăn vị dâu 75gr thùng 48 hộp</a></td>
              <td>282,000đ</td>
              <td>
                <div class="form-group--number">
                  <button class="minus"><span>-</span></button>
                  <input class="form-control" type="text" value="2">
                  <button class="plus"><span>+</span></button>
                </div>
              </td>
              <td>564,000đ</td>
              <td>
                <div class="ps-remove"></div>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="ps-cart__actions">
            <div class="ps-cart__promotion">
              <div class="form-group">
                <div class="ps-form--icon"><i class="fa fa-angle-right"></i>
                  <input class="form-control" type="text" placeholder="Mã Giảm Giá">
                </div>
              </div>
              <div class="form-inline">
                <div class="form-group">
                  <button class="ps-btn ps-btn--gray">Tiếp Tục Mua Sắm</button>
                </div>
                <div class="form-group">
                  <button class="ps-btn ps-btn--gray">Cập Nhật Giỏ Hàng</button>
                </div>
              </div>
            </div>
            <div class="ps-cart__total">
              <h3>Tổng Tiền: <span> 1.468.000đ</span></h3><a class="ps-btn" href="/carts/pays/">Tiến Hành Thanh Toán<i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

