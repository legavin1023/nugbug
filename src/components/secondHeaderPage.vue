<template>
  <div class="add">
    <VueSlickCarousel class="add-box" v-bind="settings">
      <div class="add-box-ad1 add-box-image">
        <div class="text text-ad1">
          <div>
            <h2>
              혹시 아직도<br />
              안다라스테 안믿으시나요?
            </h2>
            <p>
              세상을 창조한 위대한 창조주,<br />
              죽기전에 알아야할 영계와 영에 대해 알아보세요.
            </p>
            <button>더 알아보기</button>
          </div>
        </div>
      </div>
      <div class="add-box-ad2 add-box-image">
        <div class="text text-ad2">
          <div>
            <h2>
              레드 리륨 중독으로<br />
              고통받고 계신가요?
            </h2>
            <p>
              누구에나 두번째 기회가 있습니다. <br />
              지금 바로 레드리륨중독갱생센터에 등록하세요.
            </p>
            <button>더 알아보기</button>
          </div>
        </div>
      </div>
      <div class="add-box-ad3 add-box-image">
        <div class="text text-ad3">
          <div>
            <h2>
              남들만큼 자라지 않는<br />
              가슴털이 고민이십니까?
            </h2>
            <p>
              남자의 자존심 가슴털이 늘 빈약해서<br />
              고민이셨다면 배릭이 강추하는 이 발모제를 써보세요!
            </p>
            <button>더 알아보기</button>
          </div>
        </div>
      </div>
      <div class="add-box-ad4 add-box-image">
        <div class="text text-ad4">
          <div>
            <h2>
              과거의 영광을 위해!<br />
              엘프들을 다시 한번 위대하게!
            </h2>
            <p>
              잃어버린 영광을 되찾고 엘프들의 유토피아를<br />
              건설해볼 뾰족귀 친구들을 모집합니다.
            </p>
            <button>더 알아보기</button>
          </div>
        </div>
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
        pauseOnHover: true, // 마우스 호버 시 슬라이딩 일시정지
        pauseOnFocus: true, // 포커스 시 슬라이딩 일시정지
        // variableWidth: true,
      },
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    handleWindowResize() {
      if (window.innerWidth <= 863) {
        this.settings.fade = true;
      }
    },
  },
};
</script>

<style></style>
