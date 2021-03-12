<template>
  <div>
    <main class="ps-main">
        <div
        class="ps-mission-bg bg-cover"
      >
        <div class="container">
          <h3>Quản Lí Tài Khoản</h3>
        </div>
      </div>
        <div class="container ">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <div class="card card-user">
                        <div class="card-body">
                            <div class="author">
                                <div class="block block-one"></div>
                                <div class="block block-two"></div>
                                <div class="block block-three"></div>
                                <div class="block block-four"></div>
                                <a>
                                    <img class="avatar" src="~assets/images/user/user.png">
                                    <h5 class="title">Khách Hàng</h5>
                                </a>
                            </div>
                            <input type="file" class="btn btn-icon btn-round btn-facebook" style="margin: 0 auto;">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-md-6 pr-md-1">
                                        <div class="form-group">
                                            <label class="label-acc">Tên đăng nhập</label>
                                            <input type="text" class="form-control" value="khachhang" disabled>
                                        </div>
                                    </div>
                                    <div class="col-md-6 px-md-1">
                                        <div class="form-group">
                                            <label class="label-acc">Họ và tên</label>
                                            <input type="text" class="form-control" value="Khách Hàng">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 pr-md-1">
                                        <div class="form-group">
                                            <label class="label-acc">Email</label>
                                            <input type="text" class="form-control" value="khachhang@gmail.com">
                                        </div>
                                    </div>
                                    <div class="col-md-6 pl-md-1">
                                        <div class="form-group">
                                            <label class="label-acc">Số điện thoại</label>
                                            <input type="text" class="form-control" value="02927300468">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="label-acc">Địa chỉ</label>
                                            <input type="text" class="form-control" value="288 Đường Nguyễn Văn Linh, Hưng Lợi, Ninh Kiều, Cần Thơ">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 px-md-1">
                                        <div class="form-group">
                                            <label class="label-acc">Ngày sinh</label>
                                            <input type="date" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6 pr-md-1">
                                        <div class="form-group">
                                            <label class="label-acc">Giới tính</label>
                                            <div class="gender-css">
                                                <label class="radio-inline"><input type="radio" name="gender">Nam</label>
                                                <label class="radio-inline"><input type="radio" name="gender">Nữ</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 pr-md-1">
                                        <div class="form-group">
                                            <label class="label-acc">Mật khẩu mới</label>
                                            <input type="password" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-6 pl-md-1">
                                        <div class="form-group">
                                            <label class="label-acc">Xác nhận mật khẩu mới</label>
                                            <input type="password" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="submit" class="mt-10 btn btn-fill btn-success" style="width: 100%;">Cập nhật</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </main>
  </div>
</template>
