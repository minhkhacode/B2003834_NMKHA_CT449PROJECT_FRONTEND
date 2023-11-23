<template>
   <div class="wrapper">
      <div class="header">
         <div class="nav-menu">
            <NavMenu />
         </div>
      </div>
      <div class="container">
         <div class="about">
            <h3><b>GIỚI THIỆU</b></h3>
            <img src="../images/gioithieu1.jpg" alt="">
            <p>
               Cửa hàng bán điện thoại uy tín và chuyên nghiệp, cung cấp đầy đủ các sản phẩm điện
               thoại
               thông
               minh từ các thương hiệu nổi tiếng như Apple, Samsung, Xiaomi, Oppo, và nhiều hãng khác. Với đội ngũ nhân
               viên
               giàu kinh nghiệm và thân thiện, HB Store cam kết mang đến cho khách hàng những sản phẩm chất lượng với giá
               cả
               hợp lý, đồng thời cung cấp dịch vụ hậu mãi tốt và hỗ trợ kỹ thuật nhanh chóng. Ngoài ra, cửa hàng còn cung
               cấp
               các phụ kiện điện thoại như ốp lưng, bao da, dán cường lực, sạc dự phòng và tai nghe chất lượng cao để khách
               hàng có thể tùy chọn phù hợp với nhu cầu sử dụng của mình. Với những cam kết và chất lượng dịch vụ tuyệt vời
               như vậy, HB Store sẽ là điểm đến lý tưởng cho những ai đang tìm kiếm một sản phẩm điện thoại mới hoặc cần tư
               vấn về các giải pháp kỹ thuật số.
            </p>
            <p>Một số hình ảnh về cửa hàng:</p>
            <div class="about-img">
               <img src="../images/gioithieu2.jpg" alt="">
               <img src="../images/gioithieu3.jpg" alt="">
               <img src="../images/gioithieu4.jpg" alt="">

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
      BaseFooter,
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
   font-family: "Open Sans", sans-serif;

}

.header {
   width: 100%;
   height: auto;
}

.about h3 {
   text-align: center;
   margin-top: 20px;
}

.about img {
   width: 100%;
}

.about p {
   text-align: justify;
   margin-top: 20px;
}

.about-img {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 20px;
   flex-wrap: wrap;
}

.about-img img {
   width: 350px;
   height: 250px;
}

@media only screen and (max-width: 720px) {
   .about-img img {
      width: 300px;
      height: 200px;
      margin-top: 10px;
   }
}

@media only screen and (min-width: 721px) and (max-width: 1023px) {
   .about-img img {
      width: 500px;
      height: 350px;
      margin-top: 10px;
   }
}
</style>
