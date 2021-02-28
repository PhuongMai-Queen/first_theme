<template>
  <div class="container-fluid">
    <div class="row content">
      <div class="col-sm-9 ">
    <div class="ifo-container">
      <h2 class="text-left">Thông tin giao hàng </h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Địa chỉ Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="">Họ và tên </label>
          <input type="text" class="form-control" id="" placeholder="Họ và tên ">
        </div>
        <div class="form-group">
          <label for="">Số điện thoại</label>
          <input type="text" class="form-control" id="" placeholder="Số điện thoại">
        </div>
        <div class="form-group">
          <label for="">Địa chỉ nhận hàng </label>
          <textarea class="form-control" id="" placeholder="Vui lòng điền CHÍNH XÁC'tầng, số nhà, đường' để tránh trường hợp đơn hàng bị hủy ngoài ý muốn: "></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Tiếp tục </button>
      </form>
    </div>
      </div>
      <div class="col-sm-3 sidenav">
          <div class="no-margin-table" style="width: 95%; float: right;">
            <table class="table" style="color: #333">
              <thead>
              <tr>
                <th colspan="3" style="font-weight: 600;">Thông tin đơn hàng</th>
              </tr>
              </thead>
              <tbody>
              <tr style="background: #fafafa; color: #333;" class="text-transform font-weight-600">
                <td>Sản phẩm</td>
                <td class="text-center">Số lượng</td>
                <td class="text-center">Giá</td>
              </tr>
              <tr>
                <td></td>
                <td class="text-center">1</td>
                <td class="text-center">299,000 vnđ</td>
              </tr>

              <tr style="background: #fafafa">
                <td colspan="2">Tạm tính</td>
                <td class="text-center"></td>
              </tr>
              <tr style="background: #fafafa">
                <td colspan="2" class="font-weight-600">Thành tiền<br/><span style="font-weight: 100; font-style: italic;">(Tổng số tiền thanh toán)</span></td>
                <td class="text-center">299,000 vnđ</td>
              </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>
