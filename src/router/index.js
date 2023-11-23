import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue';

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import('../components/Login.vue'),
    },
    //Register
    {
        path: "/register",
        name: "register",
        component: () => import('../components/Register.vue'),
    },

    //Admin
    {
        path: "/admin/dashboard",
        name: "admin-dashboard",
        component: () => import('../views/AdminManager.vue'),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import('../components/admin/Login-Admin.vue'),
    },

    //Home
    {
        path: "/",
        name: "home",
        component: Home,
    },

    //Quản lý sản phẩm
    {
        path: "/product",
        name: "product.list",
        component: () => import('../views/products/ProductList.vue'),
    },
    {
        path: "/product/create",
        name: "product.create",
        component: () => import('../views/products/ProductForm.vue'),
    },
    {
        path: "/product/edit/:id",
        name: "product.edit",
        component: () => import('../views/products/ProductForm.vue'),
    },

    //Quản lý tài khoản
    {
        path: "/user",
        name: "user.list",
        component: () => import('../views/users/UserList.vue'),
    },
    {
        path: "/:pathMatch(.*)*", //regular expression
        name: "error",
        component: () => import('../views/Error.vue'),
    },
    
    //Liên hệ
    {
        path: "/contact",
        name: "contact",
        component: () => import('../components/Contact.vue'),
    },

    {
        path: "/about",
        name: "about",
        component: () => import('../components/About.vue'),
    },

    //Giỏ hàng
    {
        path: "/cart",
        name: "cart",
        component: () => import('../components/Cart.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const authToken = localStorage.getItem("localUserLogin");
    if (to.name === "admin-dashboard" && !authToken) {
        // If the user is trying to access the protected route and doesn't have a valid auth token, redirect to the login page.
        next({ name: "admin" });
    } else {
        // Otherwise, allow the user to enter the route.
        next();
    }
});
export default router;