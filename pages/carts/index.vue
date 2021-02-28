<template>
  <div class="container-fluid">
    <div class="row content">
      <div class="col-sm-9">
        <h2><small>Giỏ hàng (1 sản phẩm )</small></h2>
        <hr>
        <div class="flex-container" v-for="cart in carts" :key="cart._id">
          <div style="flex-grow: 1"><img :src="carts.thumnail"></div>
          <div style="flex-grow: 8" class="">
            <div class="flex-item">
              <h4>{{ carts.name }} </h4>
            </div>
            <div class="flex-item">
              <span>Đơn giá :</span><span id="coins">{{ carts.price }}</span>
            </div>
            <div class="grid-container">
              <div class="grid-item "><a href="#">Xóa </a></div>
              <div class="grid-item "><a href="#">Để dành mua sau </a></div>
            </div>
          </div>
          <div class="flex-item">
            <div class="buttons_added">
              <input class="minus is-form" type="button" value="-">
              <input aria-label="quantity" class="input-qty" min="" name="" type="number" value="1">
              <input class="plus is-form" type="button" value="+">
            </div>
          </div>
        </div>
        <hr>
      <a href="/carts/checkout"><button type="button" class="btn btn-danger">Tiến hành đặt hàng</button></a>
        <button type="button" class="btn btn-primary">Tiếp tục mua hàng</button>
      </div>
      <div class="col-sm-3 sidenav">
        <form action="#">
          <span>Mã giảm giá </span>
          <div class="form-container">
            <input type="email" class="">
            <button type="button" class="btn btn-info">Áp dụng</button>
          </div>
        </form>
        <div class="row cl-container " style="height: 200px">
          <div>
            <h4> Thông tin hóa đơn </h4>
          </div>
          <hr>
          <div class="bill-container">
            <span>Tạm tính </span>
          </div>
          <hr>
          <div class="bill-container">
            <span>Giảm giá </span>
          </div>
          <hr>
          <div class="bill-container">
            <span>Thành tiền</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carts: {
        _id: 1,
        name: "Thùng 48 Hộp Sữa Tươi Tiệt Trùng Vinamilk 100% Có Đường (180ml)",
        price: '299,0000',
        thumnail: 'https://salt.tikicdn.com/cache/w1200/ts/product/02/a7/3f/4627352ff484ec634884f7aa27e51291.jpg'
      }
    }
  }
}
</script>
