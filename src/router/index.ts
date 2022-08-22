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
      path: "/demo2-1",
      name: "demo2-1",
      component: () => import("../views/demo2-1.vue"),
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
      path: "/demo4-1",
      name: "demo4-1",
      component: () => import("../views/demo4-1.vue"),
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
    {
      path: "/demo5-3",
      name: "demo5-3",
      component: () => import("../views/demo5-3.vue"),
    },
    {
      path: "/demo5-4",
      name: "demo5-4",
      component: () => import("../views/demo5-4.vue"),
    },
    {
      path: "/demo5-5",
      name: "demo5-5",
      component: () => import("../views/demo5-5.vue"),
    },
    {
      path: "/demo5-6",
      name: "demo5-6",
      component: () => import("../views/demo5-6.vue"),
    },
    {
      path: "/demo6-1",
      name: "demo6-1",
      component: () => import("../views/demo6-1.vue"),
    },
    {
      path: "/demo6-2",
      name: "demo6-2",
      component: () => import("../views/demo6-2.vue"),
    },
  ],
});

export default router;
