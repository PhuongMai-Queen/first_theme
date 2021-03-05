<template>
  <div>
    <admin-header />
    <admin-side-menu />
    <nuxt/>
  </div>
</template>
<script>
import AdminHeader from '~/components/Header/AdminHeader.vue';
import AdminSideMenu from '~/components/Menu/AdminSideMenu.vue';
export default {
  components: {
    AdminHeader,
    AdminSideMenu
  }
}
</script>
