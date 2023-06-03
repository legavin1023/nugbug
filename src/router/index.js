import Vue from "vue";
import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
