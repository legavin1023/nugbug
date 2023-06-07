<template>
  <div class="team">
    <h2>이런 사람들이 모여서 만듭니다</h2>
    <v-dialog v-model="goTeamDialog" persistent max-width="622px">
      <template v-slot:activator="{ on, attrs }">
        <button class="team-go" v-bind="attrs" v-on="on">
          입단 신청하기<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="19"
              height="19"
              rx="9.5"
              stroke="#DADADA"
            />
            <path
              d="M10 14L9.2875 13.3L12.0875 10.5H6V9.5H12.0875L9.2875 6.7L10 6L14 10L10 14Z"
              fill="#747474"
            />
          </svg>
        </button>
      </template>
      <v-card class="modal">
        <v-card-actions>
          <button @click="goTeamDialog = false" class="modal-closeButton">
            x
          </button>
          <teamJoinVue ref="teamJoinRef" @closeDialog="goTeamDialog = false" />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ul class="team-box">
      <li>
        <dl>
          <dt>
            <div class="position">
              <div class="position-box">
                <span>팀장</span>
                <span>기획자</span>
              </div>
              <h4 class="twitter">
                아델.lee<span class="twitter-box">twitter</span>
              </h4>
            </div>
            <div class="profile t1"></div>
          </dt>
          <dd>
            <p>이것도 안돼요?</p>
            <p>
              글 기깔나게 쓰는 문학미소녀, <br />
              그리고 후레직딩 기획자
            </p>
          </dd>
          <dd>
            <button><span>컨택하기</span></button>
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <div class="position">
              <div class="position-box">
                <span>팀원</span>
                <span>디자인</span>
              </div>
              <h4 class="twitter">
                홍디<span class="twitter-box">twitter</span>
              </h4>
            </div>
            <div class="profile t2"></div>
          </dt>
          <dd>
            <p>이 화면 빼면 안되나요?</p>
            <p>
              기획서 보고 합칠 수 있는 화면부터 <br />
              계산해대는 극한의 효율충 후레 디자이너
            </p>
          </dd>
          <dd>
            <button><span>컨택하기</span></button>
          </dd>
        </dl>
      </li>

      <li>
        <dl>
          <dt>
            <div class="position">
              <div class="position-box">
                <span>팀원</span>
                <span>개발자</span>
              </div>
              <h4 class="twitter">
                Oxy<span class="twitter-box">twitter</span>
              </h4>
            </div>
            <div class="profile t3"></div>
          </dt>
          <dd>
            <p>버그와 공존합시다</p>
            <p>
              a부터 z까지 모두 할 줄아는 전천후 <br />
              프론트엔드 개자이너, 웹와꾸의 총책임자
            </p>
          </dd>
          <dd>
            <button><span>컨택하기</span></button>
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <div class="position">
              <div class="position-box">
                <span>팀원</span>
                <span>개발자</span>
              </div>
              <h4 class="twitter">
                엔디안<span class="twitter-box">twitter</span>
              </h4>
            </div>
            <div class="profile t4"></div>
          </dt>
          <dd>
            <p>살암살려!</p>
            <p>
              이과인데도 글도 쓰는 이·문과 통합 사기캐 <br />
              데이터를 주무르는 백엔드 개발자
            </p>
          </dd>
          <dd>
            <button><span>컨택하기</span></button>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import teamJoinVue from "./modal/teamJoin.vue";
export default {
  data() {
    return {
      goTeamDialog: false,
    };
  },
  watch: {
    goTeamDialog(newVal) {
      if (newVal === false) {
        this.$refs.teamJoinRef.resetForm();
      }
    },
  },
  components: { teamJoinVue },
};
</script>

<style></style>
