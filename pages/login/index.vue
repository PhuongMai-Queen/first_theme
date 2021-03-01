<template>
  <div>

    <main class="ps-main">
      <div
        class="ps-mission-bg bg-cover"

      >
        <div class="ps-container">
          <h3>Đăng Nhập</h3>
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
                            <input type="password" name="userPassword" class="form-control" placeholder="Mật khẩu">
                        </div>
                        <div class="row mt-10 mb-10">
                            <div class="col-sm-6">
                                <label class="form-check-label" for="termsAgriment">
                                    <input type="checkbox" class="form-check-input" name="termsAgriment" id="termsAgriment" value="termsAgreed">
                                    Ghi nhớ
                                </label>
                            </div>
                            <div class="col-sm-6 text-right">
                                <a href="/forgot-password" class="text-success ">Quên mật khẩu?</a>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success btn-block mb-3">Đăng nhập</button>
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
                    <p class="text-center mt-15 mb-3">Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay!</a></p>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>