<template>
  <section>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
      <!-- User Info -->
      <div class="user-info">
        <div class="image">
          <img src="~/assets/images/user/user.png" width="48" height="48" alt="User" />
        </div>
        <div class="info-container">
          <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</div>
          <div class="email">admin@gmail.com</div>
        </div>
      </div>
      <!-- #User Info -->
      <!-- Menu -->
      <div class="menu">
        <ul class="list">
          <li class="active">
            <a href="index.html">
              <font-awesome-icon :icon="['fas', 'tachometer-alt']"></font-awesome-icon>
              <span>Tổng quan</span>
            </a>
          </li>
          <li>
            <b-button v-b-toggle.collapse-1>
              <a>
                <font-awesome-icon :icon="['fas', 'list']"></font-awesome-icon>
                <span>Sản phẩm</span>
              </a>
            </b-button>
            <b-collapse id="collapse-1" class="mt-2">
              <b-card>
                <a href="pages/tables/jquery-datatable.html">Tất cả sản phẩm</a>
                <a href="pages/tables/normal-tables.html">Nhóm sản phẩm</a>
              </b-card>
            </b-collapse>
          </li>
          <li>
            <a href="pages/delivery/list.html">
              <font-awesome-icon :icon="['fas', 'dolly']"></font-awesome-icon>
              <span>Vận chuyển</span>
            </a>
          </li>
          <li>
            <b-button v-b-toggle.collapse-2>
              <a>
                <font-awesome-icon :icon="['fas', 'clipboard-list']"></font-awesome-icon>
                <span>Đơn hàng</span>
              </a>
            </b-button>
            <b-collapse id="collapse-2" class="mt-2">
              <b-card>
                <a href="pages/orders/list.html">Tất cả đơn hàng</a>
                <a href="pages/orders/create.html">Tạo đơn hàng</a>
              </b-card>
            </b-collapse>
          </li>
          <li>
            <a href="pages/tables/jquery-datatable.html">
              <font-awesome-icon :icon="['fas', 'chart-area']"></font-awesome-icon>
              <span>Thống kê</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="legal">
        <div class="copyright">
          &copy; 2021 Bản quyền thuộc về <a href="javascript:void(0);">Team Building Themes</a>.
        </div>
      </div>
    </aside>
  </section>

</template>
<script>
  import DropdownMenu from '~/node_modules/@innologica/vue-dropdown-menu'
  export default {
    components: {
      DropdownMenu
    }
  }
</script>



