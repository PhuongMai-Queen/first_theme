<template>
  <div>
    <main class="ps-main">
        <div
        class="ps-mission-bg bg-cover"
      >
        <div class="ps-container">
          <h3>Đăng Kí</h3>
        </div>
      </div>
        <div class="container-fluid">
            <div class="form-login">
                <div class="auth-form-section">
                    <form action="index.html" class="auth-form">
                        <div class="form-group">
                            <input type="text" name="username" class="form-control" placeholder="Username">
                        </div>
                        <div class="form-group">
                            <input type="text" name="fullname" class="form-control" placeholder="Họ và tên">
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class="form-control" placeholder="Mật khẩu">
                        </div>
                        <div class="form-group">
                            <input type="password" name="cPassword" class="form-control" placeholder="Xác nhận mật khẩu">
                        </div>
                        <div class="form-group row mt-10 mb-10">
                            <div class="col-sm-12">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="termsAgriment" id="termsAgriment" value="termsAgreed">
                                    Tôi đồng ý với <a href="#" class="text-success">Chính sách bảo mật</a> và <a href="#" class="text-success">Điều khoản dịch vụ</a>.
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success btn-block mb-3">Đăng ký</button>
                        </div>
                    </form>
                    <h5 class="text-center mt-15 mb-3">- Hoặc -</h5>
                    <div class="social-buttons mt-25">
                        <a href="#" class="btn btn-facebook mr-10 mt-15">
                            <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
                            <span class="hidden-xs hidden-sm"></span>
                        </a>
                        <a href="#" class="btn btn-twitter mt-15">
                          <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
                          <span class="hidden-xs hidden-sm"></span>
                        </a>
                        <a href="#" class="btn btn-google ml-10 mt-15">
                            <font-awesome-icon :icon="['fab', 'google-plus']"></font-awesome-icon>
                            <span class="hidden-xs hidden-sm"></span>
                        </a>
                    </div>
                    <hr>
                    <p class="text-center mt-15 mb-3">Bạn đã có tài khoản? <a href="/login">Đăng nhập!</a></p>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>