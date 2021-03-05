<template>
  <main class="ps-main">
    <div class="ps-mission-bg bg-cover" data-background="assets/images/background/background-2.jpg">
      <div class="ps-container">
        <h3>Wishlist</h3>
      </div>
    </div>
    <div class="ps-content pt-80 pb-80">
      <div class="ps-container">
        <div class="ps-cart-listing ps-table--whishlist">
          <table class="table ps-cart__table">
            <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Chi Tiết sản phẩm</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><a class="ps-product__preview" href="product-detail.html"><img class="mr-15" src="http://api.tvtp.vn/v0/img/uploads,5FEC4BEA98717_1609321450.jpg" width="40%"></a></td>
              <td>KUN Sô cô la lúa mạch hộp 110ml thùng 48 hộp</td>
              <td>218,000đ</td>
              <td><a class="ps-product-link" href="product-detail.html">Xem chi tiết</a></td>
              <td><div class="ps-remove"></div></td>
            </tr>
            <tr>
              <td><a class="ps-product__preview" href="product-detail.html"><img class="mr-15" src="http://api.tvtp.vn/v0/img/uploads,5FEC5583DBBBE_1609323907.jpg" width="40%"></a></td>
              <td>Ba Vì Sữa chua ăn có đường 100gr thùng 48 hộp</td>
              <td>254,000đ</td>
              <td><a class="ps-product-link" href="product-detail.html">Xem chi tiết</a></td>
              <td><div class="ps-remove"></div></td>
            </tr>
            <tr>
              <td><a class="ps-product__preview" href="product-detail.html"><img class="mr-15" src="http://api.tvtp.vn/v0/img/uploads,5FB8AB4EBFA88_1605937998.png" width="40%"></a></td>
              <td>KUN sữa chua uống kem dâu chai 90ml thùng 48 chai</td>
              <td>182,000đ</td>
              <td><a class="ps-product-link" href="product-detail.html">Xem chi tiết<t></t></a></td>
              <td><div class="ps-remove"></div></td>
            </tr>
            </tbody>
          </table>
          <div class="ps-cart__actions">
            <div class="form-inline">
              <div class="form-group">
                <button class="ps-btn ps-btn--gray">Tiếp Tục Mua Sắm</button>
              </div>
              <div class="form-group">
                <button class="ps-btn ps-btn--gray">Giỏ Hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  layout: 'products'
}
</script>

