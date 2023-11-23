<template>
   <div class="wrapper">
      <div class="header">
         <div class="nav-menu">
            <NavMenu />
         </div>
      </div>
      <div class="container">
         <div class="slider">
            <BaseSlider />
         </div>
         <div class="banner-slide">
            <BannerSlide />
         </div>
         <div class="listcategory">
            <ProductScreen />
         </div>
      </div>
      <div class="container">
         <div class="slider-brand">
            <SideBrand />
         </div>
      </div>
      <BaseFooter />
   </div>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";
import BaseSlider from "../components/BaseSlider.vue";
import ProductScreen from "../components/ProductScreen.vue";
import SideBrand from "../components/SideBrand.vue";
import BaseFooter from "../components/BaseFooter.vue";
import BannerSlide from "../components/BannerSlide.vue";

export default {
   name: "Home",
   components: {
      NavMenu,
      BaseSlider,
      ProductScreen,
      SideBrand,
      BaseFooter,
      BannerSlide
   },
};
</script>

<style scoped>
.wrapper {
   width: 100%;
   background: #fff;
}

.header {
   width: 100%;
   height: auto;
}

.container {
   width: 100%;
   height: auto;
   margin-bottom: 20px;
}

.slider {
   width: 100%;
   height: auto;
}

.listcategory {
   width: 100%;
   height: auto;
}

.slider-brand {
   width: 100%;
   height: 150px;
}

.banner-slide {
   width: 100%;
   height: 100px;
}
</style>
