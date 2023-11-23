<template>
   <div class="row mb">
      <div id="content" class="col-sm-12">
         <div class="header-content">
            <h3 class="title"><b>DANH SÁCH SẢN PHẨM</b></h3>

         </div>
         <form class="form-inline my-2 my-lg-0 search-btn">
            <input class="form-control mr-sm-2 search" type="search" placeholder="Tìm kiếm..." aria-label="Search"
               v-model="searchText" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
               <i class="fas fa-search"></i>
            </button>
         </form>
         <div class="row product-category">
            <div v-if="filteredProductsCount > 0"></div>
            <p class="non-product" v-else>Không có sản phẩm nào</p>
            <div class="product-grid col-md-6 col-lg-3" :key="index" v-for="(product, index) in filteredProducts">
               <div class="thumb">
                  <div class="image">
                     <a href="#"><img :src="product.imgUrl" alt="Sản phẩm" /></a>
                  </div>
                  <div class="caption">
                     <div class="product">
                        <router-link class="product-name" to="#">
                           <h3><b>{{ product.name }}</b></h3>
                        </router-link>
                        <p>{{ product.description }}</p>
                     </div>
                     <p class="price">
                        {{
                           product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        }}
                        đồng
                     </p>
                  </div>
                  <div class="botton-cart">
                     <button class="btn-cart" @click="addProductToCart(index)">
                        <b><i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ</b>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import ProductService from "../services/product.service";

export default {
   data() {
      return {
         products: [],
         searchText: "",
         localUser: {},
      };
   },

   computed: {
      productStrings() {
         return this.products.map((product) => {
            const { name, description } = product;
            return [name, description].join("");
         });
      },
      filteredProducts() {
         if (!this.searchText) return this.products;
         return this.products.filter((_product, index) =>
            this.productStrings[index].toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
         );
      },
      filteredProductsCount() {
         return this.filteredProducts.length;
      },
   },
   methods: {
      async getAllProduct() {
         try {
            this.products = await ProductService.getAll();
         } catch (error) {
            console.log(error);
         }
      },
      async addProductToCart(index) {
         const saveLocalCart = JSON.parse(
            localStorage.getItem("localProductCart") ?? "[]"
         );
         
         const user = JSON.parse(localStorage.getItem("localUserLogin"));

         if(!user){
            alert(
                  `Dang nhap de them gio hang`
               );
            this.$router.push({ name: "login" });
            return;
         }

         for (const item of saveLocalCart) {
            if (item.id === this.products[index]._id) {
               item.amount++;
               const localProductCart = JSON.stringify(saveLocalCart);
               localStorage.setItem("localProductCart", localProductCart);
               alert(
                  `Số lượng sản phẩm ${this.products[index].name} đã được cập nhật`
               );
               return;
            }
         }
         const temp = {
            id: this.products[index]._id,
            name: this.products[index].name,
            imgUrl: this.products[index].imgUrl,
            price: this.products[index].price,
            description: this.products[index].description,
            amount: 1,
         };
         saveLocalCart.push(temp);
         const localProductCart = JSON.stringify(saveLocalCart);
         localStorage.setItem("localProductCart", localProductCart);
         alert(
            `Sản phẩm ${this.products[index].name} vừa được thêm vào giỏ hàng`
         );
      },
   },

   created() {
      this.getAllProduct();
   },
};
</script>

<style scoped>
.mb {
   margin-top: 120px;
}

#content {
   min-height: 400x;
}

.product-category {
   padding-top: 0px;
}

.header-content {
   display: flex;
   align-items: center;
   justify-content: center;

   font-weight: normal;
   font-size: 22px;
}

.search-btn {
   padding-bottom: 50px;
}

.search {
   width: 87%;
}

.non-product {
   margin-left: 450px;
   margin-top: 15px;
   font-size: 20px;
   font-weight: bold;
   color: blue;
}

.product-grid {
   height: 330px;
   position: relative;
   text-align: center;
   vertical-align: top;
   padding: 7px;
   margin-bottom: 25px;
   border: 3px solid transparent;
   border-radius: 10px;
}

.product-grid:hover {
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   transform: translateY(-5px);
   transition: all 0.3s linear;
}

.product-grid .thumb img {
   object-fit: cover;
   height: 150px;
}

.product-grid .thumb .caption h4 a {
   font-size: 13px;
   line-height: 22px;
   text-decoration: none;
   padding: 5px;
   color: #333;
   margin: 0 auto;
   width: 100%;
   overflow: hidden;
   text-overflow: ellipsis;
   -webkit-line-clamp: 2;
   display: -webkit-box;
   -webkit-box-orient: vertical;
}

.product {
   margin-top: 10px;
}

.product-name {
   text-decoration: none;
}

.price {
   color: #ff0000;
   font-weight: bold;
}

.botton-cart {
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
}

.btn-cart {
   background: #2980b9;
   /* fallback for old browsers */
   background: -webkit-linear-gradient(to right, #2c3e50, #1a557c);
   /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to right, #2c3e50, #1a557c);
   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   color: #fff;
   border-radius: 3px;
   margin-bottom: 10px;
   padding: 5px 5px;
   border: none;
}

.btn-cart:hover {
   background: #2980b9;
   /* fallback for old browsers */
   background: -webkit-linear-gradient(to right, #3d5874, #277cb4);
   /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to right, #3d5874, #277cb4);
   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

@media only screen and (max-width: 720px) {
   .mb {
      margin-top: 0px;
   }
}

@media only screen and (min-width: 721px) and (max-width: 1023px) {
   .mb {
      margin-top: 50px;
   }
}
</style>
