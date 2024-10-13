<template>
  <div class="header">
    <a
      class="email"
      target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdXhsfyZ7fH33mXbGihshjjri6RGFikMs1UoSvkQjrX-aqO8Q/viewform"
      >이메일</a
    >
    <div class="nugbugImage"></div>
    <div class="header-box">
      <div class="header-box-contents">
        <h2>
          이상하고 재미있는 <br />
          아이디어, 있으신가요?
        </h2>
        <h3>
          칭찬의 말이나 버그리포트, 리퀘스트까지 <br />
          모든 의견을 환영합니다!
        </h3>
      </div>
      <form ref="form" @submit.prevent="sendEmail" class="header-box-form">
        <input
          class="nomovi"
          type="text"
          ref="contents"
          v-model="contents"
          name="contents"
          placeholder="여기에 다양한 의견을 남겨주세요! 리퀘스트도 좋아요!"
        />
        <input
          class="movi"
          type="text"
          ref="contents"
          v-model="contents"
          name="contents"
          placeholder="여기에 다양한 의견을 남겨주세요!"
        />
        <button type="submit" class="header-box-form-button">
          <span>보내기</span>
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.73512 21.8903C2.84058 22.8504 3.60324 23.6124 4.56311 23.7203C6.89965 23.9829 9.33929 24.3149 11.8486 24.3149C14.3578 24.3149 16.7975 23.9829 19.134 23.7203C20.0939 23.6124 20.8565 22.8504 20.962 21.8903C21.2176 19.5627 21.5304 17.1326 21.5304 14.6331C21.5304 12.1336 21.2176 9.70347 20.962 7.3759C20.8565 6.41577 20.0939 5.65377 19.134 5.54589C16.7975 5.28329 14.3578 4.95129 11.8486 4.95129C9.33929 4.95129 6.89965 5.28329 4.56311 5.54589C3.60324 5.65377 2.84058 6.41577 2.73512 7.3759C2.47947 9.70347 2.16675 12.1336 2.16675 14.6331C2.16675 17.1326 2.47947 19.5627 2.73512 21.8903Z"
              fill="white"
            />
            <path
              d="M10.4245 4.9845C8.41491 5.07501 6.4552 5.33317 4.56311 5.54582C3.60324 5.6537 2.84058 6.4157 2.73512 7.37583C2.47947 9.7034 2.16675 12.1336 2.16675 14.633C2.16675 17.1325 2.47947 19.5627 2.73512 21.8902C2.84058 22.8504 3.60324 23.6124 4.56311 23.7203C6.89965 23.9828 9.33929 24.3148 11.8486 24.3148C14.3578 24.3148 16.7975 23.9829 19.134 23.7203C20.0939 23.6124 20.8565 22.8504 20.962 21.8902C21.1592 20.0951 21.3903 18.2389 21.4857 16.3369"
              stroke="#8386D9"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M18.8504 3.00701L12.2702 10.4734L11.3687 14.7132C11.2237 15.3954 11.9348 16.041 12.6008 15.8316L16.8201 14.5051L23.6167 7.35351C24.7455 6.16571 24.5486 4.17903 23.1822 2.97044C21.8478 1.79016 19.9084 1.80653 18.8504 3.00701Z"
              fill="#D7E0FF"
            />
            <path
              d="M18.8504 3.00701L12.2702 10.4734L11.3687 14.7132C11.2237 15.3954 11.9348 16.041 12.6008 15.8316L16.8201 14.5051L23.6167 7.35351C24.7455 6.16571 24.5486 4.17903 23.1822 2.97044C21.8478 1.79016 19.9084 1.80653 18.8504 3.00701Z"
              stroke="#8386D9"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      contents: "",
    };
  },
  methods: {
    sendEmail() {
      // emailjs에 필요한 정보 설정
      const serviceID = "service_5pf9han";
      const templateID = "template_2ypq33e";
      const userID = "PZ319j5mhUdqrnBeH";

      // 폼 데이터 추출
      const formData = {
        contents: this.$refs.form.contents.value,
      };

      // 입력된 텍스트 길이 검사
      if (formData.contents.length < 10) {
        alert("10글자 이상의 내용을 입력해주세요.");
        return; // 서밋 중단
      }

      // 클릭 여부 확인
      if (this.submitting) {
        return; // 이미 서밋 중인 경우 중단
      }

      // 서밋 중 플래그 설정
      this.submitting = true;

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
        })
        .finally(() => {
          // 서밋 완료 후 플래그 초기화
          this.submitting = false;
        });
    },
  },
};
</script>

<style></style>
