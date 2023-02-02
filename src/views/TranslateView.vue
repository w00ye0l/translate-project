<template>
  <div>
    <HeadComponent></HeadComponent>
    <NavComponent></NavComponent>
    <div class="main">
      <textarea
        rows="10"
        class="translate__obj input__textarea"
        v-model="input"
        placeholder="번역할 문장을 입력해주세요."
      ></textarea>

      <button class="translate__btn" v-on:click="getData()">번역하기</button>

      <div class="translate__obj">
        <p class="result__p">{{ result }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/HeadComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import QueryString from "qs";

export default {
  name: "TranslateView",
  props: ["propsCountry", "propsPlace"],
  data: () => ({
    country: "",
    countries: [
      "미국",
      "일본",
      "중국",
      "베트남",
      "인도네시아",
      "태국",
      "독일",
      "러시아",
      "스페인",
      "이탈리아",
      "프랑스",
    ],
    languages: [
      "en",
      "ja",
      "zh-CN",
      "vi",
      "id",
      "th",
      "de",
      "ru",
      "es",
      "it",
      "fr",
    ],
    lang: "",
    input: "",
    result: "",
  }),
  created() {
    this.country = sessionStorage.getItem("country");
    this.place = sessionStorage.getItem("place");
    this.lang = this.languages[this.countries.indexOf(this.country)];
    // this.getData();
  },
  components: {
    HeadComponent,
    NavComponent,
  },
  methods: {
    async getData() {
      const params = QueryString.stringify({
        source: "ko",
        target: this.lang,
        text: this.input,
      });

      const config = {
        baseURL: "https://proxy.cors.sh/https://openapi.naver.com/v1",
        headers: {
          "x-cors-api-key": "temp_0a5af26e928255d482e7a5efdebeecca",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Naver-Client-Id": "2Rql9F4A4qbEI2DhUe2i",
          "X-Naver-Client-Secret": "QGlM99Zhql",
        },
      };

      try {
        await this.$axios
          .post("/papago/n2mt", params, config)
          .then((res) => {
            if (res.status == 200) {
              console.log(res.data.message.result.translatedText);
              this.result = res.data.message.result.translatedText;
            }
          })
          .catch((error) => {
            console.log("실패", error);
          });
      } catch (error) {
        console.log("실패", error);
      }
    },
  },
};
</script>

<style scoped>
.main {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.translate__obj {
  margin: 2rem 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 10rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
}
.input__textarea {
  border: 0;
  resize: none;
  font-size: 18px;
}
.translate__btn {
  padding: 0.8rem;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #1c9c85;
  border: 0;
  border-radius: 2rem;
}
.result__p {
  width: 100%;
  height: 100%;
  min-width: 18rem;
  min-height: 5rem;
  word-wrap: break-word;
  font-size: 18px;
}
</style>
