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
    component: () => import("../views/gallery"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/projects"),
  },
  {
    path: "/projects/:id",
    name: "Project",
    hidden: true,
    component: () => import("../views/projectDetail"),
  },
  {
    path: "/certifications",
    name: "Certifications",
    component: () => import('../views/certifications'),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import('../views/contacts'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
