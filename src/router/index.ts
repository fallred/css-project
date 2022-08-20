import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/demo1-1",
      name: "demo1-1",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/demo1-1.vue"),
    },
    {
      path: "/demo1-2",
      name: "demo1-2",
      component: () => import("../views/demo1-2.vue"),
    },
    {
      path: "/demo3-1",
      name: "demo3-1",
      component: () => import("../views/demo3-1.vue"),
    },
    {
      path: "/demo3-2",
      name: "demo3-2",
      component: () => import("../views/demo3-2.vue"),
    },
    {
      path: "/demo5-1",
      name: "demo5-1",
      component: () => import("../views/demo5-1.vue"),
    },
    {
      path: "/demo5-2",
      name: "demo5-2",
      component: () => import("../views/demo5-2.vue"),
    },
  ],
});

export default router;
