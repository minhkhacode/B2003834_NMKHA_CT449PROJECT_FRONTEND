<template>
   <div class="wrapper">
      <div class="header">
         <div class="nav-menu">
            <NavMenu />
         </div>
      </div>
      <div class="container">
         <div class="contact">
            <h3><b>LIÊN HỆ VỚI CHÚNG TÔI</b></h3>
            <p>
               <i class="fa-solid fa-location-dot"></i>
               Địa chỉ: Khu II, Đ. 3 Tháng 2, Xuân Khánh, Ninh Kiều, Cần Thơ
            </p>
            <p>
               <i class="fa-solid fa-envelope icon-email"></i>
               Email: kha@gmail.com
            </p>
            <p>
               <i class="fa-solid fa-phone icon-phone"></i>
               Điện thoại: 0123456789
            </p>
            <div class="map">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8247271686037!2d105.77086826704814!3d10.03131811189953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zxJDhuqFpIGjhu41jIEPhuqduIFRoxqE!5e0!3m2!1svi!2s!4v1680785965976!5m2!1svi!2s"
                  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
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
   methods: {
      feedback() {
         alert("Cảm ơn bạn đã đóng góp ý kiến!!");
      },
   },
};
</script>

<style scoped>
.wrapper {
   max-width: 100%;
   background-color: #fff;
}

.header {
   width: 100%;
   height: auto;
}

.contact h3 {
   text-align: center;
   margin-top: 20px;
}

.map {
   margin-bottom: 30px;
   text-align: center;
}

.map iframe {
   width: 800px;
}

@media only screen and (max-width: 720px) {
   .map iframe {
      width: 300px;
   }
}

@media only screen and (min-width: 721px) and (max-width: 1023px) {
   .map iframe {
      width: 600px;
   }
}
</style>
