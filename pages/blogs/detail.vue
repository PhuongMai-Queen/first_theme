<template>
  <main class="ps-main">
    <div class="ps-mission-bg bg-cover" data-background="~assets/images/background/background-2.jpg">
      <div class="ps-container">
        <h3>Bài viết</h3>
      </div>
    </div>
    <div class="ps-blog-grid pt-50 pb-50">
      <div class="ps-container">
        <div class="row">
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
            <div class="ps-post--detail">
              <div class="ps-post__thumbnail"><img src="~assets/images/blog/blog-1.jpg" alt=""></div>
              <div class="ps-post__header">
                <h3 class="ps-post__title">Nghiên cứu thực tế đã chứng minh công thức Cao Lớn chứa vitamin K2 trong sữa Kun Cao Lớn giúp trẻ cao nhanh hơn 18.2%</h3>
                <p class="ps-post__meta">Đăng bởi <nuxt-link to="blogs">Admin</nuxt-link> vào Jan 10, 2021</p>
              </div>
              <div class="ps-post__content">
                <p>Kết quả nghiên cứu mới đây của Viện Y học ứng dụng Việt Nam ở trẻ em 8-11 tuổi tại huyện Tiền Hải, tỉnh Thái
                  Bình cho thấy: trẻ được sử dụng sữa có bổ sung công thức Cao Lớn chứa vitamin K2 có chiều cao tăng nhanh hơn
                  18.2% và cân nặng tăng nhanh hơn 19.7% so với trẻ không được sử dụng công thức này.</p>
                <blockquote>
                  <p>Công thức Cao lớn bao gồm 3 loại vitamin và khoáng chất quan trọng với sự phát triển chiều cao và xương,
                    bao gồm:</p>

                  <p>- Canxi: giúp xương chắc khỏe</p>

                  <p>- Vitamin D: hỗ trợ hấp thu canxi vào xương</p>

                  <p>- Vitamin K2: hỗ trợ gắn kết canxi vào xương, giúp xương chắc khỏe.</p>

                 <p>Khi phối hợp nhau, bộ ba vitamin K2+canxi+vitamin D sẽ giúp tăng cường hấp thu và sử dụng canxi tại xương,
                  giúp xương chắc khỏe, hỗ trợ phát triển chiều cao tối ưu.</p>
                </blockquote>
                <p>Đây đều là những kết quả đáng khích lệ đối với hiệu quả của một công thức bổ sung vitamin K2, Canxi và vitamin
                  D lần đầu ra mắt tại Việt Nam. Kết quả này đã mở ra một hướng đi mới nhằm cải thiện chiều cao và
                  tầm vóc của trẻ em Việt Nam nói riêng và của người Việt Nam nói chung. Nếu được nghiên cứu và ứng dụng tốt,
                  tin rằng, tầm vóc của người Việt Nam sẽ sớm đuổi kịp và sánh vai với các cường quốc năm châu.</p>
              </div>
              <div class="ps-post__footer">
                <p class="ps-post__tags"><i class="fa fa-tags"></i>
                  <nuxt-link to="#">Sô cô la lúa mạch</nuxt-link>,
                  <nuxt-link to="#"> Sữa chua ăn</nuxt-link>,
                  <nuxt-link to="#"> Sữa chua uống</nuxt-link>
                </p>
                <div class="ps-post__actions"><span><i class="fa fa-comments"></i> 23 Bình luận</span><span><i
                      class="fa fa-heart"></i> thích</span>
                  <div class="ps-post__social"><i class="fa fa-share-alt"></i><nuxt-link to="#">Chia sẻ</nuxt-link>
                    <ul>
                      <li><nuxt-link to="#"><i class="fa fa-facebook"></i></nuxt-link></li>
                      <li><nuxt-link to="#"><i class="fa fa-twitter"></i></nuxt-link></li>
                      <li><nuxt-link to="#"><i class="fa fa-google-plus"></i></nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="ps-comments">
              <h3>Bình luận (2)</h3>
              <div class="ps-author">
                <div class="ps-author__thumbnail"><img src="~assets/images/user/1.jpg" alt=""></div>
                <div class="ps-author__content">
                  <header>
                    <h4 class="pb-10">KHÁCH HÀNG 1</h4>
                  </header>
                  <p>Sua nay be 18 thang uống dx hk nuxt-link</p>
                </div>
              </div>
              <div class="ps-author">
                <div class="ps-author__thumbnail"><img src="~assets/images/user/1.jpg" alt=""></div>
                <div class="ps-author__content">
                  <header>
                    <h4 class="pb-10">KHÁCH HÀNG 2</h4>
                  </header>
                  <p>mua thùng kun có dc kèm quà kun ko shop</p>
                </div>
              </div>
            </div>
            <form class="ps-form--comment" action="do_action" method="post">
              <h3>THÊM LỜI NHẮN</h3>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <div class="form-group">
                    <input class="form-control" type="text" placeholder="Tên">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <div class="form-group">
                    <input class="form-control" type="email" placeholder="Email">
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                  <div class="form-group">
                    <textarea class="form-control" rows="6" placeholder="Lời nhắn ..."></textarea>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <button class="ps-btn ps-btn--sm ps-contact__submit">Gửi<i class="fas fa-arrow-right"></i></button>
              </div>
            </form>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
            <aside class="ps-widget--sidebar ps-widget--search">
              <form class="ps-search--widget" action="do_action" method="post">
                <input class="form-control" type="text" placeholder="Tìm bài viết...">
                <button><i class="fas fa-search"></i></button>
              </form>
            </aside>
            <aside class="ps-widget--sidebar">
              <div class="ps-widget__header">
                <h3>Bài viết gần đây</h3>
              </div>
              <div class="ps-widget__content">
                <div class="ps-post--sidebar">
                  <div class="ps-post__thumbnail"><nuxt-link to="#"></nuxt-link><img src="~assets/images/blog/blog-1.jpg" alt="">
                  </div>
                  <div class="ps-post__content"><nuxt-link class="ps-post__title" to="#">QUY TRÌNH SẢN XUẤT ĐẠT CHUẨN AN TOÀN</nuxt-link><span>Jan 10, 2021</span></div>
                </div>
                <div class="ps-post--sidebar">
                  <div class="ps-post__thumbnail"><nuxt-link to="#"></nuxt-link><img src="~assets/images/blog/blog-1.jpg" alt="">
                  </div>
                  <div class="ps-post__content"><nuxt-link class="ps-post__title" to="#">QUY TRÌNH SẢN XUẤT ĐẠT CHUẨN AN TOÀN</nuxt-link><span>Jan 10, 2021</span></div>
                </div>
                <div class="ps-post--sidebar">
                  <div class="ps-post__thumbnail"><nuxt-link to="#"></nuxt-link><img src="~assets/images/blog/blog-1.jpg" alt="">
                  </div>
                  <div class="ps-post__content"><nuxt-link class="ps-post__title" to="#">QUY TRÌNH SẢN XUẤT ĐẠT CHUẨN AN TOÀN</nuxt-link><span>Jan 10, 2021</span></div>
                </div>
              </div>
            </aside>
            <aside class="ps-widget--sidebar">
              <div class="ps-widget__header">
                <h3>Banner Quảng cáo</h3>
              </div>
              <div class="ps-widget__content"><nuxt-link to="product-listing"><img src="~assets/images/slider/2.jpg"
                    alt=""></nuxt-link></div>
            </aside>
            <aside class="ps-widget--sidebar">
              <div class="ps-widget__header">
                <h3>Sản phẩm bán chạy</h3>
              </div>
              <div class="ps-widget__content">
                <div class="ps-shoe--sidebar">
                  <div class="ps-shoe__thumbnail"><nuxt-link to="#"></nuxt-link><img src="http://api.tvtp.vn/v0/img/uploads,5FC5D94492756_1606801732.png" alt="">
                  </div>
                  <div class="ps-shoe__content"><nuxt-link class="ps-shoe__title" to="#">KUN sữa chua uống cam chai 90ml thùng 48 chai</nuxt-link>
                    <p>182,000đ</p><nuxt-link class="ps-btn" to="#">MUA NGAY</nuxt-link>
                  </div>
                </div>
                <div class="ps-shoe--sidebar">
                  <div class="ps-shoe__thumbnail"><nuxt-link to="#"></nuxt-link><img src="http://api.tvtp.vn/v0/img/uploads,5FC5D94492756_1606801732.png" alt="">
                  </div>
                  <div class="ps-shoe__content"><nuxt-link class="ps-shoe__title" to="#">KUN sữa chua uống cam chai 90ml thùng 48 chai</nuxt-link>
                    <p>182,000đ</p><nuxt-link class="ps-btn" to="#">MUA NGAY</nuxt-link>
                  </div>
                </div>
                <div class="ps-shoe--sidebar">
                  <div class="ps-shoe__thumbnail"><nuxt-link to="#"></nuxt-link><img src="http://api.tvtp.vn/v0/img/uploads,5FC5D94492756_1606801732.png" alt="">
                  </div>
                  <div class="ps-shoe__content"><nuxt-link class="ps-shoe__title" to="#">KUN sữa chua uống cam chai 90ml thùng 48 chai</nuxt-link>
                    <p>182,000đ</p><nuxt-link class="ps-btn" to="#">MUA NGAY</nuxt-link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>