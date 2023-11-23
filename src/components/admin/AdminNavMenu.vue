<template>
   <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse d-flex justify-content-between nav" id="navbarSupportedContent">
         <ul class="navbar-nav mr-auto ">
            <li class="nav-item active">
               <router-link to="/" class="nav-link">
                  <i class="fa-solid fa-house"></i>
               </router-link>
            </li>
            <li class="nav-item">
               <router-link to="/admin/dashboard" class="nav-link"><b>Quản lý sản phẩm</b></router-link>
            </li>
            <li class="nav-item">
               <router-link to="/user" class="nav-link"><b>Quản lý tài khoản</b></router-link>
            </li>

         </ul>
         <ul>
            <li class="nav-item user_name" v-if="this.local_user.role != ''">
               <router-link to="/" class="nav-link" @click="handleLogout">
                  <b>{{ this.local_user.name }}</b>
                  <button class="btn btn-info logout-btn">
                     <i class="fa-solid fa-right-from-bracket"></i>
                  </button>
               </router-link>
            </li>
         </ul>
      </div>
   </nav>
</template>

<script>
import ProductList from "../../views/products/ProductList.vue";

export default {
   components: {
      ProductList,
   },
   data() {
      return {
         local_user: {},
      };
   },
   methods: {
      handleLogout() {
         localStorage.removeItem("localUserLogin");
         this.$router.push({ name: "admin" });
      },
   },
   mounted() {
      const user = JSON.parse(localStorage.getItem("localUserLogin"));
      this.local_user = user;
   },
};
</script>

<style scoped>
.nav b,
i {
   color: #fff;
}

.navbar {
   border-top: 1px solid #d6d6d6;
   border-bottom: 3px solid #d6d6d6;
   border-right: 0;
   border-left: 0;
}

.navbar .nav-item {
   color: #fff;
   position: relative;
}

.navbar .nav-item a {
   font-family: "Open Sans", sans-serif;
   color: #555 !important;
   text-align: left;
   font-size: 16px;
}

.navbar .nav-item b:hover {
   border-bottom: 3px solid #fff;
}

.nav-item ul li a {
   display: flex;
   text-align: left;
}

.user_name {
   text-transform: uppercase;
}

.logout-btn {
   width: 40px;
   height: auto;
   padding: 0px !important;
   margin-top: -5px;
   margin-left: 5px;
}
</style>
