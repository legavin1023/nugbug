<template>
  <div class="footer">
    <button button @click="scrollToTop">맨위로</button>
    <div class="footer-box">
      <!-- <div class="footer-box-button">
        <button>트위터 계정가기</button>
        <v-dialog v-model="goTeamDialog1" persistent max-width="622px">
          <template v-slot:activator="{ on, attrs }">
            <button v-bind="attrs" v-on="on">비즈니스 문의하기</button>
          </template>
          <v-card class="modal">
            <v-card-actions>
              <button @click="goTeamDialog1 = false" class="modal-closeButton">
                x
              </button>
              <teamBusiness @closeDialog="goTeamDialog1 = false" />
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="goTeamDialog2" persistent max-width="622px">
          <template v-slot:activator="{ on, attrs }">
            <button v-bind="attrs" v-on="on">프로젝트 협업 문의</button>
          </template>
          <v-card class="modal">
            <v-card-actions>
              <button @click="goTeamDialog2 = false" class="modal-closeButton">
                x
              </button>
              <teamBusiness @closeDialog="goTeamDialog2 = false" />
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div> -->
      <div class="bug"></div>
      <div class="footer-box-nugbug">
        <p>
          <span> 팀 너그버그</span> 는 단지 재미를 위해 구성된 팀으로 이
          페이지의 모든 요소는 <br />
          영리적인 목적을 추구하지 않음을 알립니다.
        </p>
        하지만 돈도 벌고 싶으므로 비즈니스 협의는 개별적으로 문의주시기
        바랍니다.
      </div>
      <hr />
      <div class="logo"></div>

      <div class="footer-box-copy">ⓒ2023. Team nugbug all rights reserved.</div>
    </div>
  </div>
</template>

<script>
// import teamBusiness from "./modal/teamBusiness.vue";
export default {
  data() {
    return {
      goTeamDialog1: false,
      goTeamDialog2: false,
    };
  },
  // components: { teamBusiness },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
