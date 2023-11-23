<template>
   <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <li class="nav-item active">
            <router-link to="/" class="nav-link">
               <img class="logo" src="../images/logo.png" alt="">
            </router-link>
         </li>
         <button style="background-color: #fff !important;" class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse nav" id="navbarNavDropdown">
            <ul class="navbar-nav content">
               <li class="nav-item ">
                  <router-link to="/" class="nav-link link">
                     Trang chủ
                  </router-link>
               </li>
               <li class="nav-item">
                  <router-link to="/about" class="nav-link link">
                     Giới thiệu
                  </router-link>
               </li>
               <li class="nav-item">
                  <router-link to="/contact" class="nav-link link">
                     Liên hệ
                  </router-link>
               </li>
               <li class="nav-item">
                  <router-link to="/cart" class="nav-link link cart">
                     Giỏ hàng
                     <i class="fa-solid fa-cart-shopping"></i>
                     <span>{{ localCarts.length }}</span>

                  </router-link>
               </li>
            </ul>
            
            <ul class="nav-option">
               <li class="nav-item username">
                  <router-link to="/login" class="nav-link " @click="handleLogout" v-if="this.localUser.role != ''">
                     <b>{{ this.localUser.name }}</b>
                     <button class="btn logout-btn">
                        <i class="fa-solid fa-user"></i>
                     </button>
                  </router-link>
               </li>
               <li class="nav-item admin" v-if="this.localUser.role === 'admin'">
                  <router-link to="/admin/dashboard" class="nav-link">
                     <button class="btn admin-btn">
                        <i class="fa-solid fa-user-gear"></i>
                     </button>
                  </router-link>
               </li>
            </ul>
         </div>
      </nav>
   </div>
</template>

<script>
export default {
   data() {
      return {
         localUser: {},
         localCarts: {},
      };
   },
   methods: {
      handleLogout() {
         localStorage.removeItem("localUserLogin");
      },
   },
   mounted() {
      const user = JSON.parse(localStorage.getItem("localUserLogin"));
      this.localUser = user;
      const localProductCart = JSON.parse(
         localStorage.getItem("localProductCart") ?? "[]"
      );
      this.localCarts = localProductCart;
   },
};
</script>

<style>
.content {
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.logo {
   width: 70px;
   margin: 0;
   padding: 0;
}

.header {
   margin-bottom: 20px;
}

.container-fluid {
   padding: 0 0;
}

.nav {
   position: relative;
}

.navbar {
   background: #2980b9;
   /* fallback for old browsers */
   background: -webkit-linear-gradient(to right, #2c3e50, #1a557c);
   /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to right, #2c3e50, #1a557c);
   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}

.navbar .nav-item {
   display: flex;
   align-items: center;

}

.navbar .nav-item:first-child a {
   font-size: 26px;
}

.navbar .nav-item a {
   color: #fff !important;
   text-align: left;
   font-size: 20px;
   font-weight: 500;
}

.link {
   font-size: 20px !important;
}

.link:hover {
   border-bottom: 3px solid #fff;
}

.nav-item ul li a {
   display: flex;
   text-align: left;
}

.cart {
   position: relative;
}

.cart span {
   position: absolute;
   right: -3px;
   top: 0;
   font-size: 16px;
}

.username {
   position: absolute;
   right: 50px;
   bottom: 50%;
   transform: translateY(50%);
}

.admin {
   position: absolute;
   right: 0;
   bottom: 50%;
   transform: translateY(50%);
}


.logout-btn i {
   color: #fff;
   padding: 5px 10px;
   border: 1px solid #fff;
   border-radius: 5px;

}

.admin-btn i {
   color: #fff;
   padding: 5px 10px;
   border: 1px solid #fff;
   border-radius: 5px;
}

.count_products-cart {
   left: -8px;
   top: 2px;
}

@media only screen and (max-width: 720px) {
   .admin {
      position: absolute;
      top: 278px;
      right: 0;
   }

   .cart span {
      right: -12px;
      top: 0;
      font-size: 16px;
   }

   .link:hover {
      border-bottom: none
   }

   .username {
      position: absolute;
      right: -5px;
      bottom: 50%;
      transform: translateY(50%);
   }

   .username b {
      font-size: 20px;

   }

   .admin {
      visibility: hidden;
   }
}

@media only screen and (min-width: 721px) and (max-width: 1023px) {
   .admin {
      position: absolute;
      top: 278px;
      right: 140px;
   }

   .cart span {
      right: -12px;
      top: 0;
      font-size: 16px;
   }

   .link:hover {
      border-bottom: none
   }

   .username {
      position: absolute;
      right: -5px;
      bottom: 50%;
      transform: translateY(50%);
   }

   .username b {
      font-size: 20px;

   }

   .admin {
      visibility: hidden;
   }
}
</style>
