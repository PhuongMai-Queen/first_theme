<template>
  <div>
    <div class="search-bar">
      <div class="search-icon">
        <i class="material-icons">search</i>
      </div>
      <input type="text" placeholder="Tìm kiếm...">
      <div class="close-search">
        <i class="material-icons">close</i>
      </div>
    </div>
    <nav class="navbar">
      <div class="container-fluid row">
          <div class="navbar-header col-sm-6">
            <nuxt-link class="navbar-brand" to="/admin">TEAM BUILDING THEMES</nuxt-link>
          </div>
          <div class="col-sm-6">
            <div class="row admin-nav-icon">
              <div>
                <font-awesome-icon :icon="['fas', 'bell']"></font-awesome-icon>
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
              </div>
            </div>
          </div>
        </div>
    </nav>
  </div>
</template>
