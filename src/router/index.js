import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "nugbug",
    component: () => import("@/views/mainPage.vue"),
  },
  {
    path: "/nugbug",
    name: "nugbug",
    component: () => import("@/views/mainPage.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
