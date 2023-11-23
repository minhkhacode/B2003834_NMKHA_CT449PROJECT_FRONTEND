<template>
   <div class="container">
      <div class="box-container">
         <h3 class="title"><b>THƯƠNG HIỆU NỔI BẬT</b></h3>
         <Splide :options="options" aria-label="My Favorite Images">
            <SplideSlide class="slide">
               <img src="../images/brands/logo-iphone.png" alt="Thương hiệu 1" />
            </SplideSlide>
            <SplideSlide class="slide">
               <img src="../images/brands/logo-oppo.jpg" alt="Thương hiệu 2" />
            </SplideSlide>
            <SplideSlide class="slide">
               <img src="../images/brands/logo-samsung.png" alt="Thương hiệu 3" />
            </SplideSlide>
            <SplideSlide class="slide">
               <img src="../images/brands/logo-vivo.png" alt="Thương hiệu 4" />
            </SplideSlide>

            <SplideSlide class="slide">
               <img src="../images/brands/logo-realme.png" alt="Thương hiệu 6" />
            </SplideSlide>
            <SplideSlide class="slide">
               <img src="../images/brands/logo-nokia.jpg" alt="Thương hiệu 7" />
            </SplideSlide>
            <SplideSlide class="slide">
               <img src="../images/brands/logo-xiaomi.png" alt="Thương hiệu 5" />
            </SplideSlide>
            <SplideSlide class="slide">
               <img src="../images/brands/logo-mobel.jpg" alt="Thương hiệu 8" />
            </SplideSlide>

         </Splide>
      </div>
   </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";

export default defineComponent({
   components: {
      Splide,
      SplideSlide,
   },
   setup() {
      const options = {
         perPage: 6,
         perMove: 1,
         gap: 2,
         height: 160,
         rewind: true,
         autoplay: true,
      };

      return { options };
   },
});
</script>

<style scoped>
.container {
   margin: 0 auto;
}

.box-container {
   height: 150px;
   padding: 0 0;
}

.title {
   text-align: center;
   font-size: 28px;
   font-weight: 500;
   border-bottom: 3px solid #f7f7f7;
   /* margin-bottom: 30px; */
   padding: 10px 0;
}

.splide__slide {
   height: 45px !important;
   text-align: center;
}

@media only screen and (max-width: 720px) {
   .box-container img {
      width: 180px;
   }

   .box-container .slide {
      padding: 0 65px;

   }

   .box-container .slide:first-child {
      padding-left: 10px;

   }
}

@media only screen and (min-width: 721px) and (max-width: 1023px) {
   .box-container img {
      width: 180px;
   }

   .box-container .slide {
      padding: 0 65px;

   }

}
</style>
