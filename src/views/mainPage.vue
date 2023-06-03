<template>
  <v-app class="app">
    <div class="scroll-area">
      <headerPage /><teamPage data-aos="fade-up" />
      <secondHeaderPage data-aos="fade-up" /><projectPage
        data-aos="fade-up"
      /><footerPageVue />
    </div>
  </v-app>
</template>

<script>
import headerPage from "@/components/mainHeaderPage.vue";
import teamPage from "@/components/teamPage.vue";
import secondHeaderPage from "@/components/secondHeaderPage.vue";
import projectPage from "@/components/projectPage.vue";
import footerPageVue from "../components/footerPage.vue";

import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(AOS.init());

export default {
  components: {
    headerPage,
    teamPage,
    secondHeaderPage,
    projectPage,
    footerPageVue,
  },
};
</script>

<style></style>
