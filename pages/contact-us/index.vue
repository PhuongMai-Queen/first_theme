<template>
  <main class="ps-main">
    <div
      class="ps-mission-bg bg-cover"
      data-background="~assets/images/background/background-2.jpg"
    >
      <div class="ps-container">
        <h3>Liên hệ</h3>
      </div>
    </div>
    <div class="ps-contact ps-section pt-50 pb-50">
      <div class="ps-home-contact__form">
        <div class="ps-container">
          <div class="row ps-col-tiny">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.878873932086!2d105.75512251476502!3d10.026853092832782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088476bafffdf%3A0x4da67960eb05332d!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIFRo4buxYyBIw6BuaCBGUFQgUG9seXRlY2huaWMgQ-G6p24gVGjGoQ!5e0!3m2!1sen!2s!4v1611757346492!5m2!1sen!2s"
                width="100%"
                height="450"
                frameborder="0"
                style="border: 0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <h3>Vui lòng để lại thông tin</h3>
              <p>Chúng tôi sẽ liên bằng những thông tin này sớm nhất có thể</p>
              <footer>
                <form action="product-listing.html" method="post">
                  <div class="form-group">
                    <label>Họ và tên <span>*</span></label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="form-group">
                    <label>Email <span>*</span></label>
                    <input class="form-control" type="email" />
                  </div>
                  <div class="form-group">
                    <label
                      >Thông tin cần tư vấn hoặc khiếu nại <span>*</span></label
                    >
                    <textarea class="form-control" rows="4"></textarea>
                  </div>
                  <div class="form-group text-center">
                    <button class="ps-btn">
                      Gửi thông tin <i class="fa fa-angle-right"></i>
                    </button>
                  </div>
                </form>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>