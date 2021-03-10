<template>
  <div>
    <default-header />
<!--    <slide-top />-->
    <nuxt/>
    <default-footer />
  </div>
</template>
<script>
  import DefaultHeader from '~/components/Header/DefaultHeader.vue';
  import SlideTop from '~/components/Slide/SlideTop.vue';
  import DefaultFooter from '~/components/Footer/DefaultFooter.vue';
  export default {
    components: {
      DefaultHeader,
      SlideTop,
      DefaultFooter
    }
  }
</script>

