import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import reset from "@/assets/css/reset.css";
import index from "@/assets/scss/index.scss";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";

Vue.use(Vuetify);

const vuetify = new Vuetify();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  reset,
  index,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
