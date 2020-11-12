<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="ư"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Trang chủ',
            icon: 'ni ni-tv-2 text-info',
            path: '/dashboard'
          }"
        />

        <div class="container-fluid">
          <h6 class="navbar-heading text-muted">Người dùng</h6>
        </div>

        <sidebar-item :link="{name: 'Quản lý cửa hàng', icon: 'ni ni-building text-blue', path: '/tableshop'}"/>
        <sidebar-item :link="{name: 'Quản lý người dùng', icon: 'ni ni-single-02 text-red', path: '/tableuser'}"/>
        <sidebar-item :link="{name: 'Quản lý Shipper', icon: 'ni ni-user-run text-blue', path: '/tableShipper'}"/>

        <hr class="my-2"/>
        <div class="container-fluid">
          <h6 class="navbar-heading text-muted">Gian hàng</h6>
        </div>
        
        <sidebar-item :link="{name: 'Sản phẩm', icon: 'ni ni-tag text-red', path: '/tableproducts'}"/>
        <sidebar-item :link="{name: 'Quản lý bình luận', icon: 'ni ni-align-left-2 text-blue', path: '/tablecomment'}"/>
        <sidebar-item :link="{name: 'Quản lý hóa đơn', icon: 'ni ni-credit-card text-red', path: '/tablebill'}"/>
        <sidebar-item :link="{name: 'Quản lý đơn hàng', icon: 'ni ni-cart text-blue', path: '/tableorder'}"/>
        
        <hr class="my-2"/>

        <sidebar-item :link="{name: 'Quản lý Banner', icon: 'ni ni-album-2 text-green', path: '/tablebanner'}"/>


        <!-- <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
        <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/> -->
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
