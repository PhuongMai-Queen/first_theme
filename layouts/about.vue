<template>
  <div>
    <default-header />
    <slide-top />
    <div class="ps-about-wrap">
      <nuxt/>
      <side-menu />
    </div>
    <default-footer />
  </div>
</template>
<script>
import DefaultHeader from '~/components/Header/DefaultHeader.vue'
import SlideTop from '~/components/Slide/SlideTop.vue';
import DefaultFooter from '~/components/Footer/DefaultFooter.vue'
import SideMenu from '~/components/SideMenu.vue'
export default {
  components: {
    DefaultHeader,
    SlideTop,
    DefaultFooter,
    SideMenu
  }
}
</script>

