<template>
  <div>
    <default-header />
    <main class="ps-main">
      <div class="ps-mission-bg bg-cover">
        <div class="container">
          <h3>Sản phẩm</h3>
        </div>
      </div>
      <div class="container pt-50">
          <div class="row">
            <div class="col-sm-3">
              <side-menu />
            </div>
            <div class="col-sm-9">
              <nuxt/>
            </div>
          </div>
        </div>
    </main>
    <default-footer />
  </div>
</template>
<script>
import DefaultHeader from '~/components/Header/DefaultHeader.vue'
import SlideTop from '~/components/Slide/SlideTop.vue';
import DefaultFooter from '~/components/Footer/DefaultFooter.vue'
import SideMenu from '~/components/Menu/SideMenu.vue'
export default {
  components: {
    DefaultHeader,
    SlideTop,
    DefaultFooter,
    SideMenu
  }
}
</script>

