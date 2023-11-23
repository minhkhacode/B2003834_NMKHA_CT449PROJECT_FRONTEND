<template>
   <div class="wrapper">
      <div class="header">
         <div class="nav-menu">
            <NavMenu />
         </div>
         <div class="container text-center">
            <h5>
               Không thể tìm thấy trang. Trở về
               <router-link to="/"><b>Trang chủ.</b></router-link>
            </h5>
         </div>
      </div>
      <BaseFooter />
   </div>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";
import BaseFooter from "../components/BaseFooter.vue";

export default {
   components: {
      NavMenu,
      BaseFooter
   },
};
</script>

<style scoped>
.wrapper {
   max-width: 100%;
   background: #fff;
}

.header {
   width: 100%;
   /* height: 210px; */
   height: auto;
}

.container {
   background-color: #fff;
   margin-top: 20px;
   height: 52vh;
}
</style>
