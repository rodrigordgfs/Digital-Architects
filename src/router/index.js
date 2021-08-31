import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/main"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    // component: () => import('../views/Main/Main'),
  },
  {
    path: "/projects",
    name: "Projects",
    // component: () => import('../views/Main/Main'),
  },
  {
    path: "/certifications",
    name: "Certifications",
    // component: () => import('../views/Main/Main'),
  },
  {
    path: "/contacts",
    name: "Contacts",
    // component: () => import('../views/Main/Main'),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
