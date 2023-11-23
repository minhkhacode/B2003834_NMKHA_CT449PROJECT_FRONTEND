<template>
   <div class="container">
      <div class="d-flex justify-content-center h-100">
         <div class="card">
            <div class="card-header text-center">
               <h3>Đăng nhập Admin</h3>
            </div>
            <div class="card-body">
               <form @submit.prevent="login()">
                  <div class="input-group form-group">
                     <div class="input-group-prepend">
                        <span class="input-group-text">
                           <i class="fa-solid fa-envelope"></i>
                        </span>
                     </div>
                     <input type="email" class="form-control" placeholder="Email" @blur="validate()" v-model="user.email"
                        :class="{ 'is-invalid': errors.email }" />
                     <div class="invalid-feedback" v-if="errors.email">
                        {{ errors.email }}
                     </div>
                  </div>
                  <div class="input-group form-group">
                     <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                     </div>
                     <input type="password" class="form-control" placeholder="Mật khẩu" @blur="validate()"
                        v-model="user.password" :class="{ 'is-invalid': errors.password }" />
                     <div class="invalid-feedback" v-if="errors.password">
                        {{ errors.password }}
                     </div>
                  </div>
                  <div class="form-group">
                     <input type="submit" value="Đăng nhập" class="btn login_btn" />
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import UserService from "../../services/user.service";

export default {
   data() {
      return {
         errors: {
            email: "",
            password: "",
         },
         user: {
            email: "",
            password: "",
         },
      };
   },
   methods: {
      validate() {
         let isValid = true;

         this.errors = {
            email: "",
            password: "",
         };

         if (!this.user.email) {
            this.errors.email = "Email là bắt buộc";
            isValid = false;
         }

         if (!this.user.password) {
            this.errors.password = "Mật khẩu là bắt buộc";
            isValid = false;
         }
         return isValid;
      },
      async login() {
         if (this.validate()) {
            const userLogin = await UserService.login(this.user);
            const localUserLogin = JSON.stringify(userLogin);
            localStorage.setItem("localUserLogin", localUserLogin);
            if (userLogin.role === "admin") {
               this.$router.push({ name: "admin-dashboard" });
            } else {
               alert("Xin lỗi! Bạn không phải là admin!");
            }
         }
      },
   },
};
</script>

<style scoped>
.container {

   padding-top: 80px;
   padding-bottom: 180px;
   margin-top: 10px;
}

.card {
   height: 370px;
   margin-top: auto;
   margin-bottom: auto;
   width: 400px;
   background-color: rgba(0, 0, 0, 0.3) !important;
}

.social_icon span {
   font-size: 60px;
   margin-left: 10px;
   color: #ffc312;
}

.social_icon span:hover {
   color: white;
   cursor: pointer;
}

.card-header h3 {
   color: white;
}

.social_icon {
   position: absolute;
   right: 20px;
   top: -45px;
}

.input-group-prepend span {
   width: 50px;
   background-color: #35abf0;
   color: black;
   border: 0 !important;
}

input:focus {
   outline: 0 0 0 0 !important;
   box-shadow: 0 0 0 0 !important;
}

.login_btn {
   color: black;
   background-color: #35abf0;
   width: 120px;
}

.login_btn:hover {
   color: black;
   background-color: white;
}

.links {
   color: white;
}

.links a {
   margin-left: 4px;
}
</style>
