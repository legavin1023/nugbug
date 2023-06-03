<template>
  <div class="project">
    <h2>우리는 이런 프로젝트를 했어요!</h2>
    <div class="custom">
      <button @click="goToPrev" class="custom-button prev-button">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 14L8.61219 12.4091L4.33254 8.12947H14V5.87053H4.33254L8.61219 1.59088L7 0L0 7L7 14Z"
            fill="#9AA5E1"
          />
        </svg>
      </button>
      <button @click="goToNext" class="custom-button next-button">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 14L5.38781 12.4091L9.66746 8.12947H0V5.87053H9.66746L5.38781 1.59088L7 0L14 7L7 14Z"
            fill="#9AA5E1"
          />
        </svg>
      </button>
    </div>
    <VueSlickCarousel class="project-box" v-bind="settings" ref="carousel">
      <div class="project-box-slide">
        <dl>
          <dd class="project-box-image project-box-image-final">
            <span>진행중</span>
          </dd>
          <dt class="project-box-sj">
            <span>web</span>
            <h3>Reference.final</h3>
            <p>직장인들의 두뇌개발을 위한 프로젝트</p>
            <p>2022. 4. 11 ~ 2022. 07. 04</p>
          </dt>
          <dd class="project-box-team">
            <div class="project-box-team-image t1 tooltip">
              <p class="tooltiptext lee">
                <span>팀장</span><span>기획자</span><span>아델.lee</span>
              </p>
            </div>
            <div class="project-box-team-image t2 tooltip">
              <p class="tooltiptext">
                <span>팀원</span><span>디자이너</span><span>홍디</span>
              </p>
            </div>
            <div class="project-box-team-image t3 tooltip">
              <p class="tooltiptext">
                <span>팀원</span><span>프론트엔드</span><span>Oxy</span>
              </p>
            </div>
            <div class="project-box-team-image t4 tooltip">
              <p class="tooltiptext">
                <span>팀원</span><span>백엔드</span><span>엔디안</span>
              </p>
            </div>
          </dd>
          <dd class="project-box-stack">
            <span>figma</span>
            <span>vue.js</span>
            <span>node.js</span>
          </dd>
          <dd class="project-box-pj">
            <button class="project-box-pj-git">프로젝트 깃헙</button>
            <button class="project-box-pj-page">서비스 페이지</button>
          </dd>
        </dl>
      </div>
      <div class="project-box-slide">
        <dl>
          <dd class="project-box-image project-box-image-andraste">
            <span>진행중</span>
          </dd>
          <dt class="project-box-sj">
            <span>web</span>
            <h3>Reference.final</h3>
            <p>For the Andraste</p>
            <p>2022. 4. 10 ~</p>
          </dt>
          <dd class="project-box-team">
            <div class="project-box-team-image t1 tooltip">
              <p class="tooltiptext lee">
                <span>팀장</span><span>기획자</span><span>아델.lee</span>
              </p>
            </div>
            <div class="project-box-team-image t2 tooltip">
              <p class="tooltiptext">
                <span>팀원</span><span>디자이너</span><span>홍디</span>
              </p>
            </div>
            <div class="project-box-team-image t3 tooltip">
              <p class="tooltiptext">
                <span>팀원</span><span>프론트엔드</span><span>Oxy</span>
              </p>
            </div>
            <!-- <div class="project-box-team-image t4 tooltip">
              <p class="tooltiptext">
                <span>팀원</span><span>백엔드</span><span>엔디안</span>
              </p>
            </div> -->
          </dd>
          <dd class="project-box-stack">
            <span>figma</span>
            <span>vue.js</span>
            <span>node.js</span>
          </dd>
          <dd class="project-box-pj">
            <button class="project-box-pj-git">프로젝트 깃헙</button>
            <button class="project-box-pj-page">서비스 페이지</button>
          </dd>
        </dl>
      </div>
      <div class="project-box-slide">
        <dl>
          <dd class="project-box-image project-box-image-web">
            <span>진행중</span>
          </dd>
          <dt class="project-box-sj">
            <span>web</span>
            <h3>프로젝트 팀 홈페이지</h3>
            <p>너그버그의 프로젝트 소개 페이지 제작</p>
            <p>2022. 4. 10 ~</p>
          </dt>
          <dd class="project-box-team">
            <!-- <div class="project-box-team-image t1  tooltip">
              <p class="tooltiptext lee">
                <span>팀장</span><span>기획자</span><span>아델.lee</span>
              </p>
            </div> -->
            <div class="project-box-team-image t2 tooltip">
              <p class="tooltiptext">
                <span>팀원</span><span>디자이너</span><span>홍디</span>
              </p>
            </div>
            <div class="project-box-team-image t3 tooltip">
              <p class="tooltiptext">
                <span>팀원</span><span>프론트엔드</span><span>Oxy</span>
              </p>
            </div>
            <!-- <div class="project-box-team-image t4 tooltip">
              <p class="tooltiptext">
                <span>팀원</span><span>백엔드</span><span>엔디안</span>
              </p>
            </div> -->
          </dd>
          <dd class="project-box-stack">
            <span>figma</span>
            <span>vue.js</span>
            <span>node.js</span>
          </dd>
          <dd class="project-box-pj">
            <button class="project-box-pj-git">프로젝트 깃헙</button>
            <button class="project-box-pj-page">서비스 페이지</button>
          </dd>
        </dl>
      </div>
      <div class="project-box-slide">
        <dl>
          <dd class="project-box-image"><span>미진행</span></dd>
          <dt class="project-box-sj">
            <span>플랫폼</span>
            <h3>구상중</h3>
            <p>영계에서 영감받아오기</p>
            <p>기간</p>
          </dt>
          <dd class="project-box-team">
            <div class="project-box-team-image"></div>
            <div class="project-box-team-image"></div>
            <div class="project-box-team-image"></div>
            <div class="project-box-team-image"></div>
            <!-- <div class="project-box-team-image t1"></div> -->
            <!-- <div class="project-box-team-image t2"></div> -->
            <!-- <div class="project-box-team-image t3"></div> -->
            <!-- <div class="project-box-team-image t4"></div> -->
          </dd>
          <dd class="project-box-stack">
            <span></span>
            <span></span>
            <span></span>
          </dd>
          <dd class="project-box-pj project-box-pj-no">
            <button class="project-box-pj-git">프로젝트 깃헙</button>
            <button class="project-box-pj-page">서비스 페이지</button>
          </dd>
        </dl>
      </div>
      <div class="project-box-slide">
        <dl>
          <dd class="project-box-image"><span>미진행</span></dd>
          <dt class="project-box-sj">
            <span>플랫폼</span>
            <h3>구상중</h3>
            <p>영계에서 영감받아오기</p>
            <p>기간</p>
          </dt>
          <dd class="project-box-team">
            <div class="project-box-team-image"></div>
            <div class="project-box-team-image"></div>
            <div class="project-box-team-image"></div>
            <div class="project-box-team-image"></div>
            <!-- <div class="project-box-team-image t1"></div> -->
            <!-- <div class="project-box-team-image t2"></div> -->
            <!-- <div class="project-box-team-image t3"></div> -->
            <!-- <div class="project-box-team-image t4"></div> -->
          </dd>
          <dd class="project-box-stack">
            <span></span>
            <span></span>
            <span></span>
          </dd>
          <dd class="project-box-pj project-box-pj-no">
            <button class="project-box-pj-git">프로젝트 깃헙</button>
            <button class="project-box-pj-page">서비스 페이지</button>
          </dd>
        </dl>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        fade: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        variableWidth: true,
      },
    };
  },

  methods: {
    goToPrev() {
      this.$refs.carousel.prev();
    },
    goToNext() {
      this.$refs.carousel.next();
    },
  },
};
</script>
