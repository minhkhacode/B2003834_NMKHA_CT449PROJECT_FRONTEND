<template>
   <div class="slider-box">
      <div class="slider-content">
         <img src="../images/banner.jpg" alt="">
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
         rewind: true,
         gap: "1rem",
         autoplay: true,
      };

      return { options };
   },
});
</script>

<style scoped>
.slider-content img {
   width: 100%;
   margin: 20px 0;
}

.splide__slide img {
   width: 100%;
   height: 300px;
   object-fit: cover;
   /* Bao phủ toàn bộ khung hình */
   display: block;
}

.content {
   margin-top: 5px;
   position: absolute;
   /* Để đưa nội dung vào trong khung ảnh */
   right: 10px;
   bottom: 20px;
   width: 400px;
   text-align: justify;
   background-color: #333;
   padding: 7px 7px 12px;
   border-radius: 3px;
   opacity: 0.85;
}

.content a {
   text-decoration: none;
   color: white;
   display: inline-block;
   line-height: 24px;
   text-transform: uppercase;
}
</style>
