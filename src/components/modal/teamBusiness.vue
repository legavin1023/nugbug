<template>
  <div>
    <h3>우리는 돈주면 더 잘해요.</h3>
    <h4>아래 문의서를 작성해주시면 대략적인 견적서를 송부해드립니다.</h4>
    <form ref="form" @submit.prevent="sendEmail">
      <input
        ref="name"
        v-model="name"
        type="text"
        name="name"
        placeholder="회사 혹은 단체명을 적어주세요"
        class="text"
      />
      <div class="modal-box">
        <section class="selectbox">
          <button
            type="button"
            class="selectbox-toggle-btn"
            @click="togglePosition"
          >
            {{ selectedPosition }}
          </button>
          <ul class="selectbox-option" :class="{ hide: hidePositionOptions }">
            <li v-for="pos in position" :key="pos.text">
              <button
                type="button"
                :class="{
                  'selectbox-option-btn-selected':
                    pos.text === selectedPosition,
                }"
                class="selectbox-option-btn"
                @click="selectPosition(pos.text)"
              >
                {{ pos.text }}
              </button>
            </li>
          </ul>
        </section>
        <p>대면 미팅이 필요합니까?</p>
        <div class="modal-box-radio">
          <input type="radio" id="yes" value="yes" v-model="selectedOption" />
          <label for="yes">예</label>

          <input type="radio" id="no" value="no" v-model="selectedOption" />
          <label for="no">아니오</label>
        </div>
      </div>
      <input
        ref="email"
        v-model="email"
        name="email"
        type="text"
        placeholder="회신받으실 메일 주소를 적어주세요."
        class="text"
      />
      <textarea
        ref="project"
        v-model="project"
        name="project"
        class="text textarea"
        cols="50"
        rows="10"
        placeholder="프로젝트에 대한 자세한 내용을 적어주세요."
      ></textarea>
      <input
        type="submit"
        value="전송하기"
        class="send"
        :disabled="!formIsValid"
        :class="{ 'disabled-button': !formIsValid }"
      />
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      // positionOption: "",
      hidePositionOptions: true,
      position: [
        { text: "필요 포지션", value: "0" },
        { text: "기획", value: "1" },
        { text: "디자인", value: "2" },
        { text: "개발(프론트엔드)", value: "3" },
        { text: "개발(백엔드)", value: "4" },
        { text: "그래픽(2d/3d)", value: "5" },
        { text: "기타", value: "6" },
      ],
      selectedOption: "no",
      selectedPosition: "포지션",
      name: "",
      email: "",
      project: "",
    };
  },
  computed: {
    formIsValid() {
      return (
        this.name &&
        this.selectedPosition !== "포지션" &&
        this.email &&
        this.project
      );
    },
  },
  methods: {
    togglePosition() {
      this.hidePositionOptions = !this.hidePositionOptions;
    },
    selectPosition(text) {
      this.selectedPosition = text;
      this.hidePositionOptions = true;
    },
    sendEmail() {
      // emailjs에 필요한 정보 설정
      const serviceID = "service_5pf9han";
      const templateID = "template_2ypq33e";
      const userID = "PZ319j5mhUdqrnBeH";

      // 폼 데이터 추출
      const formData = {
        name: this.$refs.form.name.value,
        position: this.selectedPosition,
        experience: this.selectedOption,
        email: this.$refs.form.email.value,
        project: this.$refs.project.value,
      };

      // emailjs를 사용하여 이메일 전송
      emailjs
        .send(serviceID, templateID, formData, userID)
        .then(() => {
          // 전송 성공 시 처리할 내용
          console.log("이메일이 성공적으로 전송되었습니다.");
          alert("이메일이 성공적으로 전송되었습니다.");
          // 추가적인 처리나 리다이렉션 등을 수행할 수 있습니다.
          this.$emit("closeDialog");
        })
        .catch((error) => {
          // 전송 실패 시 처리할 내용
          console.error("이메일 전송 중 오류가 발생했습니다:", error);
          alert("이메일 전송 중 오류가 발생했습니다:", error);
          // 실패한 경우에 대한 예외 처리를 수행할 수 있습니다.
        });
    },
  },
};
</script>

<style></style>
