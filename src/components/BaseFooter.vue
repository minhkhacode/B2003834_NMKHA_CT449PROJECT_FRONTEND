<template>
   <footer id="footer">
      <div class="first-footer">
         <div class="container">
            <div class="d-flex justify-content-around">
               <div class="contact">
                  <h5><b>Thông tin liên hệ</b></h5>
                  <ul>
                     <li class="address">
                        <i class="fa-sharp fa-solid fa-location-dot icon-contact"></i>
                        3/2, Q. Ninh Kiều, TP. CT
                     </li>
                     <li class="phone">
                        <i class="fa-solid fa-phone icon-phone"></i>
                        0123456789
                     </li>
                     <li class="email">
                        <i class="fa-solid fa-envelope icon-email"></i>
                        kha@gmail.com
                     </li>
                  </ul>
               </div>
               <div class="column mg">
                  <h5><b>Dịch vụ khách hàng</b></h5>
                  <ul>
                     <li>
                        <router-link to="/contact">Liên hệ</router-link>
                     </li>
                     <li>
                        <router-link to="/about">Giới thiệu</router-link>
                     </li>
                  </ul>
               </div>
               <div class="column">
                  <h5><b>Mạng xã hội</b></h5>
                  <ul>
                     <li>
                        <i class="fa-brands fa-facebook"></i>
                        <a href="https://www.facebook.com"> Facebook</a>
                     </li>
                     <li>
                        <i class="fa-brands fa-twitter"></i>
                        <a href="https://www.twitter.com"> Twitter</a>
                     </li>
                     <li>
                        <i class="fa-brands fa-instagram"></i>
                        <a href="https://www.instagram.com"> Instagram</a>
                     </li>
                  </ul>
               </div>

            </div>
         </div>
      </div>
   </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
   display: block;
}

.first-footer {
   background: #2980b9;
   /* fallback for old browsers */
   background: -webkit-linear-gradient(to right, #2c3e50, #1a557c);
   /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to right, #2c3e50, #1a557c);
   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

   color: #fff;
   padding: 20px 0;
}

#footer h5 {
   font-size: 18px;

   margin: 0 0 15px 0;
   padding: 0 0 7px 0;
   font-weight: 600;
}

#footer .contact ul {
   list-style: none;
   padding: 0;
}

#footer .contact ul li {

   text-decoration: none;
   display: block;
   padding: 3px 0;
   line-height: 20px;
   font-size: 14px;
}

#footer .icon-contact {
   margin-right: 5px;
   font-size: 16px;
}

#footer .contact ul li+li {
   margin-top: 12px;
}

#footer .column ul {
   list-style: none;
   padding: 0;
}

#footer .column ul li a {
   color: #fff;
   text-decoration: none;
   line-height: 18px;
   font-size: 15px;
}

#footer .column ul li a:hover {
   border-bottom: 2px solid #fff;
}

.mg {
   margin: 0 5px;
}
</style>
