<template>
   <div class="container">
      <AdminNavMenu />
      <ProductList />
   </div>
</template>

<script>
import AdminNavMenu from "../components/admin/AdminNavMenu.vue";
import ProductList from "./products/ProductList.vue";

export default {
   components: {
      AdminNavMenu,
      ProductList,
   },
};
</script>

<style scoped>
.container {
   background-color: #fff;
   margin-top: 10px;
}
</style>
